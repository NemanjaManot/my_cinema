import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import PropTypes from "prop-types";
import { Subheading, Title } from "react-native-paper";
/* Theme */
import { theme } from "../../../assets/theme";
/* Styles */
import { styles } from "./moviesStyle";
import { globalStyles } from "../../../assets/globalStyles";
/* Custom Types */
import customTypes from "../../../utils/customTypes";
/* Config */
import { config } from "../../../utils/config";

const { movieWrapper, contentMovieWrapper, imageStyle, itemFooter } = styles;
const { shadow } = globalStyles;
const { imageUrl } = config;

const MovieListItem = ({ item, onPress }) => {
    const { title, release_date, poster_path, vote_average } = item;
    const imageUri = `${ imageUrl }/${ poster_path }`;
    return (
        <TouchableWithoutFeedback onPress={ onPress }>
            <View style={ [movieWrapper, shadow] }>
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

MovieListItem.propTypes = {
    item: customTypes.movie.isRequired,
    onPress: PropTypes.func.isRequired
};

export default MovieListItem;
