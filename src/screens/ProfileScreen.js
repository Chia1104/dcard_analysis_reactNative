import React, { useRef } from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, useColorScheme, Button } from "react-native";

import ProfileBottomSheet from "../components/ProfileBottomSheet";

const ProfileScreen = () => {

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

    const bottomSheetModalRef = useRef(1);
    const handlePresentPress = () => bottomSheetModalRef.current.present()

    return (
        <SafeAreaView style={[{ flex: 1 }, themeContainerStyle2]}>
            <View style={styles.container}>
                <Text style={[themeTextStyle]}>
                    Profile
                </Text>
                <Button
                    title="Present Sheet"
                    // onPress={handlePresentPress}
                />
            </View>
            <ProfileBottomSheet
                // ref={bottomSheetModalRef}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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

export default ProfileScreen;
