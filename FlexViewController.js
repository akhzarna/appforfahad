/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class FlexViewController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

_onPressButton = () =>{
  //alert('Params are = ', this.props.navigation.state.params.others);
  this.props.navigation.pop();
}

_onPressNewscreen = () =>{
  this.props.navigation.navigate('Newcontroller',{
  // rollnumber:1,
  // others:'Akhzar Nazir',
  // data:'My Data',
  // compare:1,
});
}


componentDidMount(){
  // alert('I am testing');
}

render() {
  return (

    <View style={styles.sectionContainer}>

      <View style={styles.subView1}>

        <View style={styles.subView3}>

          <Image source={require('./Poor.jpg')} />

        </View>

        <View style={styles.subView4}>

            <Text style={styles.textinput1}>
              Bilal Hashmi
            </Text>

            <Text style={styles.textinput2}>
              Bilal Hashmi
            </Text>


        </View>

      </View>

      <View style={styles.subView2}>

      </View>

    </View>

    );
  }
}

const styles = StyleSheet.create({

  sectionContainer: {
    flex:1,
    flexDirection:"column",
    width:"100%"
  },

  subView1: {
    flex:1,
    backgroundColor:"white",
    flexDirection:"row",
  },

  subView2: {
    flex:3,
    backgroundColor:"black"
  },

  subView3: {
    flex:1,
    backgroundColor:"red"
  },

  subView4: {
    flex:3,
    backgroundColor:"white"
  },

  textinput1:{
    flex:1,
    height:40,
    fontSize:18,
    borderWidth:4,
    backgroundColor:"red"
  },

  textinput2:{
    flex:2,
    height:40,
    fontSize:12,
    borderWidth:4,
    backgroundColor:"green"
  },

  body:{
    flex:4,
    height:40,
    fontSize:12,
    borderWidth:4,
    backgroundColor:"green"
  },
});

// <Text style={styles.textinput1}>
// A Simple Text to test Flex
// </Text>
//
// <Text style={styles.textinput2}>
// A Simple Text to test Flex
// </Text>
