import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
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

  const  name = 'Everest Paudel'
  const links = {
    github :'everestp',
    email :'rest@offnine.com',
    x:'everest_paudel'
  }
  
  const getOccupation = ()=>{
    return "React Native";
  }

const renderIcons =()=>{
  return (
    <View style={{ flexDirection:"row" ,marginVertical :10,gap:10}}>
   { links.github && <FontAwesome6 name="github" size={24} color="balck" />}
    {links.x && <FontAwesome6 name="x-twitter" size={24} color="black" />}
   {links.email && <FontAwesome6 name="at" size={24} color="black" />}
    </View>
  )
}





  const onContactMe = () => {
    Linking.openURL("https://github.com/everestp");
    console.log("Contact me");
  };

  const isLoading = true;

  const isError = false

  const color = isError===true? 'red':'green'
  const like =0

//Consitiona Rendering
// return (
//   <View style={{flex:1,alignItems :"center",justifyContent :"center"}}>


//     {/* Not work like that even the {} this open portal of javscript  because this is not the erxpression it is the conditiona Statement 
//     expression shoul evalute one single value */}

//     {/* {
//       if(isLoading){
//         return <ActivityIndicator/>
//       }
//       else{
//         <Text>Hello world </Text>
//       }
//     } */}

// {/* correct Method */}




// {isLoading? <ActivityIndicator/> :  <Text style={{color:color}}>Hello world </Text>}
// {isLoading && !isError && <ActivityIndicator/>}
//   {!!like && <Text> Post has {like || 'no'} likes</Text>}
//   {<Text> Post has {like || 'no'} likes</Text>}
//   </View>
// )







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
  <Text>{getOccupation()}</Text>

{renderIcons()}
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
