import React from "react";
import {StyleSheet, useColorScheme} from "react-native";

const LightOrDark = () => {

    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextColor = colorScheme === 'light' ? "black" : "white";
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeContainerStyle2 =
        colorScheme === 'light' ? styles.lightContainer2 : styles.darkContainer2;
    const themeItemContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkItemContainer;
    const themeContainerColor = colorScheme === 'light' ? "white" : "black";

    const themeProgressBarStyle = colorScheme === 'light' ? styles.lightProgressBar : styles.darkProgressBar;

};

const styles = StyleSheet.create({
    lightProgressBar: {
        color: "black"
    },
    darkProgressBar: {
        color: "white"
    },
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
        backgroundColor: '#262626',
    },
    darkItemContainer: {
        backgroundColor: '#474747',
    },
    lightThemeText: {
        color: 'black',
    },
    darkThemeText: {
        color: 'white',
    },
});

export default LightOrDark;
