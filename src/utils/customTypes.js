import PropTypes from "prop-types";

/* MovieStore PropTypes */

const movie = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    status: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string.isRequired,
    videos: PropTypes.objectOf(PropTypes.array),
    tagline: PropTypes.string
});

const movies = PropTypes.arrayOf(movie);

export default { movie, movies };

