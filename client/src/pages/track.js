import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
/*provided a TrackDetail component, ready to use to display that data.
It's located in the client/src/components folder, can look at it and see 
how the UI elements are organized if you're curious. */
import TrackDetail from "../components/track-detail";

//query goes here to get individual track data
export const GET_TRACK = gql`
	query GetTrack($trackId: ID!) {
		track(id: $trackId) {
			id
			title
			author {
				id
				name
				photo
			}
			thumbnail
			durationInSeconds
			modulesCount
			numberOfViews
			modules {
				id
				title
				durationInSeconds
			}
			description
		}
	}
`;

const Track = ({ trackId }) => {
	/*We pass the GET_TRACK query as the hook's first argument,
       and now the big difference from our previous query is 
     the addition of a second argument - an options object.
    This object will hold a variables key, note variables, 
    with an "S" because it can have multiple variables. This variables
     key takes an object as a value, and here is where we'll pass our trackId. */
	const { loading, error, data } = useQuery(GET_TRACK, {
		variables: { trackId },
	});
	return (
		/*set the track prop in TrackDetail component to data?.track, using optional chaining here since
		the data won't be available until the query is finished loading */
		<Layout>
			<QueryResult error={error} loading={loading} data={data}>
				<TrackDetail track={data?.track} />
			</QueryResult>
		</Layout>
	);
};

export default Track;
