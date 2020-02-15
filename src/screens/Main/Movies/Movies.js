import React, { useEffect, useState } from "react";
import { ScrollView, Button as RNButton, Image, View } from "react-native";
import { toJS } from "mobx";
import { observer, inject } from "mobx-react";
import { Card, Button } from "react-native-paper";

const Movies = ({ navigation, MovieStore }) => {
    const [isNowPlaying, setIsNowPlaying] = useState(true);
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

    const onNowPlayingPress = () => {
        MovieStore.getNowPlayingMovies();
        setIsNowPlaying(true)
    };

    const onUpcomingPress = () => {
        MovieStore.getUpcomingMovies();
        setIsNowPlaying(false)
    };

    return (
        <ScrollView style={ { flex: 1 } }>
            <View style={ { flexDirection: 'row', justifyContent: 'space-around' } }>
                <Button mode={ isNowPlaying ? "contained" : "outlined" } onPress={ onNowPlayingPress }>
                    Now playing
                </Button>
                <Button mode={ !isNowPlaying ? "contained" : "outlined" } onPress={ onUpcomingPress }>
                    Upcoming
                </Button>
            </View>
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
