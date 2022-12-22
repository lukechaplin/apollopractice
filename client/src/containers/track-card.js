import React from "react";
/*importing apollo packages we need here for mutations as want the numberofpageviews to update
as we navigate from homepage to the particular track card page */
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { colors, mq } from "../styles";
import { humanReadableTimeFromSeconds } from "../utils/helpers";
//using a package to make a card on main page a clickable link that will route to the correct track
import { Link } from "@reach/router";

/**
 * Mutation to increment a track's number of views
 */
const INCREMENT_TRACK_VIEWS = gql`
	mutation IncrementTrackViews($incrementTrackViewsId: ID!) {
		incrementTrackViews(id: $incrementTrackViewsId) {
			code
			success
			message
			track {
				id
				numberOfViews
			}
		}
	}
`;

/**
 * Track Card component renders basic info in a card format
 * for each track populating the tracks grid homepage.
 */
/* access the track id from our track prop,
destructure it in addition to the other track fields we already have */
const TrackCard = ({ track }) => {
	const { title, thumbnail, author, length, modulesCount, id } = track;
	//putting useMutation hook into a variable so can be called onClick in component below
	/*first argument in useMutation hook is the mutation operation defined further up and second argument
    is the id of the track we want to update the number of views for, have to put into an array where the 
	values of the hook are the values of the array for it to work correctly */
	const [incrementTrackViews] = useMutation(INCREMENT_TRACK_VIEWS, {
		variables: { incrementTrackViewsId: id },
		// to observe what the mutation response returns in the console
		onCompleted: (data) => {
			console.log(data);
		},
	});

	return (
		//adding id prop to CardContainer component - tells router where to go when component clicked on
		/*onClick prop used so can add in useMutation function as its value so when a tile clicked on homepage 
		mutation is triggered */
		<CardContainer to={`/track/${id}`} onClick={incrementTrackViews}>
			<CardContent>
				<CardImageContainer>
					<CardImage src={thumbnail} alt={title} />
				</CardImageContainer>
				<CardBody>
					<CardTitle>{title || ""}</CardTitle>
					<CardFooter>
						<AuthorImage src={author.photo} />
						<AuthorAndTrack>
							<AuthorName>{author.name}</AuthorName>
							<TrackLength>
								{modulesCount} modules - {humanReadableTimeFromSeconds(length)}
							</TrackLength>
						</AuthorAndTrack>
					</CardFooter>
				</CardBody>
			</CardContent>
		</CardContainer>
	);
};

export default TrackCard;

/** Track Card styled components */
//calling link on styled function invokes the routing package being imported at the top
const CardContainer = styled(Link)({
	borderRadius: 6,
	color: colors.text,
	backgroundSize: "cover",
	backgroundColor: "white",
	boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
	backgroundPosition: "center",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	[mq[0]]: {
		width: "90%",
	},
	[mq[1]]: {
		width: "47%",
	},
	[mq[2]]: {
		width: "31%",
	},
	height: 380,
	margin: 10,
	overflow: "hidden",
	position: "relative",
	":hover": {
		backgroundColor: colors.pink.lightest,
	},
	cursor: "pointer",
});

const CardContent = styled.div({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
	height: "100%",
});

const CardTitle = styled.h3({
	textAlign: "center",
	fontSize: "1.4em",
	lineHeight: "1em",
	fontWeight: 700,
	color: colors.text,
	flex: 1,
});

const CardImageContainer = styled.div({
	height: 220,
	position: "relative",
	"::after": {
		content: '""',
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		background: "rgba(250,0,150,0.20)",
	},
});

const CardImage = styled.img({
	objectFit: "cover",
	width: "100%",
	height: "100%",
	filter: "grayscale(60%)",
});

const CardBody = styled.div({
	padding: 18,
	flex: 1,
	display: "flex",
	color: colors.textSecondary,
	flexDirection: "column",
	justifyContent: "space-around",
});

const CardFooter = styled.div({
	display: "flex",
	flexDirection: "Row",
});

const AuthorImage = styled.img({
	height: 30,
	width: 30,
	marginRight: 8,
	borderRadius: "50%",
	objectFit: "cover",
});

const AuthorAndTrack = styled.div({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
});

const AuthorName = styled.div({
	lineHeight: "1em",
	fontSize: "1.1em",
});

const TrackLength = styled.div({
	fontSize: "0.8em",
});
