import {Image, StyleSheet, Platform, View,Text, TextInput,TouchableOpacity , Button, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, {useEffect} from "react";
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import {SafeAreaProvider} from "react-native-safe-area-context";

// Ensure the 'react-native-paper' package is installed:
// Run: npm install react-native-paper
// Run: npm install @types/react-native-paper --save-dev (if type declarations are missing)
export default function HomeScreen() {
    const [searchText, setSearchText] = React.useState('');
    const handleSearch = () => {
        console.log(searchText);
    }
    const panah = '>'
    useEffect(() => {
        const timeoutId = setTimeout(()=>{
            handleSearch();
        },500);
        return () => {
            clearTimeout(timeoutId);
        }
    }, []);

    return (
      <View style={styles.container}>
          <ThemedView style={styles.headers}>
              <ThemedText style={styles.name} type="title">Hi, Tino Rajen</ThemedText>
              <HelloWave />
          </ThemedView>
          <ThemedText style={styles.phone} type="title">+6281339731979</ThemedText>
          <ThemedView style={styles.search}>
              <TextInput
                  style={styles.input}
                  placeholder="Search..."
                  onChangeText={(text) => setSearchText(text)}
                  value={searchText}
              />
              <Ionicons name="search" size={24} color="gray" style={styles.icon} />
          </ThemedView>

          <SafeAreaProvider>
              <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
                  <ScrollView style={styles.scrollView}>
                      <ThemedView style={styles.category}>
                          <ThemedText>Category</ThemedText>
                          <ThemedText>See All {panah}</ThemedText>
                      </ThemedView>
                      <ThemedView>
                          <Image style={{alignSelf:'center', top:10,width:360,height:180}} source={require('@/assets/images/headerbg.png')} />
                      </ThemedView>
                      <View style={styles.container}>
                          <ThemedView style={styles.category}>
                              <ThemedText>Materi Populer</ThemedText>
                              <ThemedText>See All {panah}</ThemedText>
                          </ThemedView>
                          <ScrollView horizontal={true}>
                              <View style={{left:10, right:10, top:10, padding:15, flexDirection:'row'}}>
                                  <TouchableOpacity style={styles.card}>
                                      <Image
                                          source={{ uri: 'https://i.ytimg.com/vi/W3U4naZHDHA/default.jpg' }}
                                          style={styles.image}
                                      />
                                      <View style={styles.cardContent}>
                                          <Text style={styles.cardTitle}>Card Title</Text>
                                          <Text style={styles.cardDescription}>
                                              This is a description for the card. You can add more details here.
                                          </Text>
                                      </View>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={styles.card}>
                                      <Image
                                          source={{ uri: 'https://i.ytimg.com/vi/W3U4naZHDHA/default.jpg' }}
                                          style={styles.image}
                                      />
                                      <View style={styles.cardContent}>
                                          <Text style={styles.cardTitle}>Card Title</Text>
                                          <Text style={styles.cardDescription}>
                                              This is a description for the card. You can add more details here.
                                          </Text>
                                      </View>
                                  </TouchableOpacity><TouchableOpacity style={styles.card}>
                                      <Image
                                          source={{ uri: 'https://i.ytimg.com/vi/W3U4naZHDHA/default.jpg' }}
                                          style={styles.image}
                                      />
                                      <View style={styles.cardContent}>
                                          <Text style={styles.cardTitle}>Card Title</Text>
                                          <Text style={styles.cardDescription}>
                                              This is a description for the card. You can add more details here.
                                          </Text>
                                      </View>
                                  </TouchableOpacity><TouchableOpacity style={styles.card}>
                                      <Image
                                          source={{ uri: 'https://i.ytimg.com/vi/W3U4naZHDHA/default.jpg' }}
                                          style={styles.image}
                                      />
                                      <View style={styles.cardContent}>
                                          <Text style={styles.cardTitle}>Card Title</Text>
                                          <Text style={styles.cardDescription}>
                                              This is a description for the card. You can add more details here.
                                          </Text>
                                      </View>
                                  </TouchableOpacity>
                              </View>
                          </ScrollView>

                      </View>
                  </ScrollView>
              </SafeAreaView>
          </SafeAreaProvider>


      </View>
  )
}

const styles = StyleSheet.create({
    category:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        marginLeft:30,
        marginRight:30,
        marginBottom:10,
        fontFamily:'SpaceMono',
        fontSize:26,
        fontWeight:'bold',
    },
    cardContent: {
        padding: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 14,
        color: '#555',
    },
    card: {
        width: 200,
        borderRadius: 25,
        borderColor:'solid #000',
        overflow: 'hidden',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5, // For Android shadow
        marginBottom: 20,
        marginRight:15
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    scrollView: {
        backgroundColor: 'white',
    },
    scrollx:{
        alignSelf:'center',left:10, right:10, top:10, padding:15
    },
    text: {
        fontSize: 42,
        padding: 12,
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        // gap: 10,
        backgroundColor: '#fff',
    },
    headers:{
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: Platform.OS === 'ios' ? 60 : 0,
        flexDirection: 'row',
    },
    name:{
        fontSize: 20,
        fontWeight: 'normal',
    },
    phone:{
        fontFamily: 'SpaceMono',
        fontSize: 16,
        fontWeight: 'normal',
        color: 'gray',
        top:-5,
        left:30,
    },
    headerImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 20,
        width: '85%',
        height: 64,
        alignSelf: 'center',
        marginTop:20,
        borderRadius: 10,
        fontSize: 16,
        alignItems: 'center',
        color:'black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    icon: {
        marginLeft: 12,
        padding:10,
        top:30,
        position: 'absolute',
        right: 15,
        backgroundColor: '#1A6EFC',
        color: 'white',
        borderRadius: 10,

    },
    search:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: '85%',
        alignSelf: 'center',

    },
    courses:{
        marginTop: 10,
    },
})
