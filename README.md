##################################How to push angular app to pcf
https://dzone.com/articles/deploying-angular-6-application-to-cloud-foundry

ng build --prod( I tried ng build only) on root folder (It will create all neceesary files to deploy to pcf)
goto dist > my-first-app > create manifest.yml file
add below content
applications:
- name: my-first-app
  buildpacks:
  - https://github.com/cloudfoundry/staticfile-buildpack
  disk_quota: 1G
  instances: 1
  memory: 1G
  routes:
  - route: my-first-app-manzer-turtle-yp.cfapps.io
  timeout: 120
  
 ###################################for Bootsrapt Crousel on angular version 9, follow the below process

https://www.c-sharpcorner.com/article/how-to-use-bootstrap-carousel-in-angular-8/

####################################Angular Issues
################Issue :ng serve : Could not find module “@angular-devkit/build-angular”
reproduce steps: download zip file of angular project from github and import in local

Solution: in angular project dir type below command
npm install --save-dev @angular-devkit/build-angular

################Issue : An unhandled exception occurred: Cannot find module '@webassemblyjs/floating-poi nt-hex-parser'

Reproduce: due to some package in node_module folder of angulart, above issue occur. eg: I did npm audit fix anf then this error occur

Solution:
npm install --save @angular/material @angular/cdk
rm -rf node_modules
npm install

Help: https://github.com/webpack/webpack/issues/8746


#################Issue: Cannot find module '@angular/core' or its corresponding type declarations.ts(2307)
Reproduce: due to some package in node_module folder of angulart, above issue occur. eg: I did npm audit fix anf then this error occur

Solution:
npm install --save @angular/material @angular/cdk
rm -rf node_modules
npm install

Help: https://stackoverflow.com/questions/49359043/error-ts2307-cannot-find-module-angular-core

# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
