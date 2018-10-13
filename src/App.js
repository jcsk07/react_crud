
//here this is the app.js file which is send as a render to the index.js file 
//which is rendering the response to the "root" in the index.html page
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importing the other components from oter folders

import Header from './components/Header';
import {Footer,Ending} from './components/footer';

// function Chandu(){
//   return(
//     <div>
//       <p>hello the user is the chandu and this is hemath </p>
//     </div>
//   );
// }

class App extends Component {
  render() {
    //here we are returning the basic html code as the response to the index.html div tag
    return (
      <div className="App">

        <Header par={"hello user this is koushik"} x={88} />
        <Header par={"hai Hemanth this is another data"} x={90} />
        <Footer myobj={{
          s:45,
          b:88
        }}
        />
        <Ending />
      </div>
    );
  }
}

//here we are exporting the js file as the "App" for the further use in the index.js files etc.....
export default App;
