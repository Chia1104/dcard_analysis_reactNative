import React from "react";
import { StyleSheet, Text, View, useColorScheme} from "react-native";
import { Skeleton, VStack, Center, NativeBaseProvider } from "native-base";

const LoadingScreen = () => {
    return (
        <NativeBaseProvider>
                <Center w="100%">
                    <VStack w="100%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
                        borderColor: "#1f1f1f"
                    }} _light={{
                        borderColor: "#F5F5F5"
                    }}>
                        <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
                        <Skeleton.Text px="4" />
                        <Skeleton.Text px="4" />
                        <Skeleton.Text px="4" />
                    </VStack>
                </Center>
        </NativeBaseProvider>
    );
};

export default LoadingScreen;
