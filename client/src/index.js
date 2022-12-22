import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
//import of apolloclient to use along with inmemory cache and apolloprovider
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

/*new instance of apollo client to use, pass in an object with two values - 
first is url used to connect to sever, second is in memory cache -
 allows it to store and reuse query results so it doesn't have to make as many network requests. */

const client = new ApolloClient({
	// options go here
	uri: "http://localhost:4000",
	cache: new InMemoryCache(),
});

//use apollo provider to wrap the component tree so queries are available globally - apollo uses react useContext feature for that
ReactDOM.render(
	<ApolloProvider client={client}>
		<GlobalStyles />
		<Pages />
	</ApolloProvider>,
	document.getElementById("root")
);
