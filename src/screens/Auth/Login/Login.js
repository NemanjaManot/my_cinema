import React, { useState } from "react";
import { View, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { Button, TextInput, HelperText, Text } from "react-native-paper";
/* Styles */
import { styles } from "../authStyle";
import { isAndroid } from "../../../assets/globalStyles";
/* Images */
import { logoImage } from "../../../assets/images";
/* Services */
import AsyncStorageService from "../../../services/asyncStorageService";

const {
    textInputStyle,
    loginButton,
    inputStyle,
    container,
    registerButtonContainer,
    imageWrapper,
    registerText
} = styles;

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
        <KeyboardAvoidingView behavior={ isAndroid ? "height" : "padding" } style={ { flex: 1 } }>
            <ScrollView contentContainerStyle={ container }>
                <View style={ imageWrapper }>
                    <Image source={ logoImage }/>
                </View>
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

                <HelperText type="error" visible={ error }>
                    Something went wrong, try again
                </HelperText>

                <Button
                    contentStyle={ loginButton }
                    mode="contained"
                    onPress={ tryLogin }
                >
                    Login
                </Button>

                <View style={ registerButtonContainer }>
                    <Text>Don't have account?</Text>
                    <TouchableOpacity onPress={ navigateToRegister }>
                        <Text style={ registerText }>Register here</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

Login.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default Login;
