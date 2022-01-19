import React, { useCallback, useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomSheet, { BottomSheetFlatList, BottomSheetBackdrop  } from "@gorhom/bottom-sheet";
import { Portal, Provider } from 'react-native-paper';

const ProfileBottomSheet = () => {
    // data
    const data = useMemo(
        () =>
            Array(4)
                .fill(0)
                .map((_, index) => `index-${index}`),
        []
    );
    const snapPoints = useMemo(() => ["8%", "55%"], []);

    // handleRefresh
    const handleRefresh = useCallback(() => {
        console.log("handleRefresh");
    }, []);

    // renderItem
    const renderItem = useCallback(
        ({ item }) => (
            <View style={styles.itemContainer}>
                <Text>{item}</Text>
            </View>
        ),
        []
    );

    // renderBackdro
    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={1}
                appearsOnIndex={2}
            />
        ),
        []
    );
    return (
        <Provider>
            <Portal>
                <View style={styles.container}>
                    <BottomSheet snapPoints={snapPoints} style={styles.bottomSheetStyle}>
                        <View style={styles.settingContainerStyle}>
                            <Text style={styles.settingTextStyle}>
                                設定
                            </Text>
                        </View>
                        <BottomSheetFlatList
                            data={data}
                            keyExtractor={(i) => i}
                            renderItem={renderItem}
                            snapPoints={snapPoints}
                            backdropComponent={renderBackdrop}
                            contentContainerStyle={styles.contentContainer}
                            // refreshing={false}
                            // onRefresh={handleRefresh}
                        />
                    </BottomSheet>
                </View>
            </Portal>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'rgba(33,33,33,0.7)'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white",
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eee",
    },
    bottomSheetStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    settingContainerStyle: {
        padding: 15,
    },
    settingTextStyle: {
        fontSize: 50,
    },
});

export default ProfileBottomSheet;
