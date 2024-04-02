import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {

  const navigation = useNavigation();


  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>SettingsScreen</Text>

      <PrimaryButton
        label="Regresar"
        onPress={() => navigation.goBack()  }
      />
      <PrimaryButton
        label="Regresar al Home"
        onPress={() => navigation.dispatch( StackActions.popToTop()) }
      />

    </View>
  )
}

export default SettingsScreen
