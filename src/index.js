
/*
js library that is used to produce html that is shown to a user in a browser
writing individual components or views. Components are snippets of codes that produces HTML

*/

import React from 'react';
import ReactDOM from  'react-dom';

// 1. Create new component

const App = () => { //const = final value and wont change and won't reassign app further down the line //app is a type of component, it is a class // need to instantiate component before passing it to the DOM
    return <div>Hi!</div>; // it is a component instance in JSX
}






// 2. some HTML
// 3. Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container')); // trying to update the dom not react // (<App />) creates an instance of App
