/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Container, Header, Content, List, ListItem} from 'native-base';

const DrawerNotification = () => {
  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>A</Text>
          </ListItem>
          <ListItem>
            <Text>New Notification-College</Text>
          </ListItem>
          <ListItem>
            <Text>New Notification-MasterDegree</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>B</Text>
          </ListItem>
          <ListItem>
            <Text>New Notification-Office</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};
export default DrawerNotification;
