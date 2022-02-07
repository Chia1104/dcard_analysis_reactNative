import React, {useEffect} from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {Input, Box, Center, Icon, FormControl, WarningOutlineIcon, Button, NativeBaseProvider} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundAnimation from "../components/BackgroundAnimation";
import CubesLoading from "../components/CubesLoading";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../redux/actions/AuthAction";
import { Snackbar } from 'react-native-paper';
import {CLOSE_LOGIN_ALERT} from "../utils/constants";

const LoginScreen = () => {

    const config = {
        dependencies: {
            "linear-gradient": LinearGradient
        }
    };

    const loading  = useSelector((state) => state.auth.loading);
    const status  = useSelector((state) => state.auth.status);
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const onEmailChange = query => setEmail(query);
    const [emailInvalid, setEmailInvalid] = React.useState(true);
    const [password, setPassword] = React.useState('');
    const onPasswordChange = query => setPassword(query);
    const [passwordInvalid, setPasswordInvalid] = React.useState(true);
    const [loginDisabled, setLoginDisabled] = React.useState(true);
    const [visible, setVisible] = React.useState(false);
    const statusCheck = () => {
        if (status === 401) {
            setVisible(true)
        }
    }
    useEffect(() => {
        statusCheck()
    }, [status])
    const onDismissSnackBar = () => {
        dispatch({ type: CLOSE_LOGIN_ALERT });
        setVisible(false);
    };
    const checkEmail = () => {
        let mail_format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (String(email)
            .toLowerCase()
            .match(
                mail_format
            )) {
            setEmailInvalid(false);
        } else {
            setEmailInvalid(true);
        }
    };
    useEffect(() => {
        checkEmail()
    }, [email])
    const checkPassword = () => {
        if (password === '') {
            setPasswordInvalid(true);
        } else {
            setPasswordInvalid(false);
        }
    };
    useEffect(() => {
        checkPassword()
    }, [password])
    const loginCheck = () => {
        if (passwordInvalid === true || emailInvalid === true) {
            setLoginDisabled(true);
        } else {
            setLoginDisabled(false);
        }
    };
    useEffect(() => {
        loginCheck()
    }, [email, password])
    const [showPassword, setShowPassword] = React.useState(false);
    const eyeClick = () => setShowPassword(!showPassword);

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
                            <FormControl isInvalid={emailInvalid} mb={2}>
                                <Input
                                    type="email"
                                    size="lg"
                                    variant="rounded"
                                    w={{
                                        base: "75%",
                                        md: "25%",
                                    }}
                                    InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="white" />}
                                    placeholder="Email"
                                    onChangeText={onEmailChange}
                                    value={email}
                                />
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Enter valid Email!
                                </FormControl.ErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={passwordInvalid} mb={6}>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    size="lg"
                                    variant="rounded"
                                    w={{
                                        base: "75%",
                                        md: "25%"
                                    }}
                                    InputRightElement={<Icon as={<MaterialIcons name={showPassword ? "visibility-off" : "visibility"} onPress={eyeClick}/>} size={5} mr="2" color="white" />}
                                    placeholder="Password"
                                    onChangeText={onPasswordChange}
                                    value={password}
                                />
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Can't be empty!
                                </FormControl.ErrorMessage>
                            </FormControl>
                            <Button size="sm" variant="outline" mb={2} isDisabled={loginDisabled} onPress={() => {
                                dispatch(loginAction(email, password));
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
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Close',
                    onPress: () => {
                        dispatch({ type: CLOSE_LOGIN_ALERT });
                    },
                }}
                style={styles.alertBox}>
                Login Failed!
            </Snackbar>
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
    alertBox: {
        marginBottom: 30,
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
