# ESLint Configuration used by Netconomy

This is the ESLint base configuration used by Netconomy for our projects. We
provide the following presets:

* `eslint-config-netconomy/react`
* `eslint-config-netconomy/jquery`
* `eslint-config-netconomy/nodejs`

To use for example the React base configuration within your own ESLint
configuration, simple add following line to your `.eslintrc`:

```
"extends": "netconomy/react"
```

You can find more information about this ESLint feature in the
[official documentation](http://eslint.org/docs/developer-guide/shareable-configs).


## Version pinning

If you want to pin this package and its version to the ESLint version you're
using within your project, you can also install both directly within your
project ...

```
npm install --save-dev eslint
npm install --save-dev eslint-config-netconomy
```

and set the base configuration like this within your `.eslintrc`:

```
{
    "extends": "./node_modules/eslint-config-netconomy/react.js"
}
```


## Test cases

In the `tests` folder you can find a list of files that will be tested against
the provided ESLint configurations. Each file's name indicates what
base-configuration will be used:

* `base-...` will use the base configuration
* `jquery-...` for the jQuery configuration
* `react-...` for the React configuration
* `nodejs-...` for the NodeJS configuration

If you expect rule violations in a test then you have to add a configuration
header to that file. Let's say we are expecting the "eqeqeq" rule to be violated
twice within the test file. In that case the header of that file should look
like this:

```
//? {"eqeqeq": 2}
```

To run all the tests, simply execute `npm test`.
