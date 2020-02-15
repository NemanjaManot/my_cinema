import React, { useEffect } from "react";
/* Components */
import Loader from "../../components/Loader/Loader";
/* Services */
import AsyncStorageService from "../../services/asyncStorageService";

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

    return <Loader/>;
};

export default InitialLoading;
