// import React from 'react'

//  class ClassComponent extends React.Component{
//     render(){
       
//         return(
//             <div>{`Hello from class Component `}
//             </div>
//    ) }
//  }

//  export default ClassComponent


import {Component} from 'react'
// import {FunctionalComponent} from './FunctionalComponent'
import styles from './ClassComponentStyles'
import './style.css'
 class ClassComponent extends Component {
//     constructor(){
//         super();
//         this.state = {
//             fname:'',
//             lname: '',
//             showName: false
//         }
//     }

//     updateFirstName = (event) => {
//         this.setState({fname: event.target.value})

//     }

//     updateLastName = (event) => {
//         this.setState({lname: event.target.value})
//     }

//     showConditionalRender = (showConditional) => {
//         if(showConditional){
//             return  [
//                     this.conditionalRenderSwitch(),
//                     this.conditionalRenderIf()
//                     ]
//         }
        
//     }
    

//     handleShowName = () => {
//         this.setState({showName: true}, () => {
//             console.log("KW102", this.state.showName)
//         })
        
//     }

//     conditionalRenderIf = () => {
//         if(this.state.showName){
//             return(
//                 <p>{`Conditional Rendering if statement ${this.state.fname} ${this.state.lname}`}</p>
//             )
//         }
//     }

//     conditionalRenderSwitch = () => {
//         switch(this.state.fname){
//             case "kamal": return  <p>{`Conditional Rendering Switch statement ${this.state.fname} ${this.state.lname}`}</p>

//         }
//     }

     render(){
//         const {fname, lname} = this.props;
        // Array Destructuring
        // const arr = ["kamal", 1]
        // const [firstName, number] = arr;

        return(
            // <div style={styles.body}>{`Hello From Class Component ${fname} ${lname}`}
            // <p>First Name:<input type="text" value={this.state.fname} onChange={this.updateFirstName} /></p>
            // <p>Last Name:<input type="text" value={this.state.lname} onChange={this.updateLastName} /></p>
            // <button onClick={this.handleShowName}>Show Names</button>
            // {this.state.showName ? <p>{`Conditional Rendering with Ternary Operator ${this.state.fname} ${this.state.lname}`}</p> : <p>No Name</p>}
            // {this.state.showName && <p>{`Conditional Rendering with Logical && operator ${this.state.fname} ${this.state.lname}`}</p>}
            // {/* <FunctionalComponent fname={"EA"} lname={"14"}/> */}
            // {this.showConditionalRender(this.state.showName)}
            <div className='parent' style={styles.div}>Parent element
                <div className='child'>Child1</div>
                <div className='child' style={{color:'aqua'}}>React</div>
            </div>
            // </div>
        )
    }
}

export default ClassComponent

// style={{backgroundColor:'grey'}}