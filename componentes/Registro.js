import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from './Firebase'; 

const RegistroScreen = ({ navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [ bio, setBio] = useState('');

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Salva nome e bio Firestore
            await setDoc(doc(db, 'users', user.uid), {
                name,
                bio
            });

            Alert.alert('Sucesso', 'Usuário cadastrado sucesso!' , [
                { text: 'OK', onPress: () => navigation.replace('Home') }
            ]);
            console.log('Usuário cadastrado com sucesso:', user.uid);

        } catch (err) {
            Alert.alert('Erro', 'Não foi possivel cadastrar. Tente novamente!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Bio"
                value={bio}
                onChangeText={setBio}
            />
            <Button title="Cadastrar" onPress={handleRegister} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, justyfiContainer: 'center', alignItems: 'center'},
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        marginVertical: 5,
    }
});

export default RegistroScreen;
