import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';

import Footer from '../../components/footer'


let customFonts  = {
  'Avenir': require('../../assets/fonts/Avenir.ttf'),
  'Gadugi': require('../../assets/fonts/gadugi.ttf'),
  'GadugiB': require('../../assets/fonts/gadugib.ttf')
};

export default class Request extends React.Component  {
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

  getData() {
    return  [
    {
      
    name:"Wreckfish",
    
  },
  {
    
    name:"Atlantic wahoo",
    
  },
  ]
  }

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Request a loan</Text>
      <View style={{backgroundColor:'#FFFFFF', height:'70%',width:'80%', elevation:1, position:'absolute', zIndex:4, top:'10%', alignSelf:'center', borderRadius:10}}>
            <Text style={styles.h1}>Amount</Text>
            <TextInput placeholder='Amount' style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'1%', backgroundColor:'#EAEAEA',padding:'2.5%', width:'40%', borderRadius:5,alignSelf:'center'}}></TextInput>
            <Text style={styles.h1}>Date of Return</Text>
            <TextInput placeholder='Date of Return' style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'1%', backgroundColor:'#EAEAEA',padding:'2.5%', width:'50%', borderRadius:5,alignSelf:'center'}}></TextInput>
            <Text style={styles.h1}>Reason</Text>
            <TextInput placeholder='Reason' style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'1%', backgroundColor:'#EAEAEA',padding:'2.5%', width:'70%',height:'30%', borderRadius:5,alignSelf:'center'}}></TextInput>
            <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'15%', backgroundColor:'#FCBE1F', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('EQRCode')}>Request</Text>
      </View>
     
     
     
   
      
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'15%', backgroundColor:'#FCBE1F', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('EQRCode')}>Get QR COde</Text>
       <View style={{marginBottom:'10%', marginTop:'140%'}}><Footer ></Footer></View>
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
    
  },
  header:{
    height:'30%',
    width:'70%',
    marginTop:'20%',
    resizeMode:'contain',
    alignSelf:'center'
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