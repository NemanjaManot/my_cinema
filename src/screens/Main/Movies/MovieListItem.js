import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { Subheading, Title } from "react-native-paper";
/* Theme */
import { theme } from "../../../assets/theme";
/* Styles */
import { styles } from "./moviesStyle";

const { movieWrapper, contentMovieWrapper, imageStyle, itemFooter } = styles;

const MovieListItem = ({ item, onPress }) => {
    const { title, release_date, poster_path, vote_average } = item;
    const imageUri = `https://image.tmdb.org/t/p/w500/${ poster_path }`;
    return (
        <TouchableWithoutFeedback onPress={ onPress }>
            <View style={ movieWrapper }>
                <Image style={ imageStyle } source={ { uri: imageUri } }/>
                <View style={ contentMovieWrapper }>
                    <View>
                        <Title numberOfLines={ 1 } ellipsizeMode='tail'>{ title }</Title>
                        <Subheading>{ release_date }</Subheading>
                    </View>
                    <View style={ itemFooter }>
                        <Text>{ vote_average } / 10</Text>
                        <Text style={ { color: theme.colors.primary } }>show more...</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default MovieListItem
