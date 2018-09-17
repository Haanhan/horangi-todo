
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

## References

### React
https://reactjs.org/docs/getting-started.html

#### React lifecycle
https://reactjs.org/docs/react-component.html

#### Container and Presentation Components
https://medium.com/@learnreact/container-components-c0e67432e005

### React Router
https://reacttraining.com/react-router/web/guides/basic-components

https://reacttraining.com/react-router/web/api/BrowserRouter

https://github.com/bripkens/connect-history-api-fallback

### GraphQL Mutations and Queries
http://graphql.github.io/learn/queries/

### Apollo Client
https://www.apollographql.com/docs/react/

#### Middleware
https://www.apollographql.com/docs/react/advanced/network-layer.html

#### Apollo link state
https://www.robinwieruch.de/react-apollo-link-state-tutorial/

### Bulma
https://bulma.io

### Webpack
#### Transform Class Properties
https://babeljs.io/docs/en/babel-plugin-transform-class-properties/