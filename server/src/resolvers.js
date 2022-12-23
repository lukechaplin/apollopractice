/**To use `RESTDataSource` you need resolvers to populate the data for a field in your schema.
A resolver is a function. It has the same name as the field that 
it populates data for. It can fetch data from any data source, 
then transforms that data into the shape your client requires. */
//resolvers object keys correspond to schema types and fields

const resolvers = {
	//The value of query key will be another object that contains the tracksForHome key.
	Query: {
		// returns an array of Tracks that will be used to populate
		// the homepage grid of our web client
		//only using third built in parameter of resolver function so use underscores to flag this (one underscore for first parameter, two for second etc)
		// get all tracks, will be used to populate the homepage grid of our web client
		tracksForHome: (_, __, { dataSources }) => {
			//return dataSources object and access the trackAPI(lowercase here as it's the instance of TrackAPI class extending RESTDataSource)
			//and its getTracksforHome method that built earlier with particular get route we want to use
			return dataSources.trackAPI.getTracksForHome();
		},
		/* get a single track by ID, for the track page, 
		works same as above resolver, but using second built in parameter of resolver functions (arguments) 
		args is an object that contains all GraphQL arguments that were provided for the field in the schema
		taking in id as an argument that will then be added as a parameter 
		to end of rest API to get specifc track we want 
		*/
		track: (_, { id }, { dataSources }) => {
			return dataSources.trackAPI.getTrack(id);
		},
	},
	Mutation: {
		/* increments a track's numberOfViews property, this resolver function is updating a field but
		then returning an object not just the field which was updated the resolver is async - so server
		waiting for the response to complete rather than trying to return a response immediately
		so set up for this resolver matches a more traditional model function on a server call */
		incrementTrackViews: async (_, { id }, { dataSources }) => {
			/*track variable below is equivalent of using payload, if updating multiple fields in data
			can destructure to have them all in the const e.g. const {track, module} = */
			/*When using try, catch with restdatasource apollo server has an extensions field that gives
			you access to more error details using the extension provided by using restdatasoure 
			extended on the TrackPI class - it enriches error response body with more details */
			try {
				const track = await dataSources.trackAPI.incrementTrackViews(id);
				return {
					code: 200,
					success: true,
					message: `Successfully incremented number of views for track ${id}`,
					track,
				};
			} catch (err) {
				//return an object with the same properties/shape as the object in the success case above, but with different values.
				return {
					//gives access to the response status and body when using class based datasource objects in your resolvers
					code: err.extensions.response.status,
					success: false,
					//will provide error message as the value for the message field - equivalent of console.error
					message: err.extensions.response.body,
					track: null,
				};
			}
		},
	},

	//using a key called Track (indicates for the track schema) that within it have a author field and the resolver function that will call the getauthor method and get the author info
	Track: {
		/* 
        The TrackAPI's getAuthor method needs an authorId. 
        We'll get this value from the parent argument passed to the resolver in tracksForHome query. 
        The parent argument contains data returned by our tracksForHome query resolver above, 
        and because tracksForHome returns a list (array), Apollo Server iterates through 
        that list and calls the author resolver once for each track (each item in the array). It passes the current track as the value of parent,
        enabling us to extract the authorId - 
		we get to the authorID from the parent object value by destructuring the authorID value out of it 
		Also if track query called will as specific track is pulled directly above will not happen and will author resolver then called 
        */
		author: ({ authorId }, _, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId);
		},
		/*The TrackAPI's getTrackModules method needs an Id. 
        We'll get this value from the parent argument passed to the resolver in track query.
        The parent argument contains data returned by our track query resolver above, if multiple modules resolver will execute multiple times to get all this data */
		modules: ({ id }, _, { dataSources }) => {
			return dataSources.trackAPI.getTrackModules(id);
		},
		//replacing length field in track used before (now deprecated)
		durationInSeconds: ({ length }) => length,
	},
	//replacing length field in module used before (now deprecated)
	Module: {
		durationInSeconds: ({ length }) => length,
	},
};

module.exports = { resolvers };
