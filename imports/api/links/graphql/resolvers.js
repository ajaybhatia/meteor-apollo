import Links from "../links";

export const resolvers = {
  Query: {
    links(_, args, ctx) {
      return Links.find({}).fetch();
    }
  }
};
