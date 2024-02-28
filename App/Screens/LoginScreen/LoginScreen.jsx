import { View, Image,StyleSheet,Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';
WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <View style={styles.Container}>
     <Image style={styles.Image} source={require("../../../assets/login5.jpg")}/>
     <View style={styles.Subcontainer}>
     <Text style={{textAlign:"center",fontSize:25,marginTop:5,color:"white"}}>Let's find 
        <Text style={{fontWeight:"bold"}}> Professional cleaning and repair </Text>
         Service
        </Text>
        <Text style={{fontSize:15,color:"white",textAlign:"center",marginTop:15}}>Best app to find service near you which deliver professional cleaning</Text> 
     <TouchableOpacity style={styles.Button} onPress={onPress}> 
     <Text style={{textAlign:"center",fontSize:20,color:"#78488a"}}>Let's get started</Text>
    </TouchableOpacity> 
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
    Container:{
        justifyContent:"center"
    },
    Image:{
        width:230,
        height:"60%",
        alignSelf:"center",
        marginTop:40,
        borderColor:"black",
        borderWidth:4,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
Subcontainer:{
    width:"100%",
    backgroundColor:"#78488a",
    height:"33%",
    borderTopLeftRadius:30,marginTop:10,
    borderTopRightRadius:30
},
Button:{
    backgroundColor:"white",
    marginTop:15  ,
    padding:15,
    borderRadius:90,
    width:"90%",
    alignSelf:"center"
}
}
)