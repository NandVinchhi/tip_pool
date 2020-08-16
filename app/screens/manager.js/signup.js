import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';

let customFonts  = {
  'Avenir': require('../../assets/fonts/Avenir.ttf'),
  'Gadugi': require('../../assets/fonts/gadugi.ttf'),
  'GadugiB': require('../../assets/fonts/gadugib.ttf')
};

export default class SignupM extends React.Component  {
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
      <Text style={{position:'relative',fontSize:60,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'20%'}}>Sign Up</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#A8A8A8', fontFamily:'Gadugi', marginTop:'10%'}}>Sign up with your email</Text>
      <TextInput placeholder='Name' style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'10%', backgroundColor:'#EAEAEA',padding:'2.5%', width:'80%', borderRadius:5,alignSelf:'center'}}></TextInput>
      <TextInput placeholder='Email' style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'5%', backgroundColor:'#EAEAEA',padding:'2.5%', width:'80%', borderRadius:5,alignSelf:'center'}}></TextInput>
      <TextInput placeholder='Password' style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'5%', backgroundColor:'#EAEAEA',padding:'2.5%', width:'80%', borderRadius:5,alignSelf:'center'}}></TextInput>
      <TextInput placeholder='Confirm Password' style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'5%', backgroundColor:'#EAEAEA',padding:'2.5%', width:'80%', borderRadius:5,alignSelf:'center'}}></TextInput>
   
      
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'25%', backgroundColor:'#FCBE1F', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('State')}>REGISTER</Text>
      <Text style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Gadugi', marginTop:'5%',alignSelf:'center'}} onPress={()=>this.props.navigation.navigate('State')}>Have an account? Log in</Text>
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
  
});