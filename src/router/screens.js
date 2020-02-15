import { createStackNavigator } from "react-navigation-stack";
/* Screens */
import Login from "../screens/Auth/Login/Login";
import Registration from "../screens/Auth/Registration/Registration";
import Movies from "../screens/Main/Movies/Movies";
import MovieSingle from "../screens/Main/MovieSingle/MovieSingle";
import UserProfile from "../screens/Main/UserProfile/UserProfile";

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
                backgroundColor: 'gray'
            },
            headerTintColor: 'blue'
        })
    },
    MovieSingle: {
        screen: MovieSingle,
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: 'gray'
            },
            headerTintColor: 'blue'
        })
    },
    UserProfile: {
        screen: UserProfile,
        navigationOptions: () => ({
            title: 'User Profile',
            headerStyle: {
                backgroundColor: 'gray'
            },
            headerTintColor: 'blue'
        })
    }
});
