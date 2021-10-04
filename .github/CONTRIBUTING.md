# Contributing

## Guidelines

Contributions, wheither it is code, bug reporting, or documentation, is always welcome. Just fork, code, commit, and pull request!

For coding standards, we use ESLint and Prettier to ensure everything is good. While not required in your editor of choice, using ESLint while developing is highly recommended as Prettier will prevent any commit if it fails to fix/meet with the current code standards. For naming conventions, please stick with camelCase for general purposes and PascalCase for enums and constants.

## Reporting Bugs and Issues

Bug reports are handled through the issue tracker on the [GitHub repository](https://github.com/Butterstroke/AniList-Node/issues/new/choose).

For bugs and issues, please use the bug report template and fill out as much useful information as possible. This includes but is not limited to: error messages, screenshots of unexpected outputs, and Node.js/package versions in use. 

For questions and support needs, there is a questions template avalible. 

## Developing the Package

1. Fork & clone the repository. 
2. Pick a branch to develop on. 
   * Master branch is the current stable release.
   * Development branch is the recommended branch to work on and merge into. All changes are staged here before release.
4. Test your changes
   * There is no automated testing, you will have to verify your edits manually before making a PR.
   * You can create a testing file in `/tests` if your changes cannot be tested with the current files. Otherwise, please use the provided testing files
5. Ensure your code is documented with [JSDoc3](https://jsdoc.app) in the comments
   * The documentation is auto-generated from these comments. So make sure they are clear and consise.
   * Documentiation files in `/docs` directory do not need to be updated in your changes as they are updated before every release.
6. Commit your changes and submit a [Pull Request](https://github.com/Butterstroke/AniList-Node/pulls).

## Pull Requests 

Any pull requests with the following is accepted after review...

* New features or methods to help wrap the AniList API
* Bug fixes to pre-existing problems or potential problems
* API query updates with adding new or removing depreciated properties

Pull requests that just consist of the following will be not accepted... 

* Minor spelling mistakes or word changes
* Dependancy Updates
* Re-generated Documentation Files