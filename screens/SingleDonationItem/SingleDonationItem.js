import React from 'react';
import style from './style';
import {useSelector} from 'react-redux';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import { Image } from 'react-native-svg';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;
  console.log(route.params);
  return(
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <BackButton onPress={()=> navigation.goBack()} style={style.container} />
          <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
        </Text>
        </ScrollView>
        <View style={style.button}>
            <Button title={"Donate"} />
        </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;