import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class InstagramScreen extends React.Component {
    render(){
        return(

            <View style={styles.container}>
                <Text style={styles.container}>Click me to go to instagram</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:200,
        backgroundColor:'red',
        alignItems:'center'
    },
    textin: {
        color:'black',
        fontWeight:"500",
        fontSize:25,
        alignITems: 'center',
        JustifyContent:'center',
    },

    
}); 