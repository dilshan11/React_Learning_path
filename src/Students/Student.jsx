import React,{Component} from 'react';
import student from './student.css'
class Student extends Component {
    state = { 
        child:[
            {name:'Max',age:25},
            {name:'anura',age:28},
            {name:'namal',age:25},
            {name:'lahiru',age:28},
            {name:'nuvan',age:25},
            {name:'samara',age:28},
        ],
        childeName:'sachithra'
     }
     
     valuePrint(){
        //  console.log(this);
     }

     addH1Tag(){
        //  console.log(this.state);
         return <h1>Studentsasasas</h1>
     }

    //  componentDidMount() {
    //     fetch('https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Sachithr-CarShopp-PRD-52eb84a53-29285495&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=harry%20potter%20phoenix')
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data);
    //       this.setState({ contacts: data })
    //     })
    //     .catch(console.log)
    //   }

    render() { 
        return (
            <div className="student">
                <h1>Student Name {this.props.name}</h1>
                <h2>age {this.props.age}</h2>
                <button onClick=  {this.valuePrint}>Click</button>
            </div>
          );
    }

    
}
 
export default Student;