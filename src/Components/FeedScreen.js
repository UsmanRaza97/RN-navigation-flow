import React from 'react';
import I18n from '../i18n/locales';
import {View, Text} from 'react-native';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{I18n.t('translate.Feed Screen')}</Text>
    </View>
  );
}
export default Feed;
