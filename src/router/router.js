import { createSwitchNavigator, createAppContainer } from "react-navigation";
/* Stack navigator screens */
import { SignUpScreen, MainScreen } from "./screens";
import InitialLoading from "../screens/InitialLoading/InitialLoading";

const Navigator = createSwitchNavigator(
    {
        Main: {
            screen: MainScreen
        }
    }
);

const Router = createAppContainer(
    createSwitchNavigator({
        Initial: InitialLoading,
        Login: SignUpScreen,
        App: Navigator
    })
);

export default Router;
