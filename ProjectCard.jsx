 import { View,Image,Text } from "react-native"
 
 
 export default function ProjectCard({name,image}){
  console.log({name,image})
  return (
    <View>
    <Image source={image} style={{
      height :150,
      aspectRatio :16/9 ,
      borderRadius :10
      }}/>
    <Text style={{
      fontWeight :'bold',
       fontSize :20, color :'dimgray',
        marginTop :10
        }}>
           {name}
        </Text>
  </View>

  )
}
 

const styles = StyleSheet.cre