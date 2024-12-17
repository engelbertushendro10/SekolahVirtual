import {StyleSheet, Image, View, ScrollView} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {HelloWave} from "@/components/HelloWave";
import React from "react";

export default function TabTwoScreen() {
  return (
   <View style={styles.container}>
       <ThemedView style={styles.headers}>
           <ThemedView>
               <Image style={styles.profiles} source={require('@/assets/images/react-logo2x.png')} />
           </ThemedView>
           <ThemedView style={styles.covernames}>
               <ThemedText>Selamat Datang</ThemedText>
               <ThemedText style={styles.name}>Tino Rajen</ThemedText>
           </ThemedView>
           <HelloWave />
       </ThemedView>

       <ThemedView style={styles.content}>
           <ThemedText style={{fontWeight:"bold", fontSize:20, top:25, color:'black'}}>Materi Tersedia</ThemedText>
           <ThemedView style={styles.cardContent}>
               <ThemedView style={{
                       backgroundColor:"#E3F0FA",
                       borderRadius:10,
                       marginTop:20,
                       marginRight:20,
                       width:110,
                       height:130
                   }}>
                   <Image style={{alignSelf:'center', width:80, height:80}} source={require('@/assets/images/react-logo2x.png')} />
                    <ThemedText style={styles.availableText}>Learning</ThemedText>
               </ThemedView>
               <ThemedView style={{
                   //
                   backgroundColor:"#CAFBE1",
                   borderRadius:10,
                   marginTop:20,
                   marginRight:20,
                   width:110,
                   height:130
               }}>
                   <Image style={{alignSelf:'center', width:80, height:80}} source={require('@/assets/images/react-logo2x.png')} />
                    <ThemedText style={styles.availableText}>Learning</ThemedText>
               </ThemedView>
               <ThemedView style={{
                       backgroundColor:"#FAF5E3",
                       borderRadius:10,
                       marginTop:20,
                       marginRight:20,
                       width:110,
                       height:130
                    }}>
                   <Image style={{alignSelf:'center', width:80, height:80}} source={require('@/assets/images/react-logo2x.png')} />
                    <ThemedText style={styles.availableText}>Learning</ThemedText>
               </ThemedView>
           </ThemedView>
       </ThemedView>
       <ThemedView style={
           {alignSelf:'center',
               backgroundColor:'#3682f5',
               top:5,width:380,
               height:110,
               borderWidth:1,
               borderColor:'#3682f5',
               borderRadius:25,
               shadowColor:'#000000',
               marginTop:20}}>
           <ThemedView style={styles.transpran}>
               <ThemedText style={{color:'#fff', fontSize:14, fontWeight:'bold'}}>Sekolah Virtual</ThemedText>
               <ThemedText style={{color:'#fff', fontSize:19,fontWeight:'bold', padding:5}}>50+</ThemedText>
               <ThemedText style={{color:'#fff', fontSize:14,fontWeight:'bold'}}>materi unggulan</ThemedText>
           </ThemedView>
       </ThemedView>
       <ScrollView style={{backgroundColor:"#fff", marginBlockEnd:60}}>
           <ThemedView style={{marginTop:15}}>
               <ThemedText type={"title"} style={{fontSize:18}}>
                   Dayli Tasks
               </ThemedText>
               <ThemedView style={
                   {alignSelf:'center',
                       backgroundColor:'#edeef3',
                       top:3,
                       display:'flex',
                       flexDirection:'row',
                       width:380,
                       height:110,
                       borderWidth:1,
                       borderColor:'#edeef3',
                       borderRadius:25,
                       shadowColor:'#000000',
                       marginTop:10}}>
                   <ThemedView style={styles.transpran}>
                       <Image style={{
                           display:'flex',
                           justifyContent:'flex-start',
                           width:110,
                           height:110,
                           marginLeft:0,
                           borderTopLeftRadius:25,
                           borderBottomLeftRadius:25
                       }} source={require('@/assets/images/courses.jpg')} />
                   </ThemedView>
                   <ThemedView style={{backgroundColor:'transparent', marginLeft:15, marginTop:10}}>
                       <ThemedText>Learning Skill</ThemedText>
                       <ThemedText style={{fontSize:20, fontWeight:'bold'}}>Learning Skill</ThemedText>
                       <ThemedText>Learning Skill</ThemedText>
                   </ThemedView>
               </ThemedView><ThemedView style={
                   {alignSelf:'center',
                       backgroundColor:'#edeef3',
                       top:3,
                       display:'flex',
                       flexDirection:'row',
                       width:380,
                       height:110,
                       borderWidth:1,
                       borderColor:'#edeef3',
                       borderRadius:25,
                       shadowColor:'#000000',
                       marginTop:10}}>
                   <ThemedView style={styles.transpran}>
                       <Image style={{
                           display:'flex',
                           justifyContent:'flex-start',
                           width:110,
                           height:110,
                           marginLeft:0,
                           borderTopLeftRadius:25,
                           borderBottomLeftRadius:25
                       }} source={require('@/assets/images/courses.jpg')} />
                   </ThemedView>
                   <ThemedView style={{backgroundColor:'transparent', marginLeft:15, marginTop:10}}>
                       <ThemedText>Learning Skill</ThemedText>
                       <ThemedText style={{fontSize:20, fontWeight:'bold'}}>Learning Skill</ThemedText>
                       <ThemedText>Learning Skill</ThemedText>
                   </ThemedView>
               </ThemedView><ThemedView style={
                   {alignSelf:'center',
                       backgroundColor:'#edeef3',
                       top:3,
                       display:'flex',
                       flexDirection:'row',
                       width:380,
                       height:110,
                       borderWidth:1,
                       borderColor:'#edeef3',
                       borderRadius:25,
                       shadowColor:'#000000',
                       marginTop:10}}>
                   <ThemedView style={styles.transpran}>
                       <Image style={{
                           display:'flex',
                           justifyContent:'flex-start',
                           width:110,
                           height:110,
                           marginLeft:0,
                           borderTopLeftRadius:25,
                           borderBottomLeftRadius:25
                       }} source={require('@/assets/images/courses.jpg')} />
                   </ThemedView>
                   <ThemedView style={{backgroundColor:'transparent', marginLeft:15, marginTop:10}}>
                       <ThemedText>Learning Skill</ThemedText>
                       <ThemedText style={{fontSize:20, fontWeight:'bold'}}>Learning Skill</ThemedText>
                       <ThemedText>Learning Skill</ThemedText>
                   </ThemedView>
               </ThemedView>
           </ThemedView>
       </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  transpran:{
    backgroundColor:"transparent",

  },
  container:{
      backgroundColor:"#fff",
      flex:1,
      paddingHorizontal:20,
      paddingTop:35,
  },
  headers:{
      backgroundColor:"transparent",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
  },
  coverProfile:{
    borderStyle:"solid",
    borderWidth:2
  },
  profiles:{
      width: 45,
      height: 45,
      borderWidth: 2,
      borderColor:"#1A6EFC",
      borderRadius: 50,
  },
    covernames:{
      backgroundColor:"transparent",
      position:"absolute",
      left:80,
    },
  name:{
    fontWeight:"bold",
      fontSize:18,
  },
  headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
  },
  titleContainer: {
      flexDirection: 'row',
      gap: 8,
  },
//     content
   content:{
      display:"flex",
      flexDirection:"column",
   },
   available:{
      borderWidth:1,
      borderColor:"#1A6EFC",
      borderRadius:10,
      marginTop:20,
      marginRight:20,
      width:110,
      height:150
   },
   cardContent:{
      marginTop:20,
      display:"flex",
      flexDirection:"row",
   },
   availableText:{
      fontSize:13,
      fontWeight:"bold",
      padding:10,
      paddingLeft:20,
      paddingRight:20,
      paddingTop:10,
      paddingBottom:10,
      color:"#000000",
   }
});
