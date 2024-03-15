import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import appColors from '../../utils/appColor';
import {Images} from '../../utils/images';

const EventList = ({item, onPressLike = () => {}}, index) => {
  return (
    <View style={styles.container} key={item.event_id}>
      <Image
        source={{
          uri: item?.event_profile_img,
        }}
        style={styles.eventImage}
      />
      <View style={{flex: 1}}>
        <Text style={styles.eventName}>{item?.event_name}</Text>
        <View style={styles.row}>
          <Text style={styles.eventDate}>
            {item?.readable_to_date}-{item?.readable_from_date}
          </Text>
          <Text style={styles.eventAddress}>
            {item?.city},{item?.country}
          </Text>
        </View>
        <Text style={styles.eventAddress}>
          {item?.event_price_to}-{item?.event_price_from}
        </Text>
        <View style={styles.row}>
          <View style={styles.danceStylesContainer}>
            {item?.danceStyles &&
              item?.danceStyles.map((i, idx) => {
                return (
                  <View key={idx} style={styles.danceStyles}>
                    <Text>{i?.ds_name}</Text>
                  </View>
                );
              })}
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <Image source={Images.share} style={styles.iconStyles} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressLike(item)}>
              <Image
                source={item?.liked ? Images.heart_fill : Images.heart}
                style={styles.iconStyles}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.rightIcon}>
        <Image source={Images.arrow} style={styles.iconStyles} />
      </TouchableOpacity>
    </View>
  );
};

export default EventList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: appColors.White,
    marginHorizontal: 15,
    marginTop: 20,
    padding: 10,
    gap: 10,
    borderRadius: 10,
  },
  eventImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  eventName: {
    fontWeight: '400',
    color: appColors.black,
    marginTop: 5,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  eventDate: {
    fontWeight: '500',
    color: appColors.green2,
    fontSize: 16,
  },
  eventAddress: {
    fontWeight: '400',
    color: appColors.placeholder,
    fontSize: 14,
  },
  danceStylesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    flex: 1,
    gap: 3,
  },
  danceStyles: {
    backgroundColor: appColors.White2,
    borderRadius: 15,
    padding: 5,
  },
  iconStyles: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  rightIcon: {
    position: 'absolute',
    right: 0,
    top: 5,
  },
});
