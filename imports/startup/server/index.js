import { initialize } from "meteor/cultofcoders:apollo";
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import { initAccounts } from "meteor/cultofcoders:apollo-accounts";
import { load, getSchema } from "graphql-load";
import gql from "graphql-tag";

import { typeDefs as linksTypeDefs } from "../../api/links/graphql/typeDefs";
import { resolvers as linksResolvers } from "../../api/links/graphql/resolvers";
import { typeDefs as itemsTypeDefs } from "../../api/items/graphql/typeDefs";
import { resolvers as itemsResolvers } from "../../api/items/graphql/resolvers";

import "./register-api-links";
import "./register-api-items";

load(
  initAccounts({
    loginWithFacebook: false,
    loginWithGoogle: false,
    loginWithLinkedIn: false,
    loginWithPhone: false,
    loginWithPassword: true
    // overrideCreateUser(createUser, _, args, context) {
    //   // Optionally override createUser if you need custom logic
    //   // Or simply restrict him from authenticating
    //   createUser(_, args, context);
    // }
  })
);

const usersTypeDefs = gql`
  type User {
    id: ID
  }
`;

const typeList = [usersTypeDefs, linksTypeDefs, itemsTypeDefs];
const resolverList = [linksResolvers, itemsResolvers];

const typeDefs = mergeTypes(typeList);
const resolvers = mergeResolvers(resolverList);

load({
  typeDefs,
  resolvers
});

// initialize Apollo Server
initialize();
