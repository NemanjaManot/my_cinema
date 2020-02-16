import React, { useEffect, useState } from "react";
import { TouchableOpacity, FlatList, View } from "react-native";
import { toJS } from "mobx";
import { observer, inject } from "mobx-react";
import { Button } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
/* Components */
import Loader from "../../../components/Loader/Loader";
import MovieListItem from "./MovieListItem";
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

    const onMoviePress = async (id, title) => {
        await MovieStore.getSingleMovie(id);
        await navigation.navigate("MovieSingle", { title: title });
    };

    const renderItemMovie = ({ item }) => {
        return <MovieListItem item={ item } onPress={ onMoviePress.bind(this, item.id, item.title) }/>;
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
