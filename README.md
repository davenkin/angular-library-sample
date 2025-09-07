## Introduction

This is a sample angular library project generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.

## How to publish to official npm registry 

- Run `npm login` to log into npm registry.
- Increment the `version` of `projects/angular-library-sample/package.json`, otherwise the publish will fail.
- Make some changes to the code base, such adding a new component under `projects/angular-library-sample/src/lib`.
- In root folder, run `npm run build` to build the project.
- In `dist/angular-library-sample`, run `npm publish --access public` to publish to npm.
- In consuming project you can install the library using `npm install --save @davenkin/angular-library-sample@[version]`, where `[version]` is the actual version you want to install.


## How to pack into local tar file and install in consuming project
- In root folder, run `npm run build` to build the project.
- In `dist/angular-library-sample`, run `npm pack` to pack the distribution folder into tar file.
- In consuming project, install by `npm install path-to-the-tarbar-file.tgz`


## How to use `npm link` to do local debugging
- In root folder, run `npm run watch` to build the project in watch mode.
- In `dist/angular-library-sample`, run `npm link`.
- In consuming project's root folder, run `npm link @davenkin/angular-library-sample` and then `npm start`.
- For unlink from consuming project, run `npm unlink @davenkin/angular-library-sample`.
- For unlink from library project, run `npm unlink -g`.
