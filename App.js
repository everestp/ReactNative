import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function App() {
  return (
    <View style={styles.container}>
      <Image  source={require("./assets/download (1).jpeg")} style={{
        width:"100%",
       height:"200",
       
      }}/>
      <Image source={require("./assets/download.jpeg")}  style={{
        width:150,
        height:150,
        borderRadius:150,
        borderColor : "black",
        borderWidth:5,
        marginTop:-75
        }}/> 
      <Text style={{ fontSize:20 }}>Everest Paudel</Text>
      <Text>React Native</Text>

      <View style={{ flexDirection:"row" ,marginVertical :10,gap:10}}>
      <FontAwesome6 name="github" size={24} color="balck" />
      <FontAwesome6 name="x-twitter" size={24} color="black" />
      <FontAwesome6 name="at" size={24} color="black" />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 