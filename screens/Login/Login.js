import React, { useState } from 'react';
import {SafeAreaView, ScrollView, View, Pressable} from "react-native";
import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import style from './style';
const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.conteiner}>
            <View style={globalStyle.marginBottom24}>
                 <Header type={1} title={'Welcome Back'} />    
            </View>
            <Input style={globalStyle.marginBottom24}
            secureTextEntry={true} keyboardType={'email-address'}
            label={'Email'} placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)}/>

            <Input style={globalStyle.marginBottom24}
            secureTextEntry={true} 
            label={'Password'} placeholder={'******'}
            onChangeText={value => setPassword(value)}/>

            <View style={globalStyle.marginBottom24}>
                <Button title={'Login'} />
            </View>
            <Pressable style={style.registrationButton}>
                    <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
            </Pressable>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;