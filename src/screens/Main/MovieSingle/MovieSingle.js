import React from "react";
import { View, Text } from "react-native";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import { WebView } from 'react-native-webview';
/* Styles */
import { styles } from "./movieSingleStyle";

const { trailerWrapper } = styles;

const MovieSingle = ({ MovieStore }) => {
    const { singleMovie, isLoading } = toJS(MovieStore);

    const renderTrailer = () => {
        const { key } = singleMovie.videos.results[0];
        return key && <View style={ trailerWrapper }>
            <WebView
                javaScriptEnabled
                domStorageEnabled
                source={ { uri: `https://www.youtube.com/embed/${ key }` } }
            />
        </View>;
    };

    return (
        <View style={ { flex: 1 } }>
            { renderTrailer() }
        </View>
    )
};

MovieSingle.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title')
});

export default inject("MovieStore")(observer(MovieSingle));
