import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import {
  AppRegistry
} from 'react-native';

import PrimaryScene from './src/components/PrimaryScene';
import ClientScene from './src/components/ClientScene';
import ContactScene from './src/components/ContactScene';
import BusinessScene from './src/components/BusinessScene';
import ServicesScene from './src/components/ServicesScene';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
				initialRoute={{ id: 'primary' }}
				renderScene={(route, navigator) => {
					switch (route.id) {
						case 'primary':
							return (<PrimaryScene navigator={navigator} />);

						case 'client':
							return (<ClientScene navigator={navigator} />);

						case 'contact':
							return (<ContactScene navigator={navigator} />);

						case 'business': 
							return (<BusinessScene navigator={navigator} />);

						case 'services':
							return (<ServicesScene navigator={navigator} />);

						default:
							return false;
					}
				}}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
