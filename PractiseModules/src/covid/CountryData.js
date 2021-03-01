import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Card, CardItem, Icon, Item, Input} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const CountryData = (data) => {
  console.log('data', data);
  return (
    <View>
      <View>
        <Text style={styles.worldinfect}>Most Infected</Text>
        <SafeAreaView>
          <ScrollView>
            {data &&
              data.data.map((item) => {
                // console.log('country', item);
                return (
                  <View>
                    <Text style={{fontWeight: 'bold'}}>{item.Country}</Text>

                    <View style={styles.linearGradient}>
                      <View>
                        <View
                          style={{display: 'flex', flexDirection: 'column'}}>
                          <Text style={styles.textNew}>
                            {item.NewConfirmed}
                          </Text>
                          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                            NewConfirmed
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View
                          style={{display: 'flex', flexDirection: 'column'}}>
                          <Text style={styles.textTolcon}>
                            {item.TotalConfirmed}
                          </Text>
                          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                            TotalConfirmed
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View
                          style={{display: 'flex', flexDirection: 'column'}}>
                          <Text style={styles.textTolDet}>
                            {item.TotalDeaths}
                          </Text>
                          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                            TotalDeaths
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View
                          style={{display: 'flex', flexDirection: 'column'}}>
                          <Text style={styles.textTolrec}>
                            {item.TotalRecovered}
                          </Text>
                          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                            TotalRecovered
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
  },
  linearGradient: {
    alignItems: 'center',

    borderRadius: 20,
    // borderTopRightRadius: 25,
    height: 70,
    // width: 400,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#e0ebeb',
  },
  middle: {
    flex: 0.3,
    backgroundColor: 'beige',
    borderWidth: 5,
  },
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
    marginBottom: 20,
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
  //   mostInfected: {
  //     display: 'flex',
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //   },
  //   linearGradient: {
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     borderRadius: 5,
  //     height: 100,
  //     width: 150,
  //   },
  textNew: {
    color: '#8000ff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textTolcon: {
    color: '#e6005c',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textTolDet: {
    color: '#00cc99',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textTolrec: {
    color: '#ff6600',
    fontWeight: 'bold',
    fontSize: 16,
  },
  worldCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
export default CountryData;
