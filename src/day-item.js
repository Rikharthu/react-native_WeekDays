// 1) Import some code we need
import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

// 2) Create our component
var DayItem = React.createClass({

    render: function () {
        return (
        // <Text style={styles.day}>
        <Text style={this.style()}>
            {/* Access set properties */}
            {this.props.day}
        </Text>
        )
    },

    style: function(){
        return{
            color: this.color(),
            fontWeight:this.fontWeight(),
            fontSize:this.fontSize(),
            lineHeight:this.lineHeight()
        }
    },
    
    color: function(){
        var opacity = 1/(1+this.props.daysUntil);
        return 'rgba(0,0,0, '+opacity+');'
    },

    fontWeight: function(){
        var weight = 7 - this.props.daysUntil;
        return ""+weight*100;
    },

    fontSize: function(){
        return 60 - 8*this.props.daysUntil;
    },

    lineHeight: function(){
        return 70-4*this.props.daysUntil;
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