import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DropdownLanguage} from '../DropdownLanguage';
import I18n from '../i18n/locales';
function HomeScreen({navigation}) {
  const [languageSelected, setLanguageSelected] = useState('en');

  const onChangeLanguage = languageSelected => {
    setLanguageSelected(languageSelected);
    //this.props.setLanguageUser(value)
    I18n.locale = languageSelected;
    // _storeData(USER_LANGUAGE,value);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <DropdownLanguage
        language={languageSelected}
        onChangeLanguage={onChangeLanguage}
      />
      <Text>Home Screen</Text>
      <Icon name="wifi" size={30} color={'#999'} />
      <Button
        title={I18n.t('translate.Details')}
        onPress={() => navigation.navigate('Detail')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('SignIn')}
      />
      <Button title="toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}
export default HomeScreen;
