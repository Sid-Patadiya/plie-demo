/* eslint-disable react-hooks/exhaustive-deps */
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../utils/images';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {styles} from './styles';
import useAppState from '../../context/AppContext';

const SocialAuthImageView = ({icon}) => {
  return (
    <TouchableOpacity>
      <Image source={icon} style={styles.authIcon} />
    </TouchableOpacity>
  );
};

const Login = ({navigation}) => {
  const {
    User: {login, isLoggedIn, isLoading},
  } = useAppState();

  const [loginData, setLoginData] = useState({
    email: 'testpracticaluser001@mailinator.com',
    password: 'Test@123',
  });

  const onSubmit = async () => {
    if (loginData.email === '' || loginData.password === '') {
      Alert.alert('Please fill the details!!');
    }
    var formData = new FormData();

    formData.append('email', loginData.email);
    formData.append('password', loginData.password);

    try {
      const data = await login(formData);
    } catch (error) {
      console.log('error?.response?.data', error?.response?.data);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigation.replace('TabNavigator');
    }
  }, [isLoggedIn]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={Images.Login_logo} style={styles.imageContainer} />

        <View style={{marginHorizontal: 40}}>
          <CustomInput
            heading={'Email'}
            placeholder={'email@email.com'}
            value={loginData.email}
            onChangeText={value => setLoginData({...loginData, email: value})}
          />
          <CustomInput
            heading={'Password'}
            placeholder={'Password'}
            value={loginData.password}
            onChangeText={value =>
              setLoginData({...loginData, password: value})
            }
            rightIcon={Images.Eye}
          />

          <Text style={styles.forgotText}>{'Forgot Password?'}</Text>

          <CustomButton
            title="Sign In"
            buttonStyle={styles.buttonStyle}
            onPress={onSubmit}
            disabled={isLoading}
            loading={isLoading}
          />

          <Text style={styles.signUpText(false)}>
            {'Not a member? '}
            <Text style={styles.signUpText(true)}>{'Sign Up Here'}</Text>
          </Text>

          <View style={styles.signInTextContainer}>
            <View style={styles.borderView} />
            <Text style={styles.signInWithText}>{'or Sign In with:'}</Text>
            <View style={styles.borderView} />
          </View>

          <View style={styles.authIconContainer}>
            <SocialAuthImageView icon={Images.google} />
            <SocialAuthImageView icon={Images.apple} />
            <SocialAuthImageView icon={Images.facebook} />
          </View>

          <Text style={styles.enterGuestText}>{'Enter as Guest'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
