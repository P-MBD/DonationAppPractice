import React from 'react';
import {View,SafeAreaView, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';


const Home = () => {
  const user = useSelector(state => state.user);
  console.log(user);
    return(
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
              <Header title={user.firstName +' '+ user.lastName} />
        </SafeAreaView>
    );
}

export default Home;