/* eslint-disable react-native/no-inline-styles */
// import {Button} from 'native-base';
import React from 'react';
import {View, Button, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>Hello Lakshmi</Text>
        <Button
          title="Go to Profile"
          onPress={() =>
            navigation.navigate('Profile', {name: 'Profile Screen'})
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;
