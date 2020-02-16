import React from "react";
import { View, Modal } from "react-native";
import { ActivityIndicator } from "react-native-paper"
/* Styles */
import { styles } from "./loaderStyle";

const { modalBackground, activityIndicatorWrapper } = styles;

const Loader = ({ isLoading }) => {
    return (
        <Modal
            transparent={ true }
            animationType={ 'none' }
            visible={ isLoading }
        >
            <View style={ modalBackground }>
                <View style={ activityIndicatorWrapper }>
                    <ActivityIndicator animating={ isLoading }/>
                </View>
            </View>
        </Modal>
    );
};

export default Loader;
