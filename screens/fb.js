import {React}  from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class FacebookScreen extends React.Component{
    render(){
        return(

            <View style={styles.container}>
                <Text style={styles.container}>Click me to go to facebook</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:200,
        backgroundColor:'black',
        alignItems:'center'
    },
    textin: {
        color:'red',
        fontWeight:"500",
        fontSize:25,
        alignITems: 'center',
        JustifyContent:'center',
    },

    
}); 