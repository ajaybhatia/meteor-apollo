import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { initialize } from "meteor/cultofcoders:apollo";

import App from "/imports/ui/App";

const { client } = initialize();

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("react-target")
  );
});
