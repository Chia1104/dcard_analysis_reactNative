import React from "react";
import {
    StyleSheet
} from "react-native";
import { FAB, Portal, Provider } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const FloatingBotton = () => {
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    icon={open ? 'bookmark-off-outline' : 'bookmark-plus-outline'}
                    actions={[
                        { icon: 'bookmark-plus-outline', onPress: () => console.log('Pressed add') },
                        {
                            icon: 'calendar-month-outline',
                            label: 'Date',
                            onPress: () => console.log('Pressed calendar-month-outline'),
                        },
                        {
                            icon: 'emoticon-happy-outline',
                            label: 'Positive',
                            onPress: () => console.log('Pressed emoticon-happy-outline'),
                        },
                        {
                            icon: 'emoticon-neutral-outline',
                            label: 'Neutral',
                            onPress: () => console.log('Pressed emoticon-neutral-outline'),
                        },
                        {
                            icon: 'emoticon-sad-outline',
                            label: 'Negative',
                            onPress: () => console.log('Pressed emoticon-sad-outline'),
                        },
                        {
                            icon: 'star',
                            label: 'Star',
                            onPress: () => console.log('Pressed star'),
                            small: false,
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        </Provider>

    );
};

const styles = StyleSheet.create({

});

export default FloatingBotton;
