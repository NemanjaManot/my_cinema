import React, { useEffect } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { ActivityIndicator } from "react-native-paper";
/* Services */
import AsyncStorageService from "../../services/asyncStorageService";
/* Styles */
import { styles } from "./initialLoadingStyle";

const { container } = styles;

const InitialLoading = ({ navigation }) => {
    useEffect(() => {
        navigateToAppropriateScreen();
    }, []);

    const navigateToAppropriateScreen = async () => {
        const loggesUser = await AsyncStorageService.getLoggedUser();
        if (loggesUser) {
            navigation.navigate("App");
        } else {
            navigation.navigate("Login");
        }
    };

    return <View style={ container }>
        <ActivityIndicator/>
    </View>
};

InitialLoading.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default InitialLoading;
