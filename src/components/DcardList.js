import React from "react";
import { StyleSheet, Text, View} from "react-native";

const DcardList = ({ dcard }) => {
    return (
        <View style={styles.cardContainerStyle}>
            <View style={styles.box1}>
                <Text style={styles.title}>
                    {dcard.Title}
                </Text>
                <Text style={styles.content} numberOfLines={1}>
                    {dcard.Content}
                </Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.content1}>
                    {dcard.Id}
                </Text>
                <Text>
                    /
                </Text>
                <Text style={styles.content1}>
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
        padding: 10,
        margin: 10,
        backgroundColor: "#CCDDFF",
        borderRadius: 10
    },
    box1: {
        flexDirection: "column",
        width: "100%"
    },
    box2: {
        flexDirection: "row",
        width: "100%"
    },
    title: {
        fontSize: 25,
        marginBottom: 7
    },
    content: {
        fontSize: 17,
        marginBottom: 7,
        lineHeight: 25
    },
    content1: {
        fontSize: 15
    }
});

export default DcardList;
