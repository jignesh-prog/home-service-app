import { View, Text, TextInput,StyleSheet,Button,Image, ScrollView, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import React from 'react'
import { app } from '../../../firebaseConfig'
import {getFirestore,collection, getDocs} from "firebase/firestore"
import {useEffect,useState} from "react";
import {Picker} from "@react-native-picker/picker"
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
export default function AddPostScreen() {
  const db = getFirestore(app);
  const [categoryList,setCategoryList] = useState([])
  const [image, setImage] = useState(null);
  useEffect(()=> {
    getCategoryList();
  },[]);
  const getCategoryList = async() => {
    setCategoryList([])
    const querySnapshot = await getDocs(collection(db, 'Category'));
querySnapshot.forEach((doc) => {
  console.log("Docs:", doc.data());
  setCategoryList(categoryList=>[...categoryList,doc.data()])
});
  }
  {/*Imag picker*/}
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <KeyboardAvoidingView style={{padding:10,}}>
        <ScrollView>
   <Text style={styles.text}>Add New Post</Text>
      <Formik
    initialValues={{title:"",desc:"",price:"",add:"",category:""}}
    onSubmit={value=>console.log(value)}> 
    {({handleChange,handleSubmit,values}) => (
<View>
  <TouchableOpacity onPress={pickImage}>
    {image? 
    <Image source={{uri: image}} style={styles.image} />
    :
  <Image style={styles.image} source={require('../../../assets/uploadImage.png')}/>}
  </TouchableOpacity>
  <TextInput 
  style={styles.input} 
  placeholder='Title'
value={values?.title}
onChangeText={handleChange("title")}
  />
  <TextInput 
  style={styles.input} 
  placeholder='Description'
value={values?.desc}
 numberOfLines={5}
onChangeText={handleChange("desc")}
  />
  <TextInput 
  style={styles.input} 
  placeholder='Price'
value={values?.price}
keyboardType='number-pad'
onChangeText={handleChange("price")}
  />
  <TextInput 
  style={styles.input} 
  placeholder='Add'
value={values?.add}
onChangeText={handleChange("add")}
  />
{/*category list dropdown*/}
  <Picker
  selectedValue={values?.category}
  style={styles.input}
onValueChange={handleChange("category")}>
  {categoryList && categoryList.map((item,index) =>(
    <Picker.Item key={index} label={item?.Name} value={item?.Name} />
  ))}
  </Picker>
  <Button onPress={handleSubmit} title="submit"/>
</View>
)}
    </Formik>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}
const styles =StyleSheet.create({
  input:{
    borderWidth:1,
    borderRadius:10,
    padding:10,
    margin:10,
 paddingHorizontal:17,
 fontSize:17,  
 borderWidth:1.5
  },
  text:{
    margin:10,
    fontSize:20,
    fontWeight:"bold"
  },
  image:{
    width:100,
    height:100,
    borderRadius:15
  }
})