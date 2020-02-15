import React from "react";
import { View, Text } from "react-native";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

const MovieSingle = ({ MovieStore }) => {
    const { singleMovie, isLoading } = toJS(MovieStore);

    return (
        <View style={ { flex: 1 } }>
            <Text>{ singleMovie.title }</Text>
        </View>
    )
};

export default inject("MovieStore")(observer(MovieSingle));
