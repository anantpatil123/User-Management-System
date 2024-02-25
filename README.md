
In response to the recent launch of Angular 17, I undertook the challenge of adapting to the revamped framework and completed an assignment using innovative coding techniques. Despite being unfamiliar with Angular 17, I embraced the opportunity to explore its new features and enhance my coding skills. Through perseverance and adaptability, I successfully delivered the assignment using a fresh approach to Angular development.

## Installation Steps:

1. Clone the Repository:
Clone the provided repository to your local machine using your preferred Git client or the following command:  git clone <repository_url>

2. Install Dependencies:
Navigate to the cloned repository directory and install the required modules and dependencies using npm (Node Package Manager):npm install

3. Start JSON Server:
Run the following command to start the JSON server, which serves as a mock backend for the application: npx json-server db.json

4. Temporarily Disable CORS in Chrome (Optional, for Local Testing):
For local testing purposes, you may choose to temporarily disable CORS in the Chrome browser. Refer to the documentation below or online resources for instructions on how to disable CORS in your Chrome browser instance.

5. Start the Application:
Launch the Angular application by running the following command in the project directory: ng serve
This command compiles the application and starts a development server. Once the compilation is complete, you can access the application by navigating to http://localhost:4200 in your web browser.

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

## Temporarily Disabling CORS in Chrome for Local Testing

To document the process of temporarily disabling CORS in the Chrome browser for local testing purposes, you can provide the following steps in your project documentation:

Temporarily Disabling CORS in Chrome for Local Testing
When developing and testing web applications locally, you might encounter Cross-Origin Resource Sharing (CORS) restrictions, which can prevent your frontend application from making requests to a different origin (domain) than the one serving the web page. While CORS is a crucial security feature, it can sometimes hinder development and testing workflows.

For local testing purposes only, you can temporarily disable CORS restrictions in the Chrome browser by launching it with specific command-line flags.

Warning: Not Recommended for Production Environment
Disabling CORS is a security risk and should only be done for local development and testing. Never disable CORS in a production environment, as it exposes your application to potential security vulnerabilities.

Steps to Temporarily Disable CORS in Chrome:
Close All Instances of Chrome:
Ensure that all instances of the Chrome browser are closed before proceeding.

Open Command Prompt (Windows) or Terminal (macOS/Linux):
Launch the command-line interface on your operating system.

Run Chrome with Disabled CORS:
Enter the following command in the command-line interface to open Chrome with CORS disabled:

chrome.exe --disable-web-security --user-data-dir="C:/temp_chrome_user_data_dir"
Replace "C:/temp_chrome_user_data_dir" with the desired directory path where Chrome should store its temporary user data. This step ensures that Chrome starts with a clean profile, separate from your regular browsing session.

Test Your Web Application:
With the CORS restrictions disabled, you can now test your web application locally in Chrome without encountering CORS-related errors.

Important Notes:
Security Implications: Disabling CORS removes an important security barrier and exposes your browser to potential security risks. Only use this approach for local development and testing purposes.

Use Incognito Mode (Optional): You can further isolate your testing environment by using Chrome's Incognito mode (Ctrl + Shift + N or Cmd + Shift + N) alongside CORS disabled mode. Incognito mode provides additional privacy and security by not saving browsing history or cookies.

Re-enable CORS After Testing: Once you've completed your testing, close the Chrome browser instance with CORS disabled, and restart Chrome normally for regular browsing. Do not leave CORS disabled unnecessarily.

References:
Alfilatov Blog Post: Run Chrome Without CORS

# UserManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.


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
Create JSON-Server Functionality for local API management.
Work on User-Upsert Component functionalities 1. Create a Reactive Form for creating and updating the user. 2. Create functionalities and API request methods for creating and updating the user.
User List Component UI work and redirection to upsert component.
UI enhancement
Testing
