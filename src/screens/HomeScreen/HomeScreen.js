/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import appColors from '../../utils/appColor';
import Header from '../../components/Header/Header';
import EventList from '../../components/EventList/EventList';
import useAppState from '../../context/AppContext';
import Loader from '../../components/Loader/Loader';

const HomeScreen = () => {
  const {
    User: {getEventList, isLoadingTwo, eventsList, setEventsList},
  } = useAppState();

  useEffect(() => {
    getEventList();
  }, []);

  const onPressLike = item => {
    let temp = eventsList;

    temp.map((i, index) => {
      if (i.event_date_id === item.event_date_id) {
        if (i.liked !== undefined) {
          if (i.liked) {
            i.liked = false;
          } else {
            i.liked = true;
          }
        } else {
          temp[index] = {...i, liked: true};
        }
      }
    });
    setEventsList([...temp]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <FlatList
          data={eventsList}
          renderItem={({item, index}) => {
            return (
              <EventList item={item} index={index} onPressLike={onPressLike} />
            );
          }}
        />
      </View>
      <Loader isVisible={isLoadingTwo} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.White,
    flex: 1,
  },
  mainContainer: {
    backgroundColor: appColors.White2,
    flex: 1,
  },
});
