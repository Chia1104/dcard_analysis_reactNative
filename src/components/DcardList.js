import React from "react";
import { StyleSheet, Text, View} from "react-native";

const DcardList = ({ dcard }) => {
    return (
        <View style={styles.cardContainerStyle}>
            <View style={styles.box1}>
                <Text style={styles.titleStyle} numberOfLines={1}>
                    {dcard.Title}
                </Text>
                <Text style={styles.contentStyle} numberOfLines={2}>
                    {dcard.Content}
                </Text>
            </View>
            <View style={styles.box2}>
                <View style={styles.box3}>
                    <Text style={styles.detailStyle}>
                        {dcard.SA_Class}
                    </Text>
                    <Text style={styles.detailStyle}>
                        ({dcard.SA_Score})
                    </Text>
                </View>
                <Text style={styles.dateStyle}>
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
    }
});

export default DcardList;
