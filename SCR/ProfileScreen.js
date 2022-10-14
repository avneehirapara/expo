import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import {addDATA } from '../Redux/action/Profile.action';


export default function ProfileScreen() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState('');


    const PROFILES = useSelector(state => state.Profile);

    const dispatch = useDispatch();

    const handelAddData = () => {
        console.log( "HANDELADD DONE",email,name, image );
        dispatch(addDATA({ email:email,name:name ,pro_image: image })) 
    }

    const handleImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
            console.log("img done", image);
        });
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => handleImagePicker()}>
                        <View style={styles.IMG}></View>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center", marginBottom: 100 }}>
                    <Text style={{ color: "#95051B", fontSize: 22, fontWeight: "600" }}></Text>
                </View>
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Email"
                    placeholderTextColor="#6B7280"
                    color='#1F2937'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.inputPass}
                    placeholder="Name"
                    placeholderTextColor="#6B7280"
                    color='#1F2937'
                    onChangeText={(text) => setName(text)}
                    value={name}
                    // secureTextEntry={true}
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.loginBtn} onPress={() => { handelAddData() }}>
                    <Text style={styles.loginText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F4F6F7",

    },
    container: {
        flex: 1,
        backgroundColor: "#F4F6F7",
        margin: 18
    },
    IMG: {
        height: 150,
        width: 150,
        borderRadius: 80,
        backgroundColor: '#D5DBDB',
    },
    inputEmail: {
        borderRadius: 10,
        width: "100%",
        height: 45,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#A19F9F",
        marginBottom: 20
    },
    inputPass: {
        borderRadius: 10,
        width: "100%",
        height: 45,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#A19F9F",
        marginBottom: 10
    },
    loginBtn: {
        width: "30%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
        marginTop: 30,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 10
    },
    loginText: {
        fontWeight: "700",
        color: "white",
        fontSize: 16
    },
})