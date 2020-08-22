import React from 'react';
import {TextInput, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Input = (props) => (
  <TextInput
    placeholder={props.placeholder}
    secureTextEntry={props.secureTextEntry}
    keyboardType={props.keyboardType}
    multiline={props.multiline}
    value={props.value}
    onChangeText={(value) => props.onChangeText(value)}
    style={[
      {
        width: width * 0.85,
        height: height * 0.08,
        backgroundColor: '#f5f5f5',
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: height * 0.02,
        fontSize: 18,
      },
      props.style,
    ]}
  />
);

export {Input};
