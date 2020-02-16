import React, { useEffect, useState } from "react";
import { Image, View, TouchableOpacity, FlatList } from "react-native";
import { toJS } from "mobx";
import { observer, inject } from "mobx-react";
import { Card, Button } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
/* Components */
import Loader from "../../../components/Loader/Loader";
/* Styles */
import { styles } from "../mainStyle";
/* Theme */
import { theme } from "../../../assets/theme";

const { profileHeaderStyle, buttonsContainer } = styles;

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

    const renderItemMovie = ({ item }) => {
        const { id, title, release_date, poster_path } = item;
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

    const renderHeaderButtons = () => {
        return (
            <View style={ buttonsContainer }>
                <Button
                    style={ { flex: 1 } }
                    mode={ isNowPlaying ? "contained" : "outlined" }
                    onPress={ onNowPlayingPress }
                >
                    Now playing
                </Button>
                <Button
                    style={ { flex: 1 } }
                    mode={ !isNowPlaying ? "contained" : "outlined" }
                    onPress={ onUpcomingPress }
                >
                    Upcoming
                </Button>
            </View>
        )
    };

    return (
        <View style={ { flex: 1 } }>
            <Loader isLoading={ isLoading }/>
            { renderHeaderButtons() }
            { movies && <FlatList
                data={ movies }
                renderItem={ renderItemMovie }
                keyExtractor={ (item, index) => index.toString() }
            /> }
        </View>
    )
};

Movies.navigationOptions = ({ navigation }) => ({
    headerRight: () => (
        <TouchableOpacity
            style={ profileHeaderStyle }
            onPress={ () => navigation.navigate("UserProfile") }
        >
            <MaterialIcon name="person" size={ 25 } color={ theme.colors.primary }/>
        </TouchableOpacity>
    )
});

export default inject("MovieStore")(observer(Movies));
