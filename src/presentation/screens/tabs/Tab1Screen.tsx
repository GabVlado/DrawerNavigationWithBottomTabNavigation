import React, { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import HamburguerMenu from '../../components/shared/HamburguerMenu'

const Tab1Screen = () => {



  return (
    <View>
      <HamburguerMenu/>
      <Text>Tab1Screen</Text>
    </View>
  )
}

export default Tab1Screen
