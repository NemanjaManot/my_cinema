import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";
/* Services */
import AsyncStorageService from "../../services/asyncStorageService";
/* Styles */
const container = {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
};

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

export default InitialLoading;
