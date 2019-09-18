import React from 'react';
import {SafeAreaView,Text,TextInput, TouchableOpacity, Alert,AsyncStorage} from 'react-native';
import User from '../screens/User';
import styles from '../screens/constants/style';
import {} from 'react-native-gesture-handler';
import firebase from 'firebase';
export default class ProfileScreen extends React.Component{
    static navigationOptions = {
        title:'Profile'
    }
    state = {
        name: User.name
    }
    handleChange = key => val => {
        this.setState({[key]:val})
    }
    _logout = async () => {
        await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
    }
    changeName = async () => {
        if (this.state.name.length<3) {
            Alert.alert('Error','please enter valid name');
            
        }
        else if(User.name !== this.state.name){
        firebase.database.ref('Users').child(User.phone).set({name:this.state.name});
        User.name = this.state.name;
        Alert.alert('Sucesss','Name changed sucessfl.');
        }

    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text style={{fontSize:20}}>
                    {User.phone}
                </Text>
                
                <TextInput
                style={styles.input}
                value={this.state.name}
                onChangeText={this.handleChange('name')}/>
                <TouchableOpacity onPress={this.changeName}>
                    <Text style={styles.btnText}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}