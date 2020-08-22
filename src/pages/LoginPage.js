import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as RootNavigation from '../RootNavigation';

import {Input, Button} from '../components';
import {connect} from 'react-redux';
import {login} from '../redux/actions';
import {LOCAL_AUTH_ID, USER} from '../redux/actions/types';
import AsyncStorage from '@react-native-community/async-storage';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(LOCAL_AUTH_ID).then((token) => {
      if (token) {
        console.log('Gelen Token Data', token);
        USER.token = token;
        RootNavigation.replace('Home');
      } else {
        setLoading(false);
      }
    });
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            paddingTop: 30,
            flex: 1,
          }}>
          <Image
            style={styles.logoimg}
            source={require('../img/insta-text.png')}
          />
          <Input
            placeholder="Telefon numarası, e-posta adresi veya kullanıcı adı"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />

          <Input
            placeholder="Şifre"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />

          <Button
            text={'Giriş Yap'}
            loading={props.loading}
            onPress={() => {
              const params = {
                email: email.toLowerCase(),
                password,
              };
              props.login(params);
            }}
          />

          <TouchableOpacity style={{marginTop: "5%"}}>
            <Text style={{color: 'black'}}>Giriş detaylarını unuttun mu?</Text>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Giriş yapmak için yardım al.
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              borderTopWidth: 1,
              marginTop: '10%',
              
            }}>
            <TouchableOpacity>
              <Image
                style={styles.ilmg}
                source={require('../img/facebook-icon.png')}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              borderTopWidth: 1,
              marginTop: '10%',
              
            }}>
            <TouchableOpacity>
              <Text style={styles.link}>Hesabın yok mu? Kaydol.</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const mapStateToProps = ({authResponse}) => {
  const {loading, user} = authResponse;
  return {loading, user};
};

export default connect(mapStateToProps, {login})(Login);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
  },
  logoimg: {
    width: '80%',
    height: '30%',
    resizeMode: 'contain',
  },
  ilmg: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  link: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'black',
    marginTop: '5%',
  },
});
