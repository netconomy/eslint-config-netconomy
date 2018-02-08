const FS = require('fs');
const Path = require('path');
const Async = require('async');
const Util = require('util');
const CLIEngine = require('eslint').CLIEngine;
const Chalk = require('chalk');

function die(err) {
    console.log(err);
    process.exit(1);
}

/**
 * This should return an object with rule IDs as key and the number of
 * violations as their value. Valid tests should basically have an empty object.
 */
function getExpectedViolations(path, cb) {
    FS.readFile(path, (err, data) => {
        if (err) {
            return cb(err);
        }
        const cfgLine = data.toString('utf-8').split('\n')[0];
        if (!cfgLine.startsWith('//?')) {
            return cb(null, {});
        }
        const cfg = JSON.parse(cfgLine.substring(3));
        return cb(null, cfg);
    });
}

/**
 * Checks the report against the configuration extracted from the test file's
 * header and generates an errors array with all violations.
 */
function checkReport(report, cfg) {
    const foundViolations = {};
    const errors = [];
    report.results.forEach(result => {
        result.messages.forEach(msg => {
            if (typeof foundViolations[msg.ruleId] === 'undefined') {
                foundViolations[msg.ruleId] = [];
            }
            foundViolations[msg.ruleId].push(msg);
        });
    });

    Object.keys(foundViolations).forEach(ruleId => {
        if (typeof cfg[ruleId] === 'undefined') {
            errors.push(`Unexpected rule violation: ${ruleId}\n${Util.inspect(foundViolations[ruleId])}`);
            return;
        }
        if (cfg[ruleId] !== foundViolations[ruleId].length) {
            errors.push(`Unexpected rule violation count. ` +
                        `Expected ${cfg[ruleId]}, got ${foundViolations[ruleId].length}\n` +
                        `${Util.inspect(foundViolations[ruleId])}`);
        }
    });

    Object.keys(cfg).forEach(ruleId => {
        if (typeof foundViolations[ruleId] === 'undefined') {
            errors.push(`Expected rule violation ${ruleId} missing`);
        }
    });

    return errors;
}

FS.readdir('tests', (err, files) => {
    if (err) {
        die(err);
    }

    Async.mapSeries(files.filter(f => f.endsWith('.js')), (f, next) => {
        const fullPath = Path.join('tests', f);
        const preset = f.split('-')[0];
        const engine = new CLIEngine({
            configFile: `.eslint-${preset}`,
            useEslintrc: false
        });
        const report = engine.executeOnFiles([fullPath]);

        getExpectedViolations(fullPath, (err, cfg) => {
            if (err) {
                next(err);
                return;
            }
            console.log(Chalk.bold(`# ${f}`));
            const errors = checkReport(report, cfg);
            if (errors.length) {
                next({
                    test: f,
                    report: report,
                    errors: errors
                });
                return;
            }
            console.log(`${Chalk.bold.green('OK') } Detected ` +
                `${report.errorCount} error(s) and ${report.warningCount} warning(s).`);
            next();
        });
    }, (err) => {
        if (err) {
            console.log(Chalk.bold.red('Tests failed:'));
            if (typeof err['errors']) {
                console.log(Chalk.bold(err.test));
                err.errors.forEach(e => {
                    console.log(`${Chalk.bold.red('x') } ${ e}`);
                });
            } else {
                die(Util.inspect(err, {
                    depth: 5
                }));
            }
        }
    });
});
