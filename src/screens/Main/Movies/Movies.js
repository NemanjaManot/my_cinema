import React from "react";
import { View, Text, Button as RNButton } from "react-native";
import { Button } from "react-native-paper";

const Movies = ({ navigation }) => {
    const navigateToSingleMovie = () => {
        navigation.navigate("MovieSingle");
    };

    return (
        <View style={ { flex: 1 } }>
            <Text>Movies screen</Text>

            <Button mode="contained" onPress={ navigateToSingleMovie } style={ { marginTop: 10 } }>
                Go to single movie
            </Button>
        </View>
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

export default Movies;
