#################################$dropdwon issue resolved
Steps:

1 . install jquery and popper.js

    see jquery and popper.js folder is present in your node_modules , if not then install them
    npm install jquery --save
    npm install popper.js --save
    
2. package.json, search styles and then scripts and add the jqery and popper.js  

            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/popper.js/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
            
            
 3. run it

Help Reference : https://stackoverflow.com/questions/49055721/navbar-drop-down-menu-not-working-with-angular-and-bootstrap-4

##################################reloading webpage with /contact or anything lead 404 error ngnix

In app.module.ts

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
After import add following line to providers.

{provide: LocationStrategy, useClass: HashLocationStrategy}

##################################navbar not showing in mobile display
https://stackoverflow.com/questions/40445515/navbar-not-visible-in-mobile-display/40445579#:~:text=1%20Answer&text=Your%20entire%20navbar%20is%20wrapped,being%20hidden%20in%20mobile%20widths.&text=navbar%2Dheader%20class%20where%20your,and%20logo%20should%20be%20placed.


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
