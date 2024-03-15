import {Dimensions, StyleSheet} from 'react-native';
import appColors from '../../utils/appColor';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.White,
  },
  imageContainer: {
    height: height / 3,
    width: width,
    resizeMode: 'cover',
  },
  forgotText: {
    fontWeight: '400',
    color: appColors.placeholder,
    textAlign: 'right',
    marginTop: 5,
  },
  buttonStyle: {
    alignSelf: 'flex-end',
    height: 40,
    paddingHorizontal: 30,
    marginTop: '10%',
  },
  signUpText: value => ({
    fontWeight: '400',
    color: appColors.black,
    textAlign: 'right',
    marginTop: 15,
    fontSize: 14,
    textDecorationLine: value ? 'underline' : 'none',
  }),
  signInTextContainer: {
    marginTop: '15%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInWithText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: appColors.black,
    paddingHorizontal: 10,
  },
  borderView: {
    height: 1,
    flex: 1,
    backgroundColor: appColors.black,
    top: 2,
  },
  authIcon: {
    height: 60,
    width: 60,
  },
  authIconContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  enterGuestText: {
    fontWeight: '400',
    color: appColors.placeholder,
    textAlign: 'right',
    marginVertical: '10%',
  },
});
