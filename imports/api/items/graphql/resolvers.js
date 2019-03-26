import Items from "../items";

export const resolvers = {
  Query: {
    items(_, args, ctx) {
      return Items.find({}).fetch();
    }
  }
};
