import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
/* Services */
import AsyncStorageService from "../../../services/asyncStorageService";

const UserProfile = ({ navigation }) => {
    const onLogout = async () => {
        navigation.navigate("Login");
        await AsyncStorageService.logoutUser();
    };

    return (
        <View style={ { flex: 1 } }>
            <Text>User Profile screen</Text>

            <Button
                mode="contained"
                onPress={ onLogout }
            >
                Log out
            </Button>
        </View>
    )
};

export default UserProfile;
