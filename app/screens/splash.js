import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
  'Gadugi': require('../assets/fonts/gadugi.ttf'),
  'GadugiB': require('../assets/fonts/gadugib.ttf')
};

export default class Splash extends React.Component  {
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
      <Image source={require('../assets/images/splash.png')} style={styles.header}></Image>
      <Text style={{position:'relative',fontSize:30,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Welcome to TipPanda</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Gadugi', marginTop:'2.5%'}}>An equitable system for tipping </Text>
      <Text style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Gadugi', marginTop:'30%'}}>Which of the following describe your role best? </Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'5%', backgroundColor:'#FCBE1F', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('SplashE')}>EMPLOYEE</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#142143', fontFamily:'GadugiB', marginTop:'5%', backgroundColor:'#FFF', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('SplashM')}>MANAGER</Text>
      <Text style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Gadugi', marginTop:'2%'}} onPress={()=>this.props.navigation.navigate('Rate')}>If you're a customer tap here </Text>
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