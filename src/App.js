import React, { Component } from 'react';
import Student from './Students/Student.jsx'
import AppCss from './App.css'
import Form from './Form/Form.jsx'

class App extends Component {
   state = {
     student:[
       {name:'sumith',age:25},
       {name:'kumara',age:30}
     ]
   }

    

   render() { 


    function makeStudentAry() {
      console.log("asasasasa");
      // this.state.student.map(s=>{
      //   return  <Student name={s.name} age={s.age}></Student>
      // });
    }
 
    
     return (
       <div className="AppDiv">
          <h1>App Component</h1>
          {makeStudentAry()}
          <Form/>
       </div>
       );
   }
 }
  
 export default App;