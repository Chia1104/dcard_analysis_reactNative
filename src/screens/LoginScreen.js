import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, useColorScheme } from "react-native";
import {Input, Box, Center, Icon, FormControl, WarningOutlineIcon, Button, Stack, AspectRatio, Image, Heading, HStack, NativeBaseProvider} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundAnimation from "../components/BackgroundAnimation";
import CubesLoading from "../components/CubesLoading";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../redux/actions/AuthAction";

const LoginScreen = () => {

    const config = {
        dependencies: {
            "linear-gradient": LinearGradient
        }
    };

    const loading  = useSelector((state) => state.auth.loading);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{ flex: 1 , alignItems: "center"}}>
            <BackgroundAnimation />
            {loading === true ? (
                <CubesLoading />
            ) : (
                <NativeBaseProvider config={config}>
                    <Center flex={1} px="3">
                        <Box
                            bg={{
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
                                size="lg"
                                variant="rounded"
                                mb={2}
                                w={{
                                    base: "75%",
                                    md: "25%",
                                }} InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="white" />} placeholder="Email" />
                            <Input
                                size="lg"
                                variant="rounded"
                                mb={6}
                                w={{
                                    base: "75%",
                                    md: "25%"
                                }} InputRightElement={<Icon as={<MaterialIcons name="visibility-off" />} size={5} mr="2" color="white" />} placeholder="Password" />
                            <Button size="sm" variant="outline" mb={2} onPress={() => {
                                dispatch(loginAction("test@gmail.com", "test123"));
                            }}>
                                Login
                            </Button>
                            <Button size="sm" variant="ghost" >
                                Register
                            </Button>
                        </Box>
                    </Center>
                </NativeBaseProvider>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
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
