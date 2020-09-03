const { ApolloServer, gql } = require("apollo-server");

const students = [
  {
    name: "amaad",
    email: "amaad@gmail.com",
    age: 20,
  },

  {
    name: "amaar",
    email: "amaar@gmail.com",
    age: 20,
  },
];

const resolvers = {
  Query: {
    students: () => students,
  },
};

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  type Students {
    name: String
    email: String
    age: Int
  }

  type Query {
    students: [Students]
  }
`;


const server = new ApolloServer({typeDefs,resolvers})

server.listen().then((url)=>{
console.log("server ruuning at ",url)
})
