import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import appColors from '../../utils/appColor';

const CustomButton = ({
  onPress = () => {},
  title = '',
  buttonStyle,
  loaderColor = appColors.White,
  disabled = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={disabled ? () => {} : onPress}
      activeOpacity={disabled ? 1 : 0.8}
      style={{...styles.container, ...buttonStyle}}>
      {loading ? (
        <ActivityIndicator size="large" color={loaderColor} />
      ) : (
        <Text style={styles.titleText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.green,
    height: 50,
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
    color: appColors.White,
    fontWeight: '500',
  },
});
