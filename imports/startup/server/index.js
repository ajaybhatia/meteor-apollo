import { initialize } from "meteor/cultofcoders:apollo";
import { mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import { load } from "graphql-load";

import { typeDefs as linksTypeDefs } from "../../api/links/graphql/typeDefs";
import { resolvers as linksResolvers } from "../../api/links/graphql/resolvers";
import { typeDefs as itemsTypeDefs } from "../../api/items/graphql/typeDefs";
import { resolvers as itemsResolvers } from "../../api/items/graphql/resolvers";

import "./register-api-links";
import "./register-api-items";

const typeList = [linksTypeDefs, itemsTypeDefs];
const resolverList = [linksResolvers, itemsResolvers];

const typeDefs = mergeTypes(typeList);
const resolvers = mergeResolvers(resolverList);

load({
  typeDefs,
  resolvers
});

initialize();
