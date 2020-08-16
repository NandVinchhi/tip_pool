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

export default class Vote extends React.Component  {
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
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Details</Text>
      <View style={{backgroundColor:'#FFFFFF', height:'80%',width:'80%', elevation:1, position:'absolute', zIndex:4, top:'10%', alignSelf:'center', borderRadius:10}}>
            <Text style={styles.h1}>Amount</Text>
            <Text style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'1%', backgroundColor:'#FFE08F',padding:'2.5%', width:'40%', borderRadius:5,alignSelf:'center'}}>50Rp</Text >
            <Text style={styles.h1}>Date of Return</Text>
            <Text  style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'1%', backgroundColor:'#FFE08F',padding:'2.5%', width:'50%', borderRadius:5,alignSelf:'center'}}>20/10/2020</Text>
            <Text style={styles.h1}>Reason</Text>
            <Text style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'1%', backgroundColor:'#FFE08F',padding:'2.5%', width:'70%',height:'30%', borderRadius:5,alignSelf:'center'}}>I would like to request a loan of $200 for the duration of one month as I need help paying my mortgage for my house.</Text>
            <Text style={styles.a1}>Vote to approve this request?</Text>
            <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'1%', backgroundColor:'#FCBE1F', padding:'5%', width:'30%', borderRadius:10, marginLeft:'15%', elevation:1}} onPress={()=>this.props.navigation.navigate('EQRCode')}>Yes</Text>
            <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'-17%', backgroundColor:'#FCBE1F', padding:'5%', width:'30%', borderRadius:10, marginLeft:'50%', elevation:1}} onPress={()=>this.props.navigation.navigate('EQRCode')}>No</Text>
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
a1:{
    fontSize:15,
    fontFamily:'GadugiB',
    position:'relative',
    zIndex:2,
    marginTop:'15%',
    width:'80%',
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