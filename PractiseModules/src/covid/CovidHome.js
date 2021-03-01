/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {
  Container,
  CardItem,
  Item,
  Input,
  Icon,
  Content,
  View,
  Text,
  Card,
  Body,
} from 'native-base';
import {getCovidCount} from './Redux/actions/worldCountActions';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
const numColumns = 2;
const size = Dimensions.get('window').width / numColumns;

const CovidHome = (props) => {
  const country = [
    {
      backgroundColor: 'rgb(230, 255, 255)',
      name: 'NewConfirmed',
      count: 200,
      color: 'rgb(89, 0, 179)',
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 15,
    },
    {
      backgroundColor: 'rgb(255, 230, 247)',
      name: 'TotalConfirmed',
      count: '200',
      color: 'rgb(230, 0, 172)',
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 15,
    },
    {
      backgroundColor: 'rgb(198, 236, 217)',
      name: 'TotalDeaths',
      count: '200',
      color: 'rgb(0, 179, 134)',
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 15,
    },
    {
      backgroundColor: 'rgb(255, 245, 230)',
      name: 'TotalRecovered',
      count: '200',
      color: 'rgb(255, 128, 0)',
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 15,
    },
  ];

  useEffect(() => {
    // Update the document title using the browser API
    if (!props.counts.counts) {
      props.getCovidCount();
    }
  }, [props]);
  const Global = props.counts.counts;
  // const Countries = props.counts.counts.Countries;
  console.log(
    'counts',
    props.counts.counts ? props.counts.counts.Countries : 'no data',
  );
  return (
    <View style={styles.mainContainer}>
      <Item regular style={styles.searchInput}>
        <Icon name="ios-search" />
        <Input placeholder="Search Country" />
      </Item>
      <View>
        <Text style={styles.worldText}>World Update</Text>
        <View>
          {Global &&
            country.map((item) => {
              return (
                <View
                  style={{
                    marginBottom: 15,
                  }}>
                  <Card
                    style={{
                      maxWidth: 150,
                      borderRadius: 15,
                    }}>
                    <CardItem
                      style={{
                        backgroundColor: item.backgroundColor,
                        borderRadius: item.borderRadius,
                      }}>
                      <Body>
                        <Text
                          style={{
                            color: item.color,
                            fontWeight: item.fontWeight,
                            fontSize: item.fontSize,
                          }}>
                          {item.name === 'NewConfirmed'
                            ? Global.Global.NewConfirmed
                            : item.name === 'TotalConfirmed'
                            ? Global.Global.TotalConfirmed
                            : item.name === 'TotalDeaths'
                            ? Global.Global.TotalDeaths
                            : item.name === 'TotalRecovered'
                            ? Global.Global.TotalRecovered
                            : '143'}
                        </Text>
                        <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                          {item.name}
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                </View>
              );
            })}
        </View>
        <View>
          <Text style={styles.worldinfect}>Most Infected</Text>
          {props.counts.counts &&
            props.counts.counts.Countries.map((item) => {
              console.log('country', item);
              return (
                <ScrollView>
                  <View>
                    <Text style={{fontWeight: 'bold'}}>{item.Country}</Text>
                    <Card style={styles.mostInfected}>
                      <CardItem>
                        <CardItem
                          style={{display: 'flex', flexDirection: 'column'}}>
                          <Text style={styles.textNew}>
                            {item.NewConfirmed}
                          </Text>
                          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                            NewConfirmed
                          </Text>
                        </CardItem>
                      </CardItem>
                      <CardItem>
                        <CardItem
                          style={{display: 'flex', flexDirection: 'column'}}>
                          <Text style={styles.textTolcon}>
                            {item.TotalConfirmed}
                          </Text>
                          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                            Confirmed
                          </Text>
                        </CardItem>
                      </CardItem>
                      <CardItem>
                        <CardItem
                          style={{display: 'flex', flexDirection: 'column'}}>
                          <Text style={styles.textTolDet}>
                            {item.TotalDeaths}
                          </Text>
                          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                            Deaths
                          </Text>
                        </CardItem>
                      </CardItem>
                      <CardItem>
                        <CardItem
                          style={{display: 'flex', flexDirection: 'column'}}>
                          <Text style={styles.textTolrec}>
                            {item.TotalRecovered}
                          </Text>
                          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                            Recovered
                          </Text>
                        </CardItem>
                      </CardItem>
                    </Card>
                  </View>
                </ScrollView>
              );
            })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderRadius: 10,
    width: 300,
    marginBottom: 20,
  },
  mainContainer: {
    padding: 15,
  },
  worldText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  worldinfect: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    width: 200,
  },
  item: {
    flex: 1,
    margin: 3,
  },
  mostInfected: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ccdcff',
  },
  textNew: {
    color: 'rgb(89, 0, 179)',
    fontWeight: 'bold',
  },
  textTolcon: {
    color: 'rgb(230, 0, 172)',
    fontWeight: 'bold',
  },
  textTolDet: {
    color: 'rgb(0, 179, 134)',
    fontWeight: 'bold',
  },
  textTolrec: {
    color: 'rgb(255, 128, 0)',
    fontWeight: 'bold',
  },
  //   card: {
  //     width: '40%',g
  //   },
});

const mapStateToProps = (state) => ({counts: state.counts});

export default connect(mapStateToProps, {getCovidCount})(CovidHome);
