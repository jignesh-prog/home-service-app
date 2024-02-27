import { View, Text ,Image,StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
export default function Header() {
  return (
    <View style={styles.Container}>
        <View style={styles.ProfileMainContainer}>
        <View style={styles.ProfileContainer}>
      <Image style={styles.Image} source={require("../../../assets/login2.jpg")}></Image>
      <View>
        <Text style={{color:"white"}}>Welcome</Text>
        <Text style={{color:"white",fontSize:20}}>Jignesh</Text>
      </View>
    </View>
    <FontAwesome  name="bookmark-o" size={27} color="white" />
    </View>
    {/*searchbar section */}
    <View style={styles.SearchBarContainer}>
        <TextInput style ={styles.TextInput} placeholder='search'></TextInput>
        <FontAwesome style={styles.SearchButton} name="search" size={24} color="black" />
    </View>
     </View>
  )
}
const styles = StyleSheet.create({
    Container:{
padding:20,
paddingTop:40,
backgroundColor:"purple",
borderBottomRightRadius:25,
borderBottomLeftRadius:25
    },ProfileMainContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    ProfileContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    Image:{
        height:45,
        width:45,
        borderRadius:99
    },
    TextInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:"white",
        borderRadius:8,
        width:"85%",
        fontSize:16
    },
    SearchBarContainer:{
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        gap:10
    },
    SearchButton:{
        backgroundColor:"white",
        padding:10,
        borderRadius:8,
    }
})