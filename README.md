# UserManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Problem Statment  

User-Management-System-
It is an assignment to showcase angular skills.

Requirement /Problem Statment :

Modules 1.1 User Module Create a User folder with module.ts containing the routing to navigate to the user page.
1.1.1 User-Upsert Component Create a reactive form with the following fields: FirstName, LastName, Address, Email, Phone. Apply Required validation to all fields. Include email validation for the Email field and ensure the Phone field accepts only 10-digit numbers. On the submit button, save the data into a list. If the user is new, add the user to the list; if the user already exists, update their information. Note: When creating a new user, include a unique ID field in the user object for performing edit and delete actions.

1.1.2 User-List Component Display all created user lists in a grid. Include columns for Name, Email, Phone, and Action in the grid. Display related data in the grid.

In the Action column, add two buttons (Edit and Delete). On Edit button click, send the user details to the User-Upsert Component. On Delete button click, remove the user from the list.

1.2 Validation Check whether the user already exists. If so, show an "already exists" message.

1.3 Data Passing When a user is selected in the User-List component, use the DataService to pass the selected user to the User-Upsert component. When a user is added or updated in the User-Upsert component, use the DataService to notify the User-List component to refresh the user list.

1.4 Styling Apply basic styling to make the application visually appealing. Utilize any CSS framework (Bootstrap/Angular Material/Tailwind CSS).

Additional Point. Create a user interface for typecasting. Initially, display users in the grid using any dummy API that features user data.

Submission Guidelines Submit your completed assignment as a GitHub repository with commit history. Include a README file providing clear instructions for setup and a summary of your design decisions. Ensure that the code is clean, well-commented, and follows best practices.

## Action Plan :

Create a User Page Component With module and routing
Create a User List Component With module and routing
Create a User-Upsert Component With module and routing
Create a user interface
create json-Server Functionality for local API management.
Work on User-Upsert Component functionalities 1. Create a Reactive Form for creating and updating the user. 2. Create functionalities and API request methods for creating and updating the user.
User List Component UI work and redirection to upsert component.
UI enhancement
Testing