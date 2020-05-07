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
} from 'react-native';

import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import Home from './Home';
import DeeplinkView from './DeeplinkView';
import OfferView from './OfferView';

import appsFlyer from 'react-native-appsflyer';

var onAppOpenAttributionCanceller = appsFlyer.onAppOpenAttribution((res) => {
  console.log(res);
  alert('direct deeplink');
  alert(res);
});

var onInstallConversionDataCanceller = appsFlyer.onInstallConversionData(
  (res) => {
    if (JSON.parse(res.data.is_first_launch) == true) {
      if (res.data.af_status === 'Non-organic') {
        var media_source = res.data.media_source;
        var campaign = res.data.campaign;
        alert('This is first launch and a Non-Organic install. Media source: ' + media_source + ' Campaign: ' + campaign);
      
        if (res.data.route) {
          Actions.deeplink(res.data);
        }
      } else if (res.data.af_status === 'Organic') {
        alert('This is first launch and a Organic Install');
      }
    } else {
      alert('This is not first launch');
    }
  }
);

appsFlyer.initSdk(
  {
    devKey: '4eRPHyjRcpPdDkeH7ieoxF',
    isDebug: true,
    appId: 'id1429328712',
  },
  (result) => {
    alert('init AppsFlyer SDK success');
    console.log(result);
  },
  (error) => {
    alert('init AppsFlyer SDK error');
    console.error(error);
  }
);

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <Router>
      <Modal
        headerMode="none"
        hideNavBar={true}>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" 
            headerMode="none"
            hideNavBar={true}/>
          <Scene key="deeplink" component={DeeplinkView} title="Deeplink" 
            headerMode="none"
            hideNavBar={true}/>
          <Scene key="offer" component={OfferView} title="Offer" 
            headerMode="none"
            hideNavBar={true}/>
        </Stack>  
      </Modal>
    </Router>
  );
};

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
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
