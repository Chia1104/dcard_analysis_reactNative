import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, useColorScheme } from "react-native";
import {Input, Box, Center, Icon, FormControl, WarningOutlineIcon, Button, Stack, AspectRatio, Image, Heading, HStack, NativeBaseProvider} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {

    const config = {
        dependencies: {
            "linear-gradient": LinearGradient
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 , alignItems: "center"}}>
            <NativeBaseProvider config={config}>
                <Center flex={1} px="3">
                    <Box bg={{
                        linearGradient: {
                            colors: ["lightBlue.300", "violet.800"],
                            start: [1, 0],
                            end: [0, 1]
                        }
                    }} p="12" rounded="xl" _text={{
                        fontSize: "md",
                        fontWeight: "medium",
                        color: "warmGray.50",
                        textAlign: "center"
                    }}>
                        <Input
                            mb={2}
                            w={{
                            base: "75%",
                            md: "25%",
                        }} InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="white" />} placeholder="Email" />
                        <Input
                            mb={6}
                            w={{
                            base: "75%",
                            md: "25%"
                        }} InputRightElement={<Icon as={<MaterialIcons name="visibility-off" />} size={5} mr="2" color="white" />} placeholder="Password" />
                        <Button size="sm" variant="outline" mb={2}>
                            Login
                        </Button>
                        <Button size="sm" variant="ghost">
                            Register
                        </Button>
                    </Box>
                </Center>
            </NativeBaseProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginBox: {
        flex: 1,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 10,
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

export default LoginScreen;
