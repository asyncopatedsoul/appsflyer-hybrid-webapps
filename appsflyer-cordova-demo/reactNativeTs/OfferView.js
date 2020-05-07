/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  Button,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import appsFlyer from 'react-native-appsflyer';

import {Actions} from 'react-native-router-flux';

const image = require('./offer.png');

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
      width: '100%', height: '100%'
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%', height: '100%'
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    fullViewTouchable: {
      width: '100%',
      height: '100%'
    }
  });

const Home: () => React$Node = () => {

  _onPressButton = () => {
    alert('Going home');

    const eventName = 'af_purchase';
    const eventValues = {
      af_content_id: 'id123',
      af_currency: 'USD',
      af_revenue: '10',
    };

    appsFlyer.trackEvent(
      eventName,
      eventValues,
      (res) => {
        alert('trackEvent success af_purchase');
        console.log(res);
        Actions.home();
      },
      (err) => {
        alert('trackEvent error');   
        console.error(err);
        Actions.home();
      }
    );
  }

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.fullViewTouchable}>
          </View>
        </TouchableOpacity>
        </ImageBackground>
    </View>
    </>
  );
};

export default Home;
