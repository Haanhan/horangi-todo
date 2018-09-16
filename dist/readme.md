
# Sample Todo App for Horangi
## Installation

### Prerequisites
1. Node.js
2. npm

For quick start, on your command line, key in:
`npm run start`
This will run:
1. `npm install`
2. `webpack`
3. `node serverapp` (starts the express server)

Go to localhost:8080 in your browser to access the app.

## Stack Used
The app is a single-page application using React and React Router, served by a basic node.js with express server that serves a single page. It is compiled with Webpack 4 in production mode.

Apollo Client is used to consume the GraphQL APIs.
For styling, the app mostly utilizes Bulma and Font Awesome for icons. Additional styling is done using SASS.
