import React from "react";
import { ScrollView, FlatList, View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View>
                <Text>
                    Home
                </Text>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
