import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, useColorScheme } from "react-native";
import {Input, Box, Center, Icon, FormControl, WarningOutlineIcon, Button, Stack, AspectRatio, Image, Heading, HStack, NativeBaseProvider} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LoginScreen = () => {

    return (
        <SafeAreaView style={{ flex: 1 , alignItems: "center"}}>
            <View style={styles.loginBox}>
                <Input w={{
                    base: "75%",
                    md: "25%"
                }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
                <Input w={{
                    base: "75%",
                    md: "25%"
                }} InputRightElement={<Icon as={<MaterialIcons name="visibility-off" />} size={5} mr="2" color="muted.400" />} placeholder="Password" />
                <Button size="sm" variant="outline">
                    Login
                </Button>
                <Button size="sm" variant="ghost">
                    Register
                </Button>
            </View>
            <Box alignItems="center">
                <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                            }} alt="image" />
                        </AspectRatio>
                        <Center bg="violet.500" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            PHOTOS
                        </Center>
                    </Box>
                    <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                                The Garden City
                            </Heading>
                            <Text fontSize="xs" _light={{
                                color: "violet.500"
                            }} _dark={{
                                color: "violet.400"
                            }} fontWeight="500" ml="-0.5" mt="-1">
                                The Silicon Valley of India.
                            </Text>
                        </Stack>
                        <Text fontWeight="400">
                            Bengaluru (also called Bangalore) is the center of India's high-tech
                            industry. The city is also known for its parks and nightlife.
                        </Text>
                        <HStack alignItems="center" space={4} justifyContent="space-between">
                            <HStack alignItems="center">
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    6 mins ago
                                </Text>
                            </HStack>
                        </HStack>
                    </Stack>
                </Box>
            </Box>
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
