import React from 'react'
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  containerButton:{
    justifyContent:'center',
    alignItems:"center",
  },
  button:{
    backgroundColor: '#f0f0f0',
    borderWidth:1,
    borderColor: '#888',
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    fontSize:40,
    padding:20,
    textAlign:"center",
  },
  operationButton:{
    color:'#fff',
    backgroundColor: '#fa8231'
  },
  buttonDouble:{
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple:{
    width: (Dimensions.get('window').width / 4) * 3,
  }
})

export default props => {
  const stylesArray= [styles.button]
  if(props.double) stylesArray.push(styles.buttonDouble)
  if(props.triple) stylesArray.push(styles.buttonTriple)
  if(props.operation) stylesArray.push(styles.operationButton)

  return(
    <TouchableHighlight onPress={()=>props.onClick(props.label)}>
      <Text style={stylesArray}>{props.label}</Text>
    </TouchableHighlight>
  )
}