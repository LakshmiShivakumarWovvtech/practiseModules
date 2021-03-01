/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';

const DrawerHomePage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hey Laxmi..</Text>
      <Image
        style={{width: 400, height: 500}}
        source={{
          uri:
            'https://www.parttimely.com/wp-content/uploads/2018/10/sad-girl-wallpaper-500x293.jpg',
        }}
      />
    </View>
  );
};
export default DrawerHomePage;
