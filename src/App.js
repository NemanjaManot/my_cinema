import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
/* Router */
import Router from "./router/router";

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={ { flex: 1 } }>
                <Router/>
            </SafeAreaView>
        </>
    );
};

export default App;
