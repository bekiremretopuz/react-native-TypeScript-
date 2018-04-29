import * as React from 'react';
import { AppRegistry, TouchableOpacity,Image, ScrollView, Text, Platform, View, Button,StyleSheet} from 'react-native';

export default class main extends React.Component {  
    private _index : number = 1;
    public publicFu(){
        console.warn("index : ",this._index);
    }
}
