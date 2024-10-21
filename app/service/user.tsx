/*import React,{ Component } from 'react';
import { View, Text, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

class Firebase extends Component {
    constructor(props: any) {
        super(props);
        this.getUSer();
    }
    getUSer = async () => {
        const userDocument =  await firestore().collection("user").doc("2oYetTUwwy7Jc5JIX4Cf").get();
        console.log(userDocument);
    }
    render() {
        return(
        <View>
            <Text>firebase</Text>
        </View>
        );
    }   
}
export default Firebase;*/