import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { type RouteProp, useRoute, useNavigation } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator'
import { globalStyles } from '../../theme/theme'

const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  console.log(params)

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    })

  }, [])


  return (
    <View style={globalStyles.container}>
      <Text>ProductScreen</Text>
      <Text style={{
        fontSize:20,
        textAlign:'center',
        marginTop: 20
      }}>
        {params.id}  -  {params.name }
      </Text>
    </View>
  )
}

export default ProductScreen
