import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';
import LoanList from '../../components/loanlist';
import Cheflist from '../../components/cheflist';
import Footer from '../../components/footer';


let customFonts  = {
  'Avenir': require('../../assets/fonts/Avenir.ttf'),
  'Gadugi': require('../../assets/fonts/gadugi.ttf'),
  'GadugiB': require('../../assets/fonts/gadugib.ttf')
};

export default class Loans extends React.Component  {
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

  getDataLoan() {
    return  [
    {
      
    name:"Votes 3/4",
    amount:'100',
    
  },
  {
    
    name:"Approved Loan",
    amount:'75',
    
  },
  ]
  }

  getData() {
    return  [
    {
      
    name:"John Doe Sr",
    amount:'100',
    
  },
  {
    
    name:"John Doe",
    amount:'50',
    
  },
  ]
  }

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Loans</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Requested Loans</Text>
      <LoanList style={{height:'50%'}} itemList={this.getData()}></LoanList>
      
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>My Loans</Text>
      <LoanList style={{height:'50%'}} itemList={this.getDataLoan()}></LoanList>
     
     
   
      
      <Text style={{position:'relative',fontSize:20, textAlign:'center', color:'#FFF', fontFamily:'GadugiB', marginTop:'15%', backgroundColor:'#FCBE1F', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('Vote')}>Details</Text>
       <View style={{marginBottom:'10%', marginTop:'10%'}}><Footer ></Footer></View>
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