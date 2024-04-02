import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../../theme/theme';


interface Props {
    onPress:() => void;
    label: string;
}


const PrimaryButton = ({onPress,label}:Props) => {


    return (
        <Pressable
            onPress={() => onPress()}
            style={globalStyles.primaryButton}
        >
            <Text style={globalStyles.buttonText}> {label}</Text>
        </Pressable>
    )
}

export default PrimaryButton
