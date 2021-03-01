import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import CovidHome from './CovidHome';
import {Card, CardItem, Icon, Item, Input} from 'native-base';
import {linear} from 'react-native/Libraries/Animated/src/Easing';
import LinearGradient from 'react-native-linear-gradient';
import {getCovidCount} from './Redux/actions/worldCountActions';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import CountryData from './CountryData';

const CardCovid = (props) => {
  console.log('comonent');
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
    props.counts.counts ? props.counts.counts.Global : 'no data',
  );

  const [search, setSearch] = useState({data: ''});

  const handleChange = (event) => {
    if (event) {
      searchData(event);
    } else {
      setSearch('');
    }
  };

  let allCountry = [];

  const searchData = (event) => {
    console.log('event', event);
    const data = props.counts.counts.Countries;
    //console.log("CC",perms)

    for (let i = 0; i < data.length; i++) {
      if (data[i].Country.includes(event)) {
        allCountry.push(data[i]);
        // console.log('CC', JSON.stringify(allCountry));
      }
    }
    setSearch({...search, data: allCountry});
    // console.log('CCcc', JSON.stringify(allCountry.length));
    console.log('searDara', search);
  };
  console.log('outside fun', search);
  return (
    <View style={styles.mainContainer}>
      <Item regular style={styles.searchInput}>
        <Icon name="ios-search" />
        <Input
          placeholder="Search Country"
          onChangeText={handleChange}
          value={search}
        />
      </Item>
      {search.data ? (
        <View>
          <CountryData data={search.data} />
        </View>
      ) : (
        <View>
          <Text style={styles.worldText}>World Update</Text>

          <View>
            <View style={styles.worldCard}>
              <LinearGradient
                colors={['#ccdcff', '#e6eeff']}
                style={styles.linearGradient}>
                <Text style={styles.textNew}>
                  {props.counts.counts
                    ? props.counts.counts.Global.NewConfirmed
                    : 'no data'}
                </Text>
                <Text>NewConfirmed</Text>
              </LinearGradient>

              <LinearGradient
                colors={['#ffcce6', '#ffe6f3']}
                style={styles.linearGradient}>
                <Text style={styles.textTolcon}>
                  {' '}
                  {props.counts.counts
                    ? props.counts.counts.Global.TotalConfirmed
                    : 'no data'}
                </Text>
                <Text>TotalConfirmed</Text>
              </LinearGradient>
            </View>
            <View style={styles.worldCard}>
              <LinearGradient
                colors={['#b4e4b4', '#c8eac8']}
                style={styles.linearGradient}>
                <Text style={styles.textTolDet}>
                  {props.counts.counts
                    ? props.counts.counts.Global.TotalDeaths
                    : 'no data'}
                </Text>
                <Text>TotalDeaths</Text>
              </LinearGradient>
              <LinearGradient
                colors={['#ffc299', '#ffd1b3']}
                style={styles.linearGradient}>
                <Text style={styles.textTolrec}>
                  {props.counts.counts
                    ? props.counts.counts.Global.TotalDeaths
                    : 'no data'}
                </Text>
                <Text>TotalRecovered</Text>
              </LinearGradient>
            </View>
          </View>

          <View>
            <CountryData
              data={
                search.data
                  ? search.data
                  : props.counts.counts
                  ? props.counts.counts.Countries
                  : []
              }
            />
          </View>
        </View>
      )}
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
  mostInfected: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'blue',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 100,
    width: 150,
  },
  textNew: {
    color: '#8000ff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textTolcon: {
    color: '#e6005c',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textTolDet: {
    color: '#00cc99',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textTolrec: {
    color: '#ff6600',
    fontWeight: 'bold',
    fontSize: 20,
  },
  worldCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  container: {
    flex: 1,
    // marginTop: statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
const mapStateToProps = (state) => ({counts: state.counts});

export default connect(mapStateToProps, {getCovidCount})(CardCovid);
