import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Button, TextInput, HelperText } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
/* Styles */
import { styles } from "../authStyle";
/* Services */
import AsyncStorageService from "../../../services/asyncStorageService";
/* Regex */
import { EMAIL_VALIDATION_REGEX } from "../../../utils/regex";
/* Theme */
import { theme } from "../../../assets/theme";

const { textInputStyle, loginButton, inputStyle, container, backToLoginStyle, errorTextStyle } = styles;

const Registration = ({ navigation }) => {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState(false);

    const onChangeEmail = email => setEmail(email);
    const onChangePassword = password => setPassword(password);
    const onChangeFullName = fullName => setFullName(fullName);

    useEffect(() => {
        getUsers();
        //AsyncStorageService.clearWholeStorage();  // for testing
    }, []);

    const getUsers = async () => {
        const users = await AsyncStorageService.getRegisteredUsers();
        setRegisteredUsers(users)
    };

    const onSubmit = async () => {
        const emailValidation = EMAIL_VALIDATION_REGEX.test(email);
        const passwordValidation = password.length > 2;

        if (email === '' || password === '' || fullName === '') {
            setError(true);
        } else if (!emailValidation || !passwordValidation) {
            setError(true);
        } else {
            setError(false);
            const registrationParams = {
                fullName,
                email,
                password
            };

            await AsyncStorageService.setNewUser(registrationParams, registeredUsers);
            await navigation.navigate("Login")
        }
    };

    const backToLogin = () => navigation.navigate("Login");

    return (
        <KeyboardAvoidingView style={ { flex: 1 } } behavior="padding" enabled>
            <TouchableOpacity style={ backToLoginStyle } onPress={ backToLogin }>
                <MaterialIcon name="arrow-back" size={ 40 } color={ theme.colors.primary }/>
            </TouchableOpacity>

            <View style={ container }>
                <View style={ inputStyle }>
                    <TextInput
                        label="Set Full Name"
                        value={ fullName }
                        onChangeText={ onChangeFullName }
                        autoCapitalize="none"
                        style={ textInputStyle }
                    />
                </View>
                <View style={ inputStyle }>
                    <TextInput
                        label="Set Email"
                        value={ email }
                        onChangeText={ onChangeEmail }
                        autoCapitalize="none"
                        style={ textInputStyle }
                    />
                </View>
                <View style={ inputStyle }>
                    <TextInput
                        label="Set Password"
                        value={ password }
                        onChangeText={ onChangePassword }
                        secureTextEntry
                        autoCapitalize="none"
                        style={ textInputStyle }
                    />
                </View>
                <HelperText style={ errorTextStyle } type="error" visible={ error }>
                    Something went wrong, try again
                </HelperText>
                <Button
                    contentStyle={ loginButton }
                    mode="contained"
                    onPress={ onSubmit }
                >
                    Register
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
};

Registration.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default Registration;
