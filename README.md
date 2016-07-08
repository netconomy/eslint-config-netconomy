# ESLint Configuration used by Netconomy

This is the ESLint base configuration used by Netconomy for our
projects. Included are the following presets:

* `eslint-config-netconomy/react`
* `eslint-config-netconomy/jquery`
* `eslint-config-netconomy/nodejs`

To use, for example, the React preset in your own ESLint configuration, simple
add following line to your `.eslintrc`:

```
"extends": "netconomy/react"
```

You can find more information about this ESLint feature in the
[official documentation](http://eslint.org/docs/developer-guide/shareable-configs).

**Note:** If you want to use the React base configuration, you will also have to
install the
[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) package:

```
npm install --save-dev eslint-react-plugin
```

We try to keep this as up-to-date as possible with major ESLint releases. For
details on how our version numbers relate to ESLint's please take a look at the
CHANGELOG.md.


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

To run all the tests, execute `npm install && npm test`.


## Local development and testing

During development you can clone this repo and make that version of
eslint-config-netconomy globally available using `npm link` from within the root
folder. After that you can refer to the configuration using something like ...

```
{
    "extends": "netconomy/react"
}
```


... within your `.eslintrc` as described above.
