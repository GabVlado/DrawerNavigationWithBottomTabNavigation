import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'

const HamburguerMenu = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Text> Menu </Text>
                </Pressable>
            )
        })
    }, []);


    return (
        <>
        </>
    )
}

export default HamburguerMenu
