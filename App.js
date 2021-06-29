import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.text_container}>0.0</Text>

        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_container_text}>Iniciar</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.btn}>
            <Text style={styles.btn_container_text}>Resetar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1B365C',
    justifyContent: 'center',
  },

  container: {
    alignItems:'center',
    justifyContent: 'center',
  },

  btn_container:{
    flexDirection:"row",
    padding:20,
  },

 btn:{
    marginHorizontal:20,
    backgroundColor:'#7EA1C4',
    height:50,
    width:75,
    alignItems:'center', 
    justifyContent:'center',
    borderRadius:5
 },



  text_container: {
    color: 'white',
    fontSize: 35,
    textAlign:'center'
  },

  btn_container_text:{
    color: 'white',
    fontSize: 15,
    textAlign:'center'
  },
});
