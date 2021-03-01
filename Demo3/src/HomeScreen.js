/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import {
  Container,
  Content,
  Item,
  Input,
  Text,
  Button,
  CardItem,
  Card,
  View,
  Body,
} from 'native-base';

import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [search, setSearch] = useState();
  const [list, setList] = useState({data: null});
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({search: null});
  const [page, setPage] = useState(0);

  const [shouldFetch, setShouldFetch] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getData();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [getData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMore = useCallback(() => setShouldFetch(true), []);
  useEffect(() => {
    if (!shouldFetch) {
      return;
    }
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
        );
        setShouldFetch(false);
        setList({...list, data: response.data.hits});
        console.log('bb', list.data, page);
        setPage(page + 1);
        setLoading(false);
      } catch (error) {}
    };
    getData();
  }, [page, list, shouldFetch, fetchMore, value.search]);

  const handleChange = (event) => {
    console.log('eent', event);
    if (event) {
      setValue({search: event});
    } else {
      setSearch(null);
      setValue(false);
    }
  };
  console.log('aa', list.data);

  const searchData = () => {
    console.log(',,,,,,,,,,,,,,,', list.data.length);
    let i;
    for (i = 0; i < list.data[i].length; i++) {
      console.log(',,,,,,,,,,,,,,,', list.data.author);
      if (list.data[i].title) {
        if (
          list.data[i].author.toLowerCase().includes(value.search) ||
          list.data[i].title.toLowerCase().includes(value.search) ||
          list.data[i].url
            ? list.data[i].url.toLowerCase().includes(value.search)
            : false
        ) {
          let arr = [];
          arr.push(list.datas);
          console.log('qqq', arr);
          setSearch(arr);
        }
      }
    }
  };
  // const searchfilter = () => {
  //   setShouldFetch({EndReached: false});
  //   let searchData = list.data.filter((ele) => {
  //     return (
  //       ele.author.toLowerCase().includes(value.search.toLowerCase()) ||
  //       ele.title.toLowerCase().includes(value.search.toLowerCase())
  //       //  ele.url.toLowerCase().includes(text.toLowerCase())
  //     );
  //   });
  //   setSearch({data: searchData});
  //   if (!value.search) {
  //     alert('Data Not Found');
  //   }
  // };

  const filterByTitle = () => {
    const data = list.data;
    console.log('ee', data);
    data.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
    );
    // setList({data: list});
    console.log('ascending', data);
    data.map((records) => setList({data: data}));
    // console.log('ascending', data);
  };
  const filterByCreatedDate = () => {
    const data = list.data;
    console.log('ee', data);
    data.sort((a, b) =>
      a.created_at.toLowerCase() > b.created_at.toLowerCase() ? 1 : -1,
    );
    // setList({data: list});
    console.log('ascending', data);
    data.map((records) => setList({data: data}));
    // console.log('ascending', data);
  };

  return (
    <Container>
      <Item
        regular
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          marginLeft: 20,
          marginVertical: 15,
        }}>
        <Input
          placeholder="search by author or title or url"
          onChangeText={handleChange}
        />
      </Item>
      <Button
        block
        style={{marginBottom: 20, marginHorizontal: 20}}
        onPress={() => searchData()}
        disabled={value ? false : true}>
        <Text>Submit</Text>
      </Button>
      <Button
        block
        style={{marginBottom: 20, marginHorizontal: 20}}
        onPress={() => filterByCreatedDate()}>
        <Text>Search By Created_at</Text>
      </Button>
      <Button
        block
        style={{marginBottom: 20, marginHorizontal: 20}}
        onPress={() => filterByTitle()}>
        <Text>Search By Title</Text>
      </Button>

      <FlatList
        data={search ? search : list.data}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.9}
        onEndReached={fetchMore}
        extraData={list}
        renderItem={({item}) => (
          <Card style={{marginBottom: 30}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('info', {data: item});
                console.log('item is', item);
              }}>
              <CardItem header bordered>
                <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
              </CardItem>
              <CardItem padder>
                <Body>
                  <View style={{display: 'flex'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}>
                      URL :
                    </Text>
                    <Text>{item.url}</Text>
                  </View>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}>
                      Created_at :
                    </Text>
                    <Text>{item.created_at}</Text>
                  </View>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                      }}>
                      Author :
                    </Text>

                    <Text>{item.author}</Text>
                  </View>
                </Body>
              </CardItem>
            </TouchableOpacity>
          </Card>
        )}
      />
    </Container>
  );
};
export default HomeScreen;
