# Picsum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

# Prerequisites
It would be good to have some  experiences in :-
- HTML and Css
- Javascript  / Typescript 
- A sample  landing



## Installation 
Learn about installation  on the [documentation](https://angular.dev/installation)

`npm install -g @angular/cli`

After  installing check the version of angular to be  sure

```console
ng version
```

Currently we are at  `Angular 19` 


## Components 
Components are the building blocks of  angular. For each  component generated you get a 
- Typescript file 
- Html file ( Template)
- Styling File
- Spec file  ( Testing)


To generate a  component run 
`ng g c componentName`

Read More about [components](https://angular.dev/guide/components)

## Routing 
Routing is like a compass   in Angular 
Routing is handled my `RoutingModule`

``` html
<!-- app.component.html -->
<router-outlet></router-outlet>
```

Router Outlet is what load the  routes written in the  `app.component.ts` 


Normal routing
 ``` ts 
 {
    path: string,
    component:ComponentName
 }
 ```
 Default Redirecting
 ```ts 
 {
    path:string
    pathMatch: string 
    redirectUrl:string
 }
 ```

Page Not Found
 ```ts 
{
    path:"**",
    component:ComponentName
}
 ```
