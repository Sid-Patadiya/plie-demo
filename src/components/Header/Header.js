import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appColors from '../../utils/appColor';
import useAppState from '../../context/AppContext';

const Header = ({}) => {
  const {
    User: {user},
  } = useAppState();
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Hello {user.usr_fname}</Text>
      <Text style={styles.headingText}>Are you ready to dance?</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  nameText: {
    fontSize: 26,
    fontWeight: '600',
    color: appColors.black,
  },
  headingText: {
    fontSize: 16,
    color: appColors.placeholder,
    fontWeight: '400',
    marginTop: 5,
  },
});
