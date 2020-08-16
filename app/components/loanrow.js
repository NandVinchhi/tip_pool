import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function LoanRow({ route,name, amount}) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
       <TouchableOpacity><Text style={styles.name}>{name} <Text style={styles.amount}>{amount}Rp
        </Text>
        </Text>
        
        </TouchableOpacity> 
    </View>
)}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE08F',
        alignSelf:'center',
        justifyContent:'center',
        width:'70%',
        borderRadius:10,
        marginTop:'2.5%',
        
        
        
    },
    name: {
        fontSize: 20,
        color: '#000',
        fontFamily:'Gadugi',
        padding:'5%',
        textAlignVertical:'center',
        marginLeft:'10%'
    },
    amount: {
        fontSize: 20,
        color: '#000',
        fontFamily:'GadugiB',
        padding:'5%',
        textAlignVertical:'center',
        marginLeft:'70%',
        textAlign:'right'
    },
     
});