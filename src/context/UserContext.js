import React, {createContext, useState, useEffect} from 'react';
import api from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export default function UserState(props) {
  const [isLoading, _setIsLoading] = useState(false);
  const [isLoadingTwo, _setIsLoadingTwo] = useState(false);
  const [isLoggedIn, _setIsLoggedIn] = useState(false);
  const [user, _setUser] = useState({});
  const [eventsList, setEventsList] = useState([]);

  const login = async payload => {
    console.log('file: UserContext.js:13 ~ login ~ payload', payload);
    try {
      _setIsLoading(true);
      const {data} = await api.post('login', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('file: UserContext.js:21 ~ login ~ data', data);
      _setIsLoggedIn(true);
      _setUser(data);
      AsyncStorage.setItem('token', data.data.token);
      AsyncStorage.setItem('userData', JSON.stringify(data.data.user));
    } catch (error) {
      _setIsLoading(false);
      console.log('file: UserContext.js:14 ~ login ~ error', error);
    } finally {
      _setIsLoading(false);
    }
  };

  const getEventList = async () => {
    try {
      _setIsLoadingTwo(true);
      const {data} = await api.post('events-listing');
      console.log('file: UserContext.js:40 ~ getEventList ~ data', data);
      setEventsList(data.data.events);
    } catch (error) {
      console.log(
        'file: UserContext.js:43 ~ getEventList ~ error',
        error.response,
      );
      _setIsLoadingTwo(false);
    } finally {
      _setIsLoadingTwo(false);
    }
  };

  const getUserInfo = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('file: UserContext.js:53 ~ getUserInfo ~ token', token);
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        _setUser(JSON.parse(userData));
        _setIsLoggedIn(true);
      }
    } catch (error) {
      _setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        isLoading,
        login,
        getEventList,
        eventsList,
        setEventsList,
        isLoadingTwo,
      }}>
      {props.children}
    </UserContext.Provider>
  );
}
