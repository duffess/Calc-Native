import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react'
export default function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState();

  const n1 = parseInt(number1);
  const n2 = parseInt(number2);

  function plus(){
    const result = n1 + n2;
    setResult(result.toString());
  }

  function less(){
    const result = n1 - n2;
    setResult(result.toString());
  }

  function multiply(){
    const result = n1 * n2;
    setResult(result.toString());
  }

  function divide(){
    const result = n1 / n2;
    setResult(result.toString());
  }

  

  return (
    <View style={styles.container}>
      
      <Text>Calculator</Text>
      <View> 
        <Text style={styles.Number} >Number 1:</Text>
        <TextInput
        style={styles.Input}
        placeholder='0'
        keyboardType='numeric'
        onChangeText={setNumber1}
        />        
      </View>

      <View> 
        <Text style={styles.Number} >Number 2:</Text>
        <TextInput
        style={styles.Input}
        placeholder='0'
        keyboardType='numeric'
        onChangeText={setNumber2}

        />        
      </View>

      <View>
        <TouchableOpacity onPress={plus} style={styles.button} ><Text>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={less} style={styles.button} ><Text>-</Text></TouchableOpacity>
        <TouchableOpacity onPress={multiply} style={styles.button} ><Text>*</Text></TouchableOpacity>
        <TouchableOpacity onPress={divide} style={styles.button} ><Text>/</Text></TouchableOpacity>
      </View>

      <View> 
        <Text style={styles.Number} >Result</Text>
        <TextInput
        style={styles.Input}
        placeholder='0'
        keyboardType='numeric'
        value={result}
        editable={false}

        />        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: 70,
    color: "#000000",
  },
  Number: {
    backgroundColor: "#d3d3d3",
    width: 70,
    color: "#000000",
  },
  button: {
    width: 10,
    backgroundColor: "black"
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
    marginBottom: 10,
    marginTop: 5,
  }
});
