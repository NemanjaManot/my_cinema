import { createStackNavigator } from "react-navigation-stack";
/* Screens */
import Login from "../screens/Auth/Login/Login";
import Registration from "../screens/Auth/Registration/Registration";
import Movies from "../screens/Main/Movies/Movies";
import MovieSingle from "../screens/Main/MovieSingle/MovieSingle";
import UserProfile from "../screens/Main/UserProfile/UserProfile";
/* Theme */
import { theme } from "../assets/theme";

export const SignUpScreen = createStackNavigator({
    Login: {
        screen: Login
    },
    Registration: {
        screen: Registration
    },
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export const MainScreen = createStackNavigator({
    Movies: {
        screen: Movies,
        navigationOptions: () => ({
            title: 'Movies',
            headerStyle: {
                backgroundColor: theme.colors.background
            },
            headerTintColor: theme.colors.primary
        })
    },
    MovieSingle: {
        screen: MovieSingle,
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: theme.colors.background
            },
            headerTintColor: theme.colors.primary
        })
    },
    UserProfile: {
        screen: UserProfile,
        navigationOptions: () => ({
            title: 'User Profile',
            headerStyle: {
                backgroundColor: theme.colors.background
            },
            headerTintColor: theme.colors.primary
        })
    }
}, {
    defaultNavigationOptions: {
        headerBackTitleVisible: false
    },
});
