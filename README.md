# ``ngx-seed``

This is a seed project for **Angular** applications, built on top of **@angular/cli**. Supposedly works on **v2** and above, but tested only on **v5.0.0**

## Version
> 0.0.1

## First Steps

Before cloning the repo, make sure you have [NodeJS >= v6](https://nodejs.org/en/) and [Angular CLI](https://cli.angular.io/) installed and configured.

Then, install the dependencies and run ``ng serve`` to open a livereload local server with the app.

```sh
$ npm install # installs modules from package.json file, via npm
$ ng serve # opens the livereload server locally (default is localhost:4200)
```

## Production build

``angular/cli`` provides us with production build of the app, meaning that we can minify, lint and beautify all the source files into a production bundle, ready to deploy to a remote server.

```sh
$ ng build --prod
```

The command above will place the production-ready files inside ``/dist/``.

*You can use [ahead-of-time](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) compilation, by using the flag ``--aot``*

## Environments

You can have different environments for your app, using the ``/environments`` folder. Check out [this article](https://medium.com/beautiful-angular/angular-2-and-environment-variables-59c57ba643be) for more information.

```sh
$ ng serve --env=dev # opens the local server, using dev environment

$ ng build --env=dev # runs the build, using prod environment (without --prod flag, the files are not minified)
```

**Bruno Duarte Brito - 2017**