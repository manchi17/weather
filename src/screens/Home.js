import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
class Home extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Text>Home</Text>
        <Button title="DISPLAY" onPress={() => navigate('Country')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
  },
});

export default Home;
