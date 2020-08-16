import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import Home from '../assets/images/home.png';
import Jar from '../assets/images/jar.png';
import Profile from '../assets/images/profile.png';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        
    },
});


export default function Footer  ({ route}) {
    const navigation = useNavigation();
    return(
    
    <View style={styles.container}>
        
        <Image source={Home} style={{position:'absolute', left:'5%'}}></Image>
       <Text style={{position:'absolute', left:'45%',fontSize:30,zIndex:3,color:'transparent'}} onPress={()=>navigation.navigate('Jar')}>JAR</Text><Image source={Jar} style={{position:'absolute', left:'45%'}}></Image>
        <Image source={Profile} style={{position:'absolute', right:'5%'}}></Image>
            

    </View>
);
}

