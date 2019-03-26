export const typeDefs = `
  type Link {
    _id: ID
    title: String
    url: String
  }

  type Query {
    links: [Link]
  }
`;
