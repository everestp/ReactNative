import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Linking,

  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider ,SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
function DisplayInsets(){
  const insets = useSafeAreaInsets()
  return(
    <Text>
      // this cookies use for animation an determine the area of notch
      Insets : {insets.bottom} -{insets.top}
    </Text>
  )
}
export default function App() {
  const onContactMe = () => {
    Linking.openURL("https://github.com/everestp");
    console.log("Contact me");
  };
  // return (

  // <SafeAreaProvider>
  //   <SafeAreaView  edge={['top']} style={{ backgroundColor:"red"}}>
  //       <View
  //         style={{
  //           backgroundColor: "palegreen",
  //           height: "100%",
  //           alignItems: "center",
  //         }}
  //       >
  //         <Text style={{ fontSize: 100 }}> Tittle </Text>
  //         <DisplayInsets/>
  //         <Text style={{ marginTop: "auto" }}>Footer</Text>
  //       </View>
  //     </SafeAreaView>
  // </SafeAreaProvider>
  
    
  // );
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>

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
  <Button title='Contact me' onPress={()=> onContactMe()}/>
  <Text>
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </Text>

  <StatusBar style="auto" />
</View>
</ScrollView>
      </SafeAreaView>

    </SafeAreaProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
