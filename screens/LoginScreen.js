
import React from 'react';
import {

  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
  
} from 'react-native';
import User from '../User';

export default class LoginScreen  extends React.Component{
  state = {
    phone: '',
    name: ''
  }
  handleChange = key => val =>{
    this.setState({[key]:val})
  }
  
  submitForm = () =>{
    if (this.state.phone.length<10){
      Alert.alert('Error','Wrong phone number')

    } 
    else if (this.state.name.length<3) {
      
      Alert.alert('Error','Wrong name')
      
    }
    else{
      await AsyncStorage.setItem('userPhone',this.state.phone);
      User.phone = this.state.phone;
      this.props.navigation.navigate('App');

    }
    alert(this.state.phone + '\n'+this.state.name)

  }
  render(){
    return(
        <View style={styles.container}>
          <TextInput
          placeholder= "phone number"
          keyboardType="number-pad"
          style={styles.input}
          value={this.state.phone}
          onChangeText = {this.handleChange('phone')}
          />
          
          <TextInput
          placeholder= "Name"
          style={styles.input}
          value={this.state.phone}
          onChangeText = {this.handleChange('name')}
          />
          <TouchableOpacity>
            <Text style ={styles.btnText}>Enter</Text>
          </TouchableOpacity>

          </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent : 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
  },
  input: {
    padding: 10,
    borderWidth:1,
    borderColor:'#ccc',
    width:'90%',
    marginBottom: 10,
    borderRadius:5 
  },
  btnText:{
    color:'darkblue',
    fontSize:20

  }

  
});

export default LoginScreen;
