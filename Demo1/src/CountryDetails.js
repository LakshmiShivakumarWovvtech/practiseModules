/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';

import {SvgUri} from 'react-native-svg';
const CountryDetails = (props) => {
  const [city, setCity] = useState();
  const [name, setName] = useState(null);

  const data = props.route.params.result;

  const handleWeater = async (item) => {
    console.log('item is', item);
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=4af3a27d0fa68425aef7d2bd748ddf21&QUERY=${item}`,
      );
      setCity(response.data);

      setName(item);
      props.navigation.navigate('captital weather', {
        city: response.data,
      });
      console.log('mm', response.data);
    } catch (error) {
      console.log('aa');
    }
  };
  console.log('name is', city ? city.current.weather_icons[0] : ' ');
  return (
    <Container>
      <Content>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Card>
              <CardItem>
                <Body>
                  <View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'green',
                          fontSize: 17,
                        }}>
                        Name :-
                      </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'green',
                          fontSize: 17,
                        }}>
                        capital :-
                      </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {item.capital}
                      </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'green',
                          fontSize: 17,
                        }}>
                        population :-
                      </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {item.population}
                      </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'green',
                          fontSize: 17,
                        }}>
                        latlng :-
                      </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {item.latlng}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginHorizontal: 10,
                        marginVertical: 30,
                      }}>
                      <SvgUri width="100" height="80" uri={item.flag} />
                      <Button
                        style={{
                          marginLeft: 80,
                          marginTop: 10,
                        }}
                        onPress={() => handleWeater(item.capital)}>
                        <Text>Capital Weather</Text>
                      </Button>
                    </View>
                  </View>

                  {/* <View>
                    {name && city && (
                      <View>
                        <Text>
                          Capital_Name:
                          {name === item.capital ? city.location.name : ''}
                        </Text>
                        <Text>
                          Temperature:
                          {name === item.capital
                            ? city.current.temperature
                            : ''}
                        </Text>
                        <Text>
                          Wind_Speed:
                          {name === item.capital ? city.current.wind_speed : ''}
                        </Text>
                        <Text>
                          Precip:
                          {name === item.capital ? city.current.precip : ''}
                        </Text>

                        <Image
                          style={{width: 100, height: 60}}
                          source={{
                            uri:
                              name === item.capital
                                ? city.current.weather_icons[0]
                                : '',
                          }}
                        />
                      </View>
                    )}
                  </View> */}
                </Body>
              </CardItem>
            </Card>
          )}
        />
      </Content>
    </Container>
  );

  //   }
};
export default CountryDetails;
