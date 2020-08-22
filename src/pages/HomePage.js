import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {getList} from '..//redux/actions';

const Home = (props) => {
  useEffect(() => {
    props.getList();
  }, []);

  const renderItem = ({item}) => {
    const source = item.image.uri ? item.image : {uri: item.image};
    return (
      <View
        style={{
          height: 500,
          margin: 10,
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        
          <Image
            defaultSource={require('../img/dummy.png')}
            source={source}
            style={{height: 400, width: "95%"}}
            resizeMode="contain"
          />
          <View style={{padding: 10}}>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Status: {item.status}</Text>
            <Text style={styles.text}>Species: {item.species}</Text>
          </View>

        
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
        <Image
            style={{width: '100%',
            height: '10%',
            resizeMode: 'contain',}}
            source={require('../img/insta-text.png')}
          />
      {props.loadingCharacter ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          style={{flex: 1}}
          data={props.characters}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 20,
                  height: 300,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 10, marginBottom: 30}}>
                  Herhangi bir data bulunamadı.
                </Text>
              </View>
            );
          }}
          initialNumToRender={2}
        />
      )}
    </View>
  );
};

const styles = {
  text: {padding: 3},
};

const mapStateToProps = ({charactersResponse}) => {
  const {loadingCharacter, characters} = charactersResponse;
  return {loadingCharacter, characters};
};

export default connect(mapStateToProps, {getList})(Home);
