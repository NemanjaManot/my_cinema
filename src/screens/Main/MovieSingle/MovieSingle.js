import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import { WebView } from 'react-native-webview';
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Title, Chip, Subheading, Paragraph } from "react-native-paper";
/* Styles */
import { styles } from "./movieSingleStyle";
import { globalStyles } from "../../../assets/globalStyles";
/* Theme */
import { theme } from "../../../assets/theme";
/* Custom Types */
import customTypes from "../../../utils/customTypes";

const {
    trailerWrapper,
    imageStyle,
    verticalSpacing,
    header,
    horizontalSpacing,
    headerContent,
    chipStyle,
    chipTextStyle,
    genreList,
    taglineWrapper,
    taglineText,
    imageWrapper
} = styles;
const { shadow } = globalStyles;

const MovieSingle = ({ MovieStore }) => {
    const { singleMovie, isLoading } = toJS(MovieStore);

    const renderHeader = () => {
        const { poster_path, title, release_date, status, vote_average } = singleMovie;
        const imageUri = `https://image.tmdb.org/t/p/w500/${ poster_path }`;
        return (
            <View style={ [header, shadow] }>
                <View style={ imageWrapper }>
                    <Image style={ imageStyle } source={ { uri: imageUri } }/>
                </View>
                <View style={ headerContent }>
                    <Subheading style={ { fontWeight: 'bold' } }>
                        { title } ({ new Date(release_date).getFullYear() })
                    </Subheading>
                    <Paragraph style={ { fontStyle: "italic" } }>Status: { status }</Paragraph>
                    <Paragraph>Release date: { release_date }</Paragraph>
                    <Paragraph>Rating: { vote_average } / 10</Paragraph>
                </View>
            </View>
        )
    };

    const renderGenres = () => {
        const { genres } = singleMovie;
        return (
            <View style={ verticalSpacing }>
                <Title>Genres</Title>
                <View style={ genreList }>
                    { genres.map(({ id, name }) =>
                        <Chip key={ id } textStyle={ chipTextStyle } style={ chipStyle }>
                            { name }
                        </Chip>)
                    }
                </View>
            </View>
        )
    };

    const renderOverview = () => (
        <View style={ verticalSpacing }>
            <Title>Overview</Title>
            <Text>{ singleMovie.overview }</Text>
        </View>
    );


    const renderTrailer = () => {
        const { key } = singleMovie.videos.results[0];
        return key && <View style={ trailerWrapper }>
            <Title>Trailer</Title>
            <WebView
                javaScriptEnabled
                domStorageEnabled
                source={ { uri: `https://www.youtube.com/embed/${ key }` } }
            />
        </View>;
    };

    const renderTagline = () => {
        const { tagline } = singleMovie;
        return (
            <View style={ verticalSpacing }>
                <Title>Tagline</Title>
                <View style={ taglineWrapper }>
                    <MaterialIcon name="movie-filter" size={ 25 } color={ theme.colors.primary }/>
                    <Text numberOfLines={ 4 } style={ taglineText }>"{ tagline }"</Text>
                </View>
            </View>
        )
    };
    console.log('singlemovie', singleMovie)

    return (
        <ScrollView bounces={ false } style={ { flex: 1 } }>
            { renderHeader() }
            <View style={ horizontalSpacing }>
                { renderGenres() }
                { renderOverview() }
                { renderTrailer() }
                { renderTagline() }
            </View>
        </ScrollView>
    )
};

MovieSingle.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title')
});

MovieSingle.propTypes = {
    MovieStore: PropTypes.shape(
        {
            singleMovie: customTypes.movie.isRequired,
            isLoading: PropTypes.bool.isRequired,
        }
    )
};

export default inject("MovieStore")(observer(MovieSingle));
