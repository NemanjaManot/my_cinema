import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "mobx-react";
import { Provider as PaperProvider } from "react-native-paper";
/* Router */
import Router from "./router/router";
/* Store */
import MovieStore from "./store/movieStore";
/* Theme */
import { theme } from "./assets/theme";

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={ { flex: 1 } }>
                <Provider MovieStore={ MovieStore }>
                    <PaperProvider theme={ theme }>
                        <Router/>
                    </PaperProvider>
                </Provider>
            </SafeAreaView>
        </>
    );
};

export default App;
