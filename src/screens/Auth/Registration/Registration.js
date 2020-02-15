import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
/* Styles */
import { styles } from "../authStyle";
/* Services */
import AsyncStorageService from '../../../services/asyncStorageService';

const { textInputStyle, loginButton, inputStyle } = styles;

const Registration = ({ navigation }) => {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const onChangeEmail = email => setEmail(email);
    const onChangePassword = password => setPassword(password);
    const onChangeFullName = fullName => setFullName(fullName);

    useEffect(() => {
        getUsers();
        //AsyncStorageService.clearWholeStorage();
    }, []);

    const getUsers = async () => {
        const users = await AsyncStorageService.getRegisteredUsers();
        setRegisteredUsers(users)
    };

    const onSubmit = async () => {
        const registrationParams = {
            fullName,
            email,
            password
        };

        await AsyncStorageService.setNewUser(registrationParams, registeredUsers);
        navigation.navigate("Login")
    };

    return (
        <View style={ { flex: 1 } }>
            <>
                <View style={ inputStyle }>
                    <TextInput
                        label="Full Name"
                        value={ fullName }
                        onChangeText={ onChangeFullName }
                        autoCapitalize="none"
                        style={ textInputStyle }
                    />
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
            </>
            <>
                <Button
                    contentStyle={ loginButton }
                    mode="contained"
                    onPress={ onSubmit }
                >
                    Register
                </Button>
            </>
        </View>
    )
};

export default Registration;
