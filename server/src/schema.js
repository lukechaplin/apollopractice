/* Tagged template literal, used for wrapping GraphQL strings like the schema definition we're about to write.
This converts GraphQL strings into the format that Apollo libraries expect when working with operations and schemas, and it also enables syntax highlighting.*/
const { gql } = require("apollo-server");

/* For the mutation typ - To increment the number of views for a track
we'll call this mutation incrementTrackViews
This mutation needs to know which track to update (mutate)
so we'll open up parentheses, and inside, we add an argument called id
This argument's type is ID, and it's required, so we'll add an exclamation point (!) at the end
 */

const typeDefs = gql`
	type Query {
		"Get tracks array for homepage grid"
		tracksForHome: [Track!]!
		"Fetch a specific track object, provided a track's ID"
		track(id: ID!): Track
	}

	"A track is a group of Modules that teaches about a specific topic"
	type Track {
		id: ID!
		"The track's title"
		title: String!
		"The track's main author"
		author: Author!
		"The track's main illustration to display in track card or track page detail"
		thumbnail: String
		"The track's approximate length to complete, in minutes"
		length: Int
		"The number of modules this track contains"
		modulesCount: Int
		"The track's complete description, can be in Markdown format"
		description: String
		"The number of times a track has been viewed"
		numberOfViews: Int
		"The track's complete array of Modules"
		modules: [Module!]!
	}

	"Author of a complete Track"
	type Author {
		id: ID!
		"Author's first and last name"
		name: String!
		"Author's profile picture url"
		photo: String
	}

	"A Module is a single unit of teaching. Multiple Modules compose a Track"
	type Module {
		id: ID!
		"The Module's title"
		title: String!
		"The Module's length in minutes"
		length: Int
	}

	"To increment the number of views for a track"
	type Mutation {
		incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
	}

	type IncrementTrackViewsResponse {
		"Similar to HTTP status code, represents the status of the mutation"
		code: Int!
		"Indicates whether the mutation was successful"
		success: Boolean!
		"Human-readable message for the UI"
		message: String!
		"Newly updated track after a successful mutation - object that will be modified"
		track: Track
	}
`;

module.exports = typeDefs;
