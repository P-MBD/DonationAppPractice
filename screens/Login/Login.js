import React, { useState } from 'react';
import {SafeAreaView, ScrollView} from "react-native";
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
const Login = () =>{
    const [email, setEmail] = useState('');
    console.log(email);
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.conteiner}>
            <Input
            secureTextEntry={true}
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)}
          />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;