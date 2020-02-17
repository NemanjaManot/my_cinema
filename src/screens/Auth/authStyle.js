import { StyleSheet } from "react-native";
/* Theme */
import { theme } from "../../assets/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '10%'
    },
    textInputStyle: {
        backgroundColor: 'transparent'
    },
    loginButton: {
        padding: 15
    },
    inputStyle: {
        marginBottom: 15
    },
    registerButtonContainer: {
        paddingTop: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backToLoginStyle: {
        paddingHorizontal: '10%',
        marginTop: 50
    },
    imageWrapper: {
        alignItems: 'center'
    },
    registerText: {
        color: theme.colors.primary,
        fontWeight: 'bold'
    },
    errorTextStyle: {
        marginVertical: 10
    }
});
