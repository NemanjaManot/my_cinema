import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const globalStyles = StyleSheet.create({
    shadow: {
        shadowColor: theme.colors.text,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});
