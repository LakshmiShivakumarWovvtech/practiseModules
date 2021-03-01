import React from 'react';

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Icon,
} from 'native-base';

const ProfileScreen = () => {
  return (
    <Container>
      <Content>
        <Card style={{marginHorizontal: 30}}>
          <CardItem header bordered>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>Profile</Text>
          </CardItem>
          <Body>
            <CardItem>
              <Text>Lakshmi Shivakumar</Text>
            </CardItem>
            <Text>GrandFatherName: Ramaiah</Text>
            <Text>MotherName:Pankaja</Text>
            <Text>FatherName: Shivakumar</Text>
            <Text>Sister's : Geethanjali and Suchitha</Text>
          </Body>
        </Card>
      </Content>
    </Container>
  );
};

export default ProfileScreen;
