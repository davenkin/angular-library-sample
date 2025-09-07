## Introduction

This is a sample angular library project generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2..

## How to publish

- Run `npm login` to log into npm registry.
- Increment the `version` of `projects/angular-library-sample/package.json`, otherwise the publish will fail.
- Make some changes to the code base, such adding a new component under `projects/angular-library-sample/src/lib`.
- In root folder, run `npm run build` to build the project.
- In `dist/angular-library-sample`, run `npm publish --access public` to publish to npm.
- Now in another project you can install the library using `npm install --save @davenkin/angular-library-sample@[version]`, where `[version]` is the actual version you want to install.


## How to pack into tar file
- 
