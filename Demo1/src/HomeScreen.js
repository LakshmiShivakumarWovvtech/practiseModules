/* eslint-disable react-native/no-inline-styles */
import {Container, Content, Button, Text, Item, Input} from 'native-base';
import React, {useState} from 'react';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
  console.log('resi', result);

  const [result, setResult] = useState([]);
  const [countryName, setCountryName] = useState();

  const submitCountryData = async () => {
    try {
      console.log('result', countryName);
      const response = await axios.get(
        ` https://restcountries.eu/rest/v2/name/${countryName}`,
      );
      console.log('result', response.data);
      setResult(response.data);
      navigation.navigate('CountryDetails', {
        result: response.data,
      });
      console.log('result', response.data);
    } catch (error) {
      console.log('i');
    }
  };

  const handleChange = (event) => {
    setCountryName(event);
  };
  return (
    <Container style={{alignItems: 'center', justifyContent: 'center'}}>
      <Content>
        <Item rounded style={{marginTop: 30, borderColor: 'black'}}>
          <Input
            value={countryName}
            placeholder="Enter Country Name"
            onChangeText={handleChange}
          />
        </Item>
        <Button
          rounded
          onPress={() => {
            submitCountryData();
          }}
          style={{
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}
          disabled={!countryName ? true : false}>
          <Text>Submit</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default HomeScreen;
