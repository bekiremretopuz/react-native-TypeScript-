import * as React from 'react';
import { AppRegistry, TouchableOpacity,Image, ScrollView, Text, Platform, View, Button,StyleSheet} from 'react-native';
import main from './main';

export default class EntryPoint extends React.Component {
  private _count:number=0;
  public Main:main = new main();

  constructor(props: any) {
    super(props);
    this.state = { _count : 0 }
    this.onPress = this.onPress.bind(this);
    this.Main.publicFu();
  }

  public onPress = () => {
    this.setState({
      _count: this.state._count+1,
    })
  }

  public render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress}
      >
        <Text> Touch Here </Text>
      </TouchableOpacity>
      <View style={[styles.countContainer]}>
        <Text style={[styles.countText]}>
           { this.state._count !== 0 ? this.state._count: null}
         </Text>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})
AppRegistry.registerComponent(require('./../app.json').name, () => EntryPoint);