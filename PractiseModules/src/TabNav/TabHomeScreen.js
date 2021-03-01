/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';

const TabHomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to Notofocation"
        onPress={() => navigation.navigate('Notification')}
      />
    </View>
  );
};
export default TabHomeScreen;
