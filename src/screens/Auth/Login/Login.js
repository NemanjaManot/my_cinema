import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Button, TextInput, HelperText, Text } from "react-native-paper";
/* Styles */
import { styles } from "../authStyle";
/* Services */
import AsyncStorageService from "../../../services/asyncStorageService";

const { textInputStyle, loginButton, inputStyle, container, registerButtonContainer } = styles;

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const navigateToRegister = () => navigation.navigate("Registration");
    const onChangeEmail = email => setEmail(email);
    const onChangePassword = password => setPassword(password);

    const tryLogin = async () => {
        const registeredUsers = await AsyncStorageService.getRegisteredUsers();
        const user = registeredUsers && registeredUsers.length && registeredUsers.find(registeredUser => {
            return registeredUser.email === email && registeredUser.password === password
        });
        if (user) {
            await AsyncStorageService.setLoggedUser(user);
            await navigation.navigate("App");
        } else {
            await setError(true);
        }
    };

    return (
        <ScrollView contentContainerStyle={ container }>
            <View style={ inputStyle }>
                <TextInput
                    label="Email"
                    value={ email }
                    onChangeText={ onChangeEmail }
                    autoCapitalize="none"
                    style={ textInputStyle }
                />
            </View>
            <View style={ inputStyle }>
                <TextInput
                    label="Password"
                    value={ password }
                    onChangeText={ onChangePassword }
                    secureTextEntry
                    autoCapitalize="none"
                    style={ textInputStyle }
                />
            </View>

            <Button
                contentStyle={ loginButton }
                mode="contained"
                onPress={ tryLogin }
            >
                Login
            </Button>

            <View style={ registerButtonContainer }>
                <Text>Don't have account?</Text>
                <TouchableOpacity
                    onPress={ navigateToRegister }
                >
                    <Text>Register here</Text>
                </TouchableOpacity>
            </View>

            <HelperText
                type="error"
                visible={ error }
            >
                Something went wrong, try again
            </HelperText>
        </ScrollView>
    )
};

export default Login;
