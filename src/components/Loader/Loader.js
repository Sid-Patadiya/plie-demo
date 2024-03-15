import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import appColors from '../../utils/appColor';

const Loader = ({isVisible}) => {
  return (
    isVisible && (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} color={appColors.green} />
      </View>
    )
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.transparent,
  },
});
