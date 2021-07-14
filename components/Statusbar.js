import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import SearchIcon from './image/search.jpg'
import MenuIcon from './image/menu.jpg'

export default function Statusbar(props){
    useEffect(() => {
        console.log(getStatusBarHeight());
    })

    return(
        <View style={StyleSheet.appHeader}>
            <TouchableOpacity onPress={() => ()}>
                <SearchIcon width={24} height={24} fill="#000"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ()}>
                <MenuIcon width={24} height={24} fill="#000"/>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    appHeader: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: getStatusBarHeight() + 40;
    },
});