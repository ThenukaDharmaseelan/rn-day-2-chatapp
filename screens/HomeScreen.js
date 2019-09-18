import React from 'react';
import {SafeAreaView,View,Text,TouchableOpacity,AsyncStorage,FlatList} from 'react-native';
import User from '../User';
import styles from'../constants/styles';
import firebase from 'firebase'
export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Chats'
    }
    state = {
        Users:[]
    }
    componentWillMount(){
        let dfRef = firebase.database().ref('users');
        dbref.on('child_added',(val)=>{
            let person = val.val();
            person.phone = val.key;
            if (person.phone=== user.phone) {
                user.name = person.name
                
            }
            
           else{this.setState((prevState)=>{
            return{
                users: [...prevState.users, person]
            }
        })
    }
            
        })
    }
    _logout = async () => {
        await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
    }
    renderRow =({item}) =>{
        return(
            <TouchableOpacity 
            onPress= {() => this.props.navigation.navigate('chat',item)}
            style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:1}}>
                <Text>style={{fontSize:20}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <SafeAreaView style={styles.container} >
                <FlatList
                data= {this.state.users}/>
                renderItem={this.renderRow}
                keyExtractor={(item)=>item.phone}
                
            </SafeAreaView>
        )
    }
}