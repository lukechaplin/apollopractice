//TODO

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema.js");
//inport of resolvers that will be passed to server to be used
const { resolvers } = require("./resolvers");
//import of TrackAPI class object - which contains url and models used for interacting with database
const TrackAPI = require("./datasources/track-api");

//instance of apollo server passing in the schema that any request from the client will be validated against
//second parameter built in feature of apollo - allows for mocked data (for testing) or your resolvers to be passed in
/* To connect server with TrackAPI (database url), dataSources key added into apolloServer instance as third arguement - like in resolver functions. 
This is what enables access to the dataSources.trackAPI (and its methods) from the context parameter of our resolvers. 
Apollo Server takes care of all the context and connections*/

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			trackAPI: new TrackAPI(),
		};
	},
});

server.listen().then(() => {
	console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});
