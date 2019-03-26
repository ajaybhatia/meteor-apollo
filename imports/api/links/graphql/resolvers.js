import Links from "../links";

export const resolvers = {
  Query: {
    links(_, args, context) {
      return Links.find({}).fetch();
    }
  }
};
