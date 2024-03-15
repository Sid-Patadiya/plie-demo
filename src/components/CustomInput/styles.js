import {StyleSheet} from 'react-native';
import appColors from '../../utils/appColor';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColors.White,
    elevation: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 5,
  },
  rightIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  headingText: {
    fontSize: 16,
    fontWeight: '400',
    color: appColors.black,
    marginVertical: 10,
  },
  inputStyle: {
    fontSize: 14,
    flex: 1,
  },
});
