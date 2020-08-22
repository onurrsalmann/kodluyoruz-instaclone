import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');


const Button = (props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={props.onPress}
    style={[{
      backgroundColor: '#4495cb',
      width: width * 0.85,
      height: height * 0.08,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
    }, props.style]}>
    {props.loading ?
      <ActivityIndicator size='small' color='white' /> :
      <Text style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
      }}>{props.text}</Text>
    }
  </TouchableOpacity>
);

export { Button };