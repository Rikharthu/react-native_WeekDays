// 1) Create a react component
var Weekdays = React.createClass({
  // Set of instructions that define our component and how it interracts with the user
  // It's like View in Android

  // Every component must implement a render method
  /* Assign a new function to a render property
  same as Weekdays.render = new function(){...} */
  render: function () {
    // The purpose of the render method is to return how the component is going to look like
    /* JSX is a language that compiles it's XML nature into JavaScript
    Example:
      IN:
        <div>Hello {this.props.name}</div>
      OUT:
        React.createElement("div", null, "Hello ", undefined.props.name); 
      Use https://babeljs.io/repl/ for live preview and converting JSX to JS */
    
    return <View>
      {/* View is like a <div> element in HTML */}
      {/* Wrap JavaScript code in a curly braces to put it inside JSX*/}
      <Text>
        Days of the week:
      </Text>
    </View>
  }

})

// 2) Show the react component on the screen
// This tells the React-Native that whenever it wants to show content
// for the app 'WeekDays' use component Weekdays
// Use this once and for main component
AppRegistry.registerComponent('WeekDays', function(){
  return Weekdays;
})