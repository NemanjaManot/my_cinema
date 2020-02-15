import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button, TextInput, HelperText } from "react-native-paper";
/* Styles */
import { styles } from "../authStyle";
/* Services */
import AsyncStorageService from "../../../services/asyncStorageService";

const { textInputStyle, loginButton, inputStyle } = styles;

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        return () => {
            console.log("cleaned up");
            setError(false);
            setPassword('');
            setEmail('');
        };
    }, []);

    const navigateToRegister = () => navigation.navigate("Registration");
    const onChangeEmail = email => setEmail(email);
    const onChangePassword = password => setPassword(password);

    const tryLogin = async () => {
        const registeredUsers = await AsyncStorageService.getRegisteredUsers();
        const user = registeredUsers && registeredUsers.length && registeredUsers.find(registeredUser => {
            return registeredUser.email === email && registeredUser.password === password
        });
        if (user) {
            navigation.navigate("App");
        } else {
            setError(true);
        }
    };

    return (
        <View style={ { flex: 1 } }>
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

            <Button mode="contained" onPress={ navigateToRegister } style={ { marginTop: 10 } }>
                Create account
            </Button>

            <HelperText
                type="error"
                visible={ error }
            >
                Something went wrong, try again
            </HelperText>
        </View>
    )
};

export default Login;
