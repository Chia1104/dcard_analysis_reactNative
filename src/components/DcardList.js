import React from "react";
import { StyleSheet, Text, View, useColorScheme} from "react-native";

const DcardList = ({ dcard }) => {
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
    return (
        <View style={[styles.cardContainerStyle, themeItemContainerStyle]}>
            <View style={styles.box1}>
                <Text style={[styles.titleStyle, themeTextStyle]} numberOfLines={1}>
                    {dcard.Title}
                </Text>
                <Text style={[styles.contentStyle, themeTextStyle]} numberOfLines={2}>
                    {dcard.Content}
                </Text>
            </View>
            <View style={styles.box2}>
                <View style={styles.box3}>
                    <Text style={[styles.detailStyle, themeTextStyle]}>
                        {dcard.SA_Class}
                    </Text>
                    <Text style={[styles.detailStyle, themeTextStyle]}>
                        ({dcard.SA_Score})
                    </Text>
                </View>
                <Text style={[styles.dateStyle, themeTextStyle]}>
                    {dcard.CreatedAt}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 3,
        backgroundColor: "white",
    },
    box1: {
        flexDirection: "column",
        width: "100%"
    },
    box2: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%"
    },
    box3: {
        flexDirection: "row"
    },
    titleStyle: {
        fontSize: 25,
        marginBottom: 7
    },
    contentStyle: {
        fontSize: 17,
        marginBottom: 7,
        lineHeight: 25,
        color: "#666666"
    },
    detailStyle: {
        fontSize: 15
    },
    dateStyle: {
        fontSize: 15,
        color: "#AAAAAA"
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

export default DcardList;
