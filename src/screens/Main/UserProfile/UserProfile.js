import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { Title, List, Button } from "react-native-paper";
/* Services */
import AsyncStorageService from "../../../services/asyncStorageService";
/* Theme */
import { theme } from "../../../assets/theme";
/* Style */
import { styles } from "./userProfileStyle";
/* Components */
import Loader from "../../../components/Loader/Loader";

const { logoutButtonStyle, contentWrapper } = styles;

const UserProfile = ({ navigation }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        getLoggedUserFromStorage();
    }, []);

    const getLoggedUserFromStorage = async () => {
        const loggedUser = await AsyncStorageService.getLoggedUser();
        setUser(loggedUser);
    };

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

    const renderListIcon = (props, icon) => {
        return (
            <List.Icon
                { ...props }
                icon={ icon }
                color={ theme.colors.primary }
            />
        );
    };

    return (
        <View style={ { flex: 1 } }>
            <Loader isLoading={ !user }/>
            <ScrollView bounces={ false }>
                <View style={ contentWrapper }>
                    <Title style={ { textAlign: 'center' } }>User information</Title>
                    <List.Item
                        title={ user && user.fullName }
                        description="Full Name"
                        left={ props => renderListIcon(props, "email") }
                    />
                    <List.Item
                        title={ user && user.email }
                        description="Email"
                        left={ props => renderListIcon(props, "account") }
                    />
                </View>
            </ScrollView>
            { renderLogoutButton() }
        </View>
    )
};

UserProfile.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default UserProfile;
