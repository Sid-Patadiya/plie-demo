import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import appColors from '../../utils/appColor';
import {styles} from './styles';

const CustomInput = ({
  heading = '',
  value = '',
  onChangeText = () => {},
  placeholder = '',
  rightIcon = '',
  rightIconStyle = {},
  containerStyle = {},
  onPressRightIcon = () => {},
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      {heading && <Text style={styles.headingText}>{heading}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.inputStyle}
          placeholderTextColor={appColors.placeholder}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onPressRightIcon}>
            <Image
              source={rightIcon}
              style={{...styles.rightIcon, ...rightIconStyle}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
