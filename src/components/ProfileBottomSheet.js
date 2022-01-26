import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import BottomSheet, { BottomSheetFlatList, BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Portal, Provider } from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import {unexpandBottomSheet} from "../redux/actions/BottomSheetAction";

const ProfileBottomSheet = () => {
    const dispatch = useDispatch();
    // data
    const data = useMemo(
        () =>
            Array(4)
                .fill(0)
                .map((_, index) => `index-${index}`),
        []
    );
    const snapPoints = useMemo(() => ["55%", "55%"], []);

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

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
        if (index === -1){
            dispatch(unexpandBottomSheet);
        }
    }, []);

    // renderBackdro
    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={1}
            />
        ),
        []
    );

    // ref
    const bottomSheetModalRef = useRef(null);
    // callbacks
    const showModal = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const expanded = useSelector((state) => state.bottomSheet.expanded);
    if (expanded === true) {
        showModal();
    }

    return (
        <Portal style={styles.container}>
            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    snapPoints={snapPoints}
                    style={styles.bottomSheetStyle}
                    enablePanDownToClose={true}
                    index={1}
                    backdropComponent={renderBackdrop}
                    onChange={handleSheetChanges}
                    animateOnMount={true}
                >
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
                        contentContainerStyle={styles.contentContainer}
                        // refreshing={false}
                        // onRefresh={handleRefresh}
                    />
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </Portal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
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
