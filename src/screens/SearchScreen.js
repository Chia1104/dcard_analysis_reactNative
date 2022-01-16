import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

const SearchScreen = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </SafeAreaView>
    );
};

export default SearchScreen;
