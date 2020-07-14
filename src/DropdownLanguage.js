import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import I18n from './i18n/locales';
import {Picker, Icon} from 'native-base';
const listLanguage = [
  {key: 'en', label: 'English'},
  {key: 'ur', label: 'Urdu'},
  {label: '🇳🇱', key: 'nl'},
  {label: '🇨🇳', key: 'zh'},
  {label: '🇰🇷', key: 'ko'},
];

export class DropdownLanguage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props of dropdown language', this.props);
    return (
      <View style={styles.dropdownLanguage}>
        <Text style={{width: 70}}>{I18n.t('translate.language')}: </Text>
        <Picker
          mode="dropdown"
          iosHeader={''}
          style={{width: undefined, height: 40}}
          selectedValue={this.props.language}
          onValueChange={this.props.onChangeLanguage.bind(this)}>
          {listLanguage.map((languageItem, i) => {
            return (
              <Picker.Item
                key={i}
                value={languageItem.key}
                label={languageItem.label}
              />
            );
          })}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dropdownLanguage: {
    width: 110,
    height: 50,
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
