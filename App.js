// import * as React from 'react';
// import {I18nManager, Text, View, StyleSheet} from 'react-native';
// import I18n from './src/i18n/locales';

// import {Picker, Icon} from 'native-base';
// import {DropdownLanguage} from './src/DropdownLanguage';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       languageSelected: 'en',
//     };
//   }
//   onChangeLanguage(languageSelected) {
//     this.setState({
//       languageSelected,
//     });
//     //this.props.setLanguageUser(value)
//     I18n.locale = languageSelected;
//     // _storeData(USER_LANGUAGE,value);
//   }
//   render() {
//     console.log('props of App', this.props);
//     const {languageSelected} = this.state;
//     return (
//       <View style={styles.container}>
//         <DropdownLanguage
//           language={languageSelected}
//           onChangeLanguage={this.onChangeLanguage.bind(this)}
//         />
//         <Text style={styles.title}>{I18n.t('hompage.welcome')}</Text>
//         <Text style={styles.paragraph}>{I18n.t('hompage.description')}</Text>
//         <Text style={styles.paragraph}>{I18n.t('hompage.usman')}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   title: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   dropdownLanguage: {
//     width: 110,
//     height: 50,
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     flexDirection: 'row',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
import React from 'react';
import Navigation from './src/navigation';
const App = () => {
  return <Navigation />;
};

export default App;
