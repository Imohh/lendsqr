# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pages Created

- Login
- Dashboard
- User Page

In the project directory, you can run:

#### Detail

Login Page

A simple validated login form which containes the email address and password field
Hide or show password
fully responsive

#### Dashboard

This page is broken down to components;

- Sidebar component
Contains the list of several other components(I was not asked to create) like transactions, savings ...

- Navbar
contains the search bar, logo, notification, docs and user avatar

- Body
it gives data for the users, active users, users with loans, users with savings.
it also displays the full data for all users in a paginated table thats shows the first 10 users.

#### User Page
This page displays every detail of the user fetched from the API


## Tech Stack
- TypeScript
- React
- React Router
- Vercel

## Additional
- I removed the search bar on the user page because the function only works for the dashboard fetched items sothere was no point putting it there so i created a function to hide it.
- i created a validated form field for the login form.



### `npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
