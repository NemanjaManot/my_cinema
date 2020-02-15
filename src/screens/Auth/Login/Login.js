import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Login = ({ navigation }) => {
    const navigateToRegister = () => {
        navigation.navigate("Registration")
    };

    const tryLogin = () => {
        navigation.navigate("App")
    };

    return (
        <View style={ { flex: 1 } }>
            <Text>Login screen</Text>

            <Button mode="contained" onPress={ navigateToRegister } style={ { marginTop: 10 } }>
                Create account
            </Button>

            <Button mode="contained" onPress={ tryLogin } style={ { marginTop: 10 } }>
                Log in
            </Button>
        </View>
    )
};

export default Login;
