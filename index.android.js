// Import required libraries React and Component from 'react' namespaces
import React, {Component} from 'react'
// react-native specific objects from 'react-native'
import {AppRegistry, View, Text, StyleSheet, Button} from 'react-native'
// grab our exported component var DayItem = require('day-item')
import DayItem from './src/day-item'
var Moment = require('moment');

// var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
// 'Saturday']; 1) Create a react component
var Weekdays = React.createClass({
  // Set of instructions that define our component and how it interracts with the
  // user It's like View in Android Every component must implement a render method
  /* Assign a new function to a render property
  same as Weekdays.render = new function(){...} */
  render: function () {
    // The purpose of the render method is to return how the component is going to
    // look like
    /* JSX is a language that compiles it's XML nature into JavaScript
    Example:
      IN:
        <div>Hello {this.props.name}</div>
      OUT:
        React.createElement("div", null, "Hello ", undefined.props.name);
      Use https://babeljs.io/repl/ for live preview and converting JSX to JS */

    return <View style={styles.container}>
      {/* View is like a <div> element in HTML */}
      {/* Wrap JavaScript code in a curly braces to put it inside JSX*/}
      <Text>
        Days of the week:
      </Text>
      {/* <DayItem day={DAYS[0]}/> */}
      {this.days()}
    </View>
  },

  // This function will only be called manually
  /** Returns an array of DayItems for each day of the week */
  days: function () {
    var daysItems = [];
    for (var i = 0; i < 7; i++) {
      var day = Moment()
        .add(i, 'days')
        .format('dddd');
      daysItems.push(<DayItem day={day} daysUntil={i}/>)
    }
    return daysItems;
  }

})

// 2) Style the React Component styling is made through those objects, syntax
// and idea similiar to CSS
var styles = StyleSheet.create({
  container: {
    flex: 1, // flex - fill up all the space on the screen (weight ind Android)
    justifyContent: 'center', // Moves stuff height wise
    alignItems: 'center' // Moves stuff width wise
  }
})

// 3) Show the react component on the screen
/* This tells the React-Native that whenever it wants to show content
 for the app 'WeekDays' use component Weekdays
 Use this once and for main component */
AppRegistry.registerComponent('WeekDays', function () {
  return Weekdays;
})
// AppRegistry is like Manifest in android. It needs to know all the components
// as well as manages them