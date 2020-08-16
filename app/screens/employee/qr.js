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
  
  
export default class EQRCode extends React.Component  {
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
        
        <Text style={{position:'relative',fontSize:60,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'30%'}}>QR Code</Text>
          <View style={{alignSelf:'center',top:'10%'}}><QRCode
            value={'John Doe'}
            size={200}
            color={'#FCBE1F'}
          /></View>
          <Text style={styles.h2} onPress={() => this.props.navigation.navigate('Docscan')}> Show this to your customers for instant tips</Text>
          <View style={{ marginTop:'46%'}}><Footer ></Footer></View>
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

        
      });