import { createSwitchNavigator, createAppContainer } from "react-navigation";
/* Stack navigator screens */
import { SignUpScreen, MainScreen } from "./screens";

const Navigator = createSwitchNavigator(
    {
        Main: {
            screen: MainScreen
        }
    }
);

const Router = createAppContainer(
    createSwitchNavigator({
        Login: SignUpScreen,
        App: Navigator
    })
);

export default Router;
