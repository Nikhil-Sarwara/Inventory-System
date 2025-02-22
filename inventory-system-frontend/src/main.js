// // src/main.js
// import { createApp } from "vue";
// import App from "./App.vue";
// import { createApolloProvider } from "@vue/apollo-option";
// import apolloClient from "./apollo"; // Import apollo.js
// import router from "./router";

// import "bootstrap/dist/css/bootstrap.min.css";

// const apolloProvider = createApolloProvider({
//   defaultClient: apolloClient,
// });

// createApp(App)
//   .use(apolloProvider) // Register ApolloProvider
//   .use(router)
//   .mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router

import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.use(router); // Use router
app.mount("#app");
