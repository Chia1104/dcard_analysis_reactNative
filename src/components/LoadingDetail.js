import React from "react";
import { StyleSheet, Text, View, useColorScheme} from "react-native";
import { Skeleton, VStack, Center, NativeBaseProvider } from "native-base";

const LoadingDetail = () => {
    return (
        <Center w="100%">
            <VStack w="100%" maxW="400" space={8} overflow="hidden" rounded="md" >
                <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
                <Skeleton.Text px="4" />
                <Skeleton.Text px="4" />
                <Skeleton.Text px="4" />
            </VStack>
        </Center>
    );
};

export default LoadingDetail;
