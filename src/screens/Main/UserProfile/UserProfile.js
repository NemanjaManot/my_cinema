import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";
/* Services */
import AsyncStorageService from "../../../services/asyncStorageService";
/* Style */
import { styles } from "./userProfileStyle";

const { logoutButtonStyle } = styles;

const UserProfile = ({ navigation }) => {
    const onLogout = async () => {
        navigation.navigate("Login");
        await AsyncStorageService.logoutUser();
    };

    const renderLogoutButton = () => {
        return (
            <Button
                mode="contained"
                onPress={ onLogout }
                style={ logoutButtonStyle }
                size={ 100 }
            >
                Log out
            </Button>
        )
    };

    return (
        <View style={ { flex: 1 } }>
            <ScrollView bounces={ false }>
                <View style={ { flex: 1 } }>
                    <Text>User Profile screen</Text>
                </View>
            </ScrollView>
            { renderLogoutButton() }
        </View>
    )
};

export default UserProfile;
