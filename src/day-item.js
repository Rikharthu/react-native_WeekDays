// 1) Import some code we need
import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

// 2) Create our component
var DayItem = React.createClass({
    render: function () {
        return (
        <Text style={styles.day}>
            {/* Access set properties */}
            {this.props.day}
        </Text>
        )
    }
});

// 3) Style our component
var styles = StyleSheet.create({
    day: {
        fontSize:18,
        color: '#0000ff'
    }
})

// 4) Make this code available elsewhere (export)
module.exports = DayItem;