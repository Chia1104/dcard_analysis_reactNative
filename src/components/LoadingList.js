import React from "react";
import { StyleSheet, Text, View, useColorScheme} from "react-native";
import { Skeleton, VStack, Center, NativeBaseProvider, HStack } from "native-base";

const LoadingList = () => {
    return (
        <Center w="100%" paddingTop={50}>
            <HStack w="90%" maxW="400" space={8} rounded="md" p="4">
                <VStack flex="3" space="4">
                    <Skeleton.Text />
                    <HStack space="2" alignItems="center">
                        <Skeleton size="5" rounded="full" />
                        <Skeleton h="3" flex="2" rounded="full" />
                        <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                    </HStack>
                </VStack>
            </HStack>
            <HStack w="90%" maxW="400" space={8} rounded="md" p="4">
                <VStack flex="3" space="4">
                    <Skeleton.Text />
                    <HStack space="2" alignItems="center">
                        <Skeleton size="5" rounded="full" />
                        <Skeleton h="3" flex="2" rounded="full" />
                        <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                    </HStack>
                </VStack>
            </HStack>
            <HStack w="90%" maxW="400" space={8} rounded="md" p="4">
                <VStack flex="3" space="4">
                    <Skeleton.Text />
                    <HStack space="2" alignItems="center">
                        <Skeleton size="5" rounded="full" />
                        <Skeleton h="3" flex="2" rounded="full" />
                        <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                    </HStack>
                </VStack>
            </HStack>
        </Center>
    );
};

export default LoadingList;
