import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import QRCode from 'react-native-qrcode-svg';
import * as Font from 'expo-font';
import Footer from '../../components/footer'

let customFonts  = {
    'Avenir': require('../../assets/fonts/Avenir.ttf'),
    'Gadugi': require('../../assets/fonts/gadugi.ttf'),
    'GadugiB': require('../../assets/fonts/gadugib.ttf')
  };
  
  
export default class Jar extends React.Component  {
    state = {
      fontsLoaded: false,
    };
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
  
    render(){
        if (this.state.fontsLoaded) {
        return (
        <View style={styles.container}>
        <View style={{backgroundColor:'#FCBE1F', height:'40%'}}></View>
        <View style={{backgroundColor:'#FFFFFF', height:'35%',width:'80%', elevation:1, position:'absolute', zIndex:4, top:'10%', alignSelf:'center', borderRadius:10}}>
            <Text style={styles.h1}>Individual Tip Jar</Text>
            <Text style={styles.l1}>500 Rp</Text>
            <Text style={styles.h1}>Total Tip Jar</Text>
            <Text style={styles.l1}>3500 Rp</Text>
        </View>
        <View style={{backgroundColor:'#FFFFFF', height:'10%',width:'80%', elevation:1, position:'absolute', zIndex:4, top:'48%', alignSelf:'center', borderRadius:10}}>
        <Text style={styles.f1} onPress={() => this.props.navigation.navigate('Docscan')}> Withdraw your money</Text>
        <Text style={styles.f2} > Money directly to you</Text>
            </View>
        
            <View style={{backgroundColor:'#FFFFFF', height:'10%',width:'80%', elevation:1, position:'absolute', zIndex:4, top:'60%', alignSelf:'center', borderRadius:10}}>
        <Text style={styles.f1} onPress={() => this.props.navigation.navigate('Request')}> Request a Loan</Text>
        <Text style={styles.f2} >Help each other in times of need</Text>
            </View>
            <View style={{backgroundColor:'#FFFFFF', height:'10%',width:'80%', elevation:1, position:'absolute', zIndex:4, top:'72%', alignSelf:'center', borderRadius:10}}>
        <Text style={styles.f1} onPress={() => this.props.navigation.navigate('Loans')}> Loans</Text>
        <Text style={styles.f2} > Track, pay off, and vote on loans</Text>
            </View>
          
          <View style={{marginBottom:'-10%', marginTop:'100%'}}><Footer ></Footer></View>
        </View>
        );
        }
        else {
        return <AppLoading />;
        }
      }
    }

    const styles = StyleSheet.create({
        container: {
          height:'100%',
          position:'relative',
          backgroundColor: '#fff',
        },
        h1:{
            fontSize:20,
            fontFamily:'Gadugi',
            position:'relative',
            zIndex:2,
            marginTop:'5%',
            width:'70%',
            alignSelf:'center',
            paddingHorizontal:20,
            paddingVertical:10,
            color:'#5A5A5A',
            textAlign:'center',
        },
        l1:{
            fontSize:35,
            fontFamily:'GadugiB',
            position:'relative',
            zIndex:2,
            marginTop:'2%',
            width:'70%',
            alignSelf:'center',
            paddingHorizontal:20,
            paddingVertical:10,
            color:'#5A5A5A',
            textAlign:'center',
        },
     
          h2:{
            fontSize:20,
            fontFamily:'Gadugi',
            position:'relative',
            zIndex:2,
            marginTop:'25%',
            width:'70%',
            alignSelf:'center',
            paddingHorizontal:20,
            paddingVertical:10,
            color:'#5A5A5A',
            textAlign:'center',
        },
        f1:{
            fontSize:20,
            fontFamily:'GadugiB',
            position:'relative',
            zIndex:2,
            marginTop:'5%',
            width:'100%',
            paddingHorizontal:20,
            paddingVertical:5,
            color:'#5A5A5A',
            textAlign:'left',
        },
        f2:{
            fontSize:20,
            fontFamily:'Gadugi',
            position:'relative',
            zIndex:2,
            marginTop:'1%',
            width:'100%',
            paddingHorizontal:20,
            color:'#5A5A5A',
            textAlign:'left',
        },
        
      });