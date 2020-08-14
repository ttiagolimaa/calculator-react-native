import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  display:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.6)',
    padding: 20,
    alignItems: 'flex-end',
    justifyContent:"center"
  },
  displayValue:{
    flexDirection: 'row',
    color:'#fff',
    fontSize:60,
  }
})

export default props => 
  <View style={styles.display}>
    <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
  </View>