import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
/* Styles */
const container = {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
};

const Loader = () => {
    return (
        <View style={ container }>
            <ActivityIndicator/>
        </View>
    );
};

export default Loader;
