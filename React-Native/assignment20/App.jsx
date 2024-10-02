import React, { useEffect, useState } from 'react'
import {  ScrollView, Text, View } from 'react-native'
import MapCards from './components/MapCards'

const App = () => {


  return (
    <ScrollView>
      <View>
      <Text style={{fontSize:50,backgroundColor:'green',color:'white',padding:5,marginBottom:40}}>React Native*******</Text>
      <View>
          <MapCards/>
      </View>
    </View>
    </ScrollView>
  )
}

export default App