import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "mobx-react";
/* Router */
import Router from "./router/router";
/* Store */
import MovieStore from "./store/movieStore";

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={ { flex: 1 } }>
                <Provider MovieStore={ MovieStore }>
                    <Router/>
                </Provider>
            </SafeAreaView>
        </>
    );
};

export default App;
