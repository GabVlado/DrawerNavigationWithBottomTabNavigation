import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PrimaryButton from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

    const {top} = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: top + 20
        }}>
            <Text style={{marginBottom: 10}}>ProfileScreen</Text>
            <PrimaryButton
                onPress={() =>  navigation.dispatch(DrawerActions.toggleDrawer())}
                label="Abrir Menu"
            />
        </View>
    )
}

export default ProfileScreen
