/* eslint-disable react-native/no-inline-styles */
import {Card, CardItem, Body} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';

function Info(props) {
  const list = props.route.params.data;
  console.log('aa', list);
  console.log(JSON.stringify(list));
  return (
    <View>
      <Card>
        <CardItem>
          <Body>
            <Text>{JSON.stringify(list)}</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
}
export default Info;
