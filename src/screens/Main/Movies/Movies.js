import React, { useEffect } from "react";
import { ScrollView, Button as RNButton, Image } from "react-native";
import { toJS } from "mobx";
import { observer, inject } from "mobx-react";
import { Card } from "react-native-paper";

const Movies = ({ navigation, MovieStore }) => {
    useEffect(() => {
        MovieStore.getNowPlayingMovies();
    }, [MovieStore]);

    const { movies, isLoading } = toJS(MovieStore);

    const onMoviePress = async (id) => {
        await MovieStore.getSingleMovie(id);
        await navigation.navigate("MovieSingle");
    };

    const renderMovie = (movie) => {
        const { id, title, release_date, poster_path } = movie;
        const imageUri = `https://image.tmdb.org/t/p/w500/${ poster_path }`;
        return (
            <Card
                key={ id }
                onPress={ onMoviePress.bind(this, id) }
            >
                <Card.Title
                    title={ title }
                    subtitle={ release_date }
                />
                <Image style={ { height: 200, width: 150 } } source={ { uri: imageUri } }/>
            </Card>
        )
    };

    return (
        <ScrollView style={ { flex: 1 } }>
            { movies.map(movie => renderMovie(movie)) }
        </ScrollView>
    )
};

Movies.navigationOptions = ({ navigation }) => ({
    headerRight: () => (
        <RNButton
            onPress={ () => navigation.navigate("UserProfile") }
            title="Profile"
            color="#fff"
        />
    )
});

export default inject("MovieStore")(observer(Movies));
