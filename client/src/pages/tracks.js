import React from "react";
import { Layout } from "../components";
//import gpl to use to create a query in front end and useQuery to be able to run a query
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

/** TRACKS query to retrieve all tracks */
const TRACKS = gql`
	query GetTracks {
		tracksForHome {
			id
			title
			thumbnail
			durationInSeconds
			modulesCount
			author {
				name
				photo
			}
		}
	}
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
	//loading, error, data built in features of apollo client that will execute based on if data loading, received or not
	const { loading, error, data } = useQuery(TRACKS);

	if (loading) return "Loading...";

	if (error) return `Error! ${error.message}`;

	return (
		/*queryresult is a component that is used to wrap the data being mapped over 
    and will provide a spinner for loading or if an error will display a nothing to display message */
		<Layout grid>
			<QueryResult error={error} loading={loading} data={data}>
				{data?.tracksForHome?.map((track) => (
					<TrackCard key={track.id} track={track} />
				))}
			</QueryResult>
		</Layout>
	);
};

export default Tracks;
