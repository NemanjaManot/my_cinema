import { StyleSheet } from "react-native";
/* Theme */
import { theme } from "../../../assets/theme";

export const styles = StyleSheet.create({
    movieWrapper: {
        flexDirection: 'row',
        flex: 1,
        margin: 10,
        backgroundColor: theme.colors.background
    },
    contentMovieWrapper: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between'
    },
    imageStyle: {
        height: 170,
        width: 130
    },
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileHeaderStyle: {
        marginRight: 15
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});
