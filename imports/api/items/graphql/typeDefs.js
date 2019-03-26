export const typeDefs = `
  type Item {
    _id: ID
    name: String
  }

  type Query {
    items: [Item]
  }
`;
