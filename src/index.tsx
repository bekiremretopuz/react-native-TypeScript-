import * as React from 'react';
import { AppRegistry, Image, ScrollView, Text } from 'react-native';

export default class EntryPoint extends React.Component {
  public render() {
    return (
      <ScrollView>
        <Image
          source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
          style={{width: 320, height: 180}}
        />
        <Text>
          On, iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </Text>
      </ScrollView>
    );
  }
}
AppRegistry.registerComponent(require('./../app.json').name, () => EntryPoint);