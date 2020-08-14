
import React, { useState, Component } from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Button from './src/components/Button'
import Display from './src/components/Display'

const stateInitial = {
  displayValue: '0',
  clearDisplay:false,
  operationState: null,
  val1: 0
}
class App extends Component {
  state={
    displayValue: '0',
    clearDisplay:false,
    operationState: null,
    val1: 0
  }
  addDigit = digit =>{
    
    if(this.state.displayValue.length === 9) return
    if(digit === '0' && this.state.displayValue === '0') return
    if(digit === '.' && this.state.displayValue.includes('.') && !this.state.clearDisplay) return

    const displayValue = this.state.displayValue === '0' || this.state.clearDisplay
      ? digit 
      : this.state.displayValue + digit

    this.setState({displayValue:displayValue,clearDisplay:false})
  }
  clearMemory= () => {this.setState(stateInitial)}

  runOperation = (val1, val2, operation) => {
    const value1 = +val1
    const value2 = +val2
    if(operation === '+') return value1 + value2
    if(operation === '-') return value1 - value2
    if(operation === '*') return value1 * value2
    if(operation === '÷') return value1 / value2
   
  }
  
  setOperation = operation => {
    if(operation === '=') {
      if(this.state.operationState === '=') return
      this.setOperation(this.state.operationState)
      this.setState({operationState:operation})
    }
    
    this.setState({operationState:operation})
    if(this.state.clearDisplay)return
    
    if(!this.state.val1) {
      this.setState({
        val1: this.state.displayValue,
        clearDisplay:true,
      })
      return
    }else {
      const result = this.runOperation(this.state.val1, this.state.displayValue, this.state.operationState)
      if(result){
        this.setState({
          clearDisplay:true,
          displayValue:`${result}`,
          val1: `${result}`,
        })
      }
    }
  }
  

  render(){
    return (
      <SafeAreaView style={styles.container}>
        {/* <Display value={JSON.stringify(this.state.clearDisplay)} /> */}
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
        <Button label="AC" triple onClick={this.clearMemory}></Button>
        <Button label="÷" operation onClick={this.setOperation}></Button>
        <Button label="7" onClick={this.addDigit}></Button>
        <Button label="8" onClick={this.addDigit}></Button>
        <Button label="9" onClick={this.addDigit}></Button>
        <Button label="*" operation onClick={this.setOperation}></Button>
        <Button label="4" onClick={this.addDigit}></Button>
        <Button label="5" onClick={this.addDigit}></Button>
        <Button label="6" onClick={this.addDigit}></Button>
        <Button label="-" operation onClick={this.setOperation}></Button>
        <Button label="1" onClick={this.addDigit}></Button>
        <Button label="2" onClick={this.addDigit}></Button>
        <Button label="3" onClick={this.addDigit}></Button>
        <Button label="+" operation onClick={this.setOperation}></Button>
        <Button label="0" double onClick={this.addDigit}></Button>
        <Button label="." onClick={this.addDigit}></Button>
        <Button label="=" operation onClick={this.setOperation}></Button>
        </View>
      </SafeAreaView>
  );
}};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

});

export default App;
