import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { initializeApp } from '@firebase/app'
import { Firebase } from '../firebase';


export default function Acesso({navigation}) {

const [email,setEmail] = useState('');
const [senha,setSenha] = useState('');
const [user,setUser] = useState('');
const auth = getAuth();


function login(){
    
signInWithEmailAndPassword(auth,email,senha).catch(
    function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode,errorMessage);
    }
)
}

useEffect (()=>{
    onAuthStateChanged(auth, (user)=>{
        setUser(user);
        if(initializeApp) setInitializeapp(false);
    });
},[])

if(user){
    return navigation.navigate('Home');
}else{ 
    alert('Xabu')
}

return(
<View style={styles.container}>
    <Text style={styles.titulo}>Acesso ao Diário</Text>
    <TextInput style={styles.input}
    placeholder="Digite o email"
    onChangeText={(email)=>setEmail(email)}
    value={email}
    />
 
    <TextInput style={styles.input}
    placeholder="Digite a senha"
    onChangeText={(senha)=>setSenha(senha)}
    value={senha}
    />

    <TouchableOpacity style={styles.botao}
    onPress={()=>{login();
    }}>
        <Text>Entrar</Text>
    </TouchableOpacity>
</View> 
);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#529aff',
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#f9d043',
      borderWidth: 3,
      marginBottom: 12,
      paddingHorizontal: 8,
      backgroundColor: '#85acff',
      color: 'white',
      borderRadius: 20
    },
    titulo: {
        color: 'white',
        alignItems: 'center',
        margin: 40,
        fontSize: 30,
        fontWeight: 'bold'
    },
    botao: {
        width: 80,
        height: 50,
        margin: 12,
        paddingHorizontal: 8,
        backgroundColor: '#c3d6ee',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
  });