# Picsum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

# Prerequisites
It would be good to have some  experiences in :-
- Project Set up
- Component Generation 
- Routing


#

## Directives
Extended HTML attributes with  `ng-` appended to them 






```  ts
/**
* Structural  Directive  - Changes structure of an obje
* Attribute Directive  - adds  or  removes DOM elements.
**/

```

## Structural Directives 
NgIf - if   statement

NgFor - for  loop

NgSwitch- Switch Case


### Code 


## Attributive Directives
NgClass
NgStyle
NgModel - binding values in a form 



### code


# Forms 
Two main types of forms :- 
Template Driven Forms
Reactive Forms

# Template Driven Forms

# Reactive Driven Forms
FormGroup 
FormControl 

FormArray 


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

