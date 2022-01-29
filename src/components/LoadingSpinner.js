import React from "react";
import { StyleSheet, Text, View, useColorScheme} from "react-native";
import {Skeleton, VStack, Center, NativeBaseProvider, HStack, Spinner} from "native-base";

const LoadingSpinner = () => {
    return (
        <NativeBaseProvider>
            <Spinner
                size="lg"
                // color='powderblue'
            />
        </NativeBaseProvider>
    );
};

export default LoadingSpinner;
