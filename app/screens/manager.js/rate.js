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

export default class Rate extends React.Component  {
  state = {
    fontsLoaded: false,
    food:0,
    service:0,
    wt:0,
    clean:0,
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
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Rate Your Experience</Text>
      
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Gadugi', marginTop:'5%'}}>Help tip each employee fairly</Text>
     
      
      
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Food Quality</Text>
      <View style={{flex:1, flexDirection:'row', alignSelf:'center', marginTop:'5%'}}><Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, marginRight:'2%',alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({food:1})}>1</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'2%', marginRight:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({food:2})}>2</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'2%', marginRight:'2%',backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({food:3})}>3</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'2%', marginRight:'2%',backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({food:4})}>4</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'2%', marginRight:'2%',backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({food:5})}>5</Text></View>
      
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Service</Text>
      <View style={{flex:1, flexDirection:'row', alignSelf:'center', marginTop:'5%'}}><Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center',marginRight:'2%', elevation:1}} onPress={()=>this.state.setState({service:1})}>1</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({service:2})}>2</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({service:3})}>3</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({service:4})}>4</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({service:5})}>5</Text></View>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Waiting Time</Text>
      <View style={{flex:1, flexDirection:'row', alignSelf:'center', marginTop:'5%'}}><Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', marginRight:'2%',elevation:1}} onPress={()=>this.state.setState({wt:1})}>1</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({wt:2})}>2</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({wt:3})}>3</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({wt:4})}>4</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({wt:5})}>5</Text></View>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Cleanliness</Text>
      <View style={{flex:1, flexDirection:'row', alignSelf:'center', marginTop:'5%'}}><Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', marginRight:'2%',elevation:1}} onPress={()=>this.state.setState({clean:1})}>1</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({clean:2})}>2</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({clean:3})}>3</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({clean:4})}>4</Text>
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', marginRight:'2%',fontFamily:'GadugiB', marginTop:'2%', backgroundColor:'#FCBE1F', padding:'3%', width:'10%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.state.setState({clean:5})}>5</Text></View>

      <Text style={{position:'relative',fontSize:10,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Gadugi', marginTop:'10%'}}>   If no ratings given, tip will be given based on previous customer ratings</Text>
   
   
     
     
      <View style={{backgroundColor:'#FFFFFF', height:'30%',width:'80%', elevation:1, position:'absolute', zIndex:4, top:'65%', alignSelf:'center', borderRadius:10}}>
            <Text style={styles.h1}>Tip Amount</Text>
            <TextInput placeholder='Amount' style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'Gadugi', marginTop:'1%', backgroundColor:'#EAEAEA',padding:'2.5%', width:'40%', borderRadius:5,alignSelf:'center'}}></TextInput>
            
            <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'15%', backgroundColor:'#FCBE1F', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('EQRCode')}>Pay</Text>
      </View>
   
      
      
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
    fontFamily:'GadugiB',
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