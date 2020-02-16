import { StyleSheet } from "react-native";
import { theme } from "../../assets/theme";

export const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.primary,
        opacity: 0.7
    },
    activityIndicatorWrapper: {
        backgroundColor: theme.colors.background,
        height: 50,
        width: 50,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
