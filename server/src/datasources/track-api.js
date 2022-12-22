//imports RESTDataSource package so we can use it to handle caching and doing multiple api calls together
const { RESTDataSource } = require("apollo-datasource-rest");

//using a class to create equivalent of models and routes for the api call and wrapping it in the RESTDataSource package so will do what we want it to on data from the server api calls
/*using restdatasource is another way of interacting with a database
- in this instance connecting to a restful API server then based on type of query sent triggering the correct api call in the API server
which then send the appropriate response
but can also do a more traditional way using fetch in front end to a restful node/express server */
//using string interpolation to get the author id and track id into the url so will fetch relevant data (based on what rest API was set up to do)
class TrackAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
	}

	//equivalent of model
	getTracksForHome() {
		//equivalent of route
		return this.get("tracks");
	}

	//equivalent of model
	getAuthor(authorId) {
		//equivalent of route
		return this.get(`author/${authorId}`);
	}
	//equivalent of model
	getTrack(trackId) {
		//equivalent of route
		return this.get(`track/${trackId}`);
	}
	//equivalent of model
	getTrackModules(trackId) {
		//equivalent of route
		return this.get(`track/${trackId}/modules`);
	}
	//below api call will increment numberofviews in a track
	/* This method takes in a trackId parameter. Inside, we need to make an HTTP PATCH request, 
	which we can do by calling this.patch. This method is provided to us by the RESTDataSource class 
	we inherited from. Inside the parentheses, we give it the endpoint, which is track/, 
	followed by the trackId, followed by /numberOfViews. Finally, we return the result of the call. */
	//equivalent of model
	incrementTrackViews(trackId) {
		//equivalent of route
		return this.patch(`track/${trackId}/numberOfViews`);
	}
}

module.exports = TrackAPI;
