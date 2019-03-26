import Items from "../items";

export const resolvers = {
  Query: {
    items(_, args, context) {
      return Items.find({}).fetch();
    }
  }
};
