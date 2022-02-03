import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, useColorScheme } from "react-native";

const RegisterScreen = () => {


    return (
        <View>
            <Text>
                Login
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    lightContainer: {
        backgroundColor: 'white',
    },
    darkContainer: {
        backgroundColor: 'black',
    },
    lightContainer2: {
        backgroundColor: '#F5F5F5',
    },
    darkContainer2: {
        backgroundColor: '#1f1f1f',
    },
    darkItemContainer: {
        backgroundColor: '#262626',
    },
    lightThemeText: {
        color: 'black',
    },
    darkThemeText: {
        color: 'white',
    },
});

export default RegisterScreen;
