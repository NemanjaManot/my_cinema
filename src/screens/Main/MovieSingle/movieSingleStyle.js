import { StyleSheet } from "react-native";
import { theme } from "../../../assets/theme";

const headerHeight = 180;

export const styles = StyleSheet.create({
    header: {
        height: headerHeight,
        flexDirection: "row",
        backgroundColor: theme.colors.background
    },
    headerContent: {
        padding: 10,
        width: "70%"
    },
    trailerWrapper: {
        width: '100%',
        height: 230
    },
    imageWrapper: {
        width: "30%"
    },
    imageStyle: {
        height: headerHeight,
    },
    verticalSpacing: {
        marginVertical: 15
    },
    horizontalSpacing: {
        paddingHorizontal: 10
    },
    chipStyle: {
        maxWidth: 80,
        marginHorizontal: 5,
        marginTop: 5,
        backgroundColor: theme.colors.primary
    },
    chipTextStyle: {
        color: theme.colors.background
    },
    genreList: {
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    title: {
        color: theme.colors.primary
    },
    taglineWrapper: {
        flexDirection: "row",
        alignItems: "center",

    },
    taglineText: {
        fontStyle: "italic",
        paddingLeft: 10,
        flexWrap: "wrap",
        fontSize: 16
    }
});
