/* eslint-disable react-native/no-inline-styles */
import {Text, View, Card, CardItem, Body} from 'native-base';
import React, {useState} from 'react';
import {Image, FlatList} from 'react-native';
import axios from 'axios';

const TestWeather = (props) => {
  const data = props.route.params.city;
  const i = 0;
  const icon = data.current.weather_icons[i];
  console.log('1111', data);
  return (
    <View>
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <Card>
        <CardItem>
          <Body>
            <View
              style={{
                display: 'flex',

                justifyContent: 'space-around',
              }}>
              <View>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Capital Name : </Text>{' '}
                  {data.location.name}
                </Text>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Temperature : </Text>{' '}
                  {data.current.temperature}
                </Text>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Wind_speed : </Text>{' '}
                  {data.current.wind_speed}
                </Text>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Precip :</Text>{' '}
                  {data.current.precip}
                </Text>
              </View>
              <View
                style={{
                  marginLeft: '70%',
                  marginTop: ' -15%',
                }}>
                <Image source={{uri: icon}} style={{height: 60, width: 60}} />
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    </View>
    // <FlatList
    //   data={data}
    //   keyExtractor={(item) => item.id}
    //   renderItem={({item}) => (
    //     <Card>
    //       <CardItem>
    //         <Body>
    //           <View>
    //             {props.name && props.city && (
    //               <View>
    //                 <Text>
    //                   Capital_Name:
    //                   {props.name === item.capital
    //                     ? props.city.location.name
    //                     : ''}
    //                 </Text>
    //                 <Text>
    //                   Temperature:
    //                   {props.name === item.capital
    //                     ? props.city.current.temperature
    //                     : ''}
    //                 </Text>
    //                 <Text>
    //                   Wind_Speed:
    //                   {props.name === item.capital
    //                     ? props.city.current.wind_speed
    //                     : ''}
    //                 </Text>
    //                 <Text>
    //                   Precip:
    //                   {props.name === item.capital
    //                     ? props.city.current.precip
    //                     : ''}
    //                 </Text>

    //                 {/* <Image
    //                   style={{width: 100, height: 60}}
    //                   source={{
    //                     uri:
    //                       name === item.capital
    //                         ? city.current.weather_icons[0]
    //                         : '',
    //                   }}
    //                 /> */}
    //               </View>
    //             )}
    //           </View>
    //         </Body>
    //       </CardItem>
    //     </Card>
    //   )}
    // />
  );
};

export default TestWeather;
