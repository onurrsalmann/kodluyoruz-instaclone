import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILD, BASE_URL} from './types';

import {Alert} from 'react-native';

import {post} from './api';

export const login = (params) => {
  return (dispatch) => {
    if (params.email != '' && params.password != '') {
      if (validateEmail(params.email)) {
        post(
          BASE_URL.concat('/login'),
          params,
          dispatch,
          LOGIN_START,
          LOGIN_SUCCESS,
          LOGIN_FAILD,
        );
      } else {
        Alert.alert('UYARI', 'Lütfen geçerli bir email yazınız!');
      }
    } else {
      Alert.alert('UYARI', 'Lütfen bütün alanları doldurunuz!');
    }
  };
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
