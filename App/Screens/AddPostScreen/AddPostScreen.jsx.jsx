import { View, Text, TextInput,StyleSheet,Button} from 'react-native'
import React from 'react'
import { app } from '../../../firebaseConfig'
import {getFirestore,collection, getDocs} from "firebase/firestore"
import {useEffect,useState} from "react";
import {Picker} from "@react-native-picker/picker"
import { Formik } from 'formik';
export default function AddPostScreen() {
  const db = getFirestore(app);
  const [categoryList,setCategoryList] = useState([])
  useEffect(()=> {
    getCategoryList();
    
  },[])
  const getCategoryList = async() => {
    const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  setCategoryList(categoryList=>[...categoryList,doc.data()])
});

  }
  return (
    <View style={{padding:10}}>
    <Formik
    initialValues={{title:"",add:"",category:"",desc:"",price:""}}
    onSubmit={value=>console.log(value)}> 
    {({handleChange,handleBlur,handleSubmit,values}) => (
<View>
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

  <Picker
  style={styles.input} 
  selectedValue={values?.category}
onChangeText={handleChange("category")}>
  {categoryList&&categoryList.map((item,index) =>(
    <Picker.Item key={index} label={item.name} value={item.name} />
  ))}
  </Picker>
  <Button onPress={handleSubmit} title="submit"/>
</View>
)}
    </Formik>
    </View>
  )
}
const styles =StyleSheet.create({
  input:{
    borderWidth:1,
    borderRadius:10,
    padding:10,
    margin:10,
 paddingHorizontal:17,
 fontSize:17
  
  },
})