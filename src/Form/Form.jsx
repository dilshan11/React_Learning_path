import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName:'sachithra'
        }
    }
    
    handleUsernameChange=(event)=>{
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="">Frist Name</label>
                    <input type="text"
                    value={this.state.userName}
                    onChange={this.handleUsernameChange}
                    />
                </form>
            </div>
        )
    }
}

export default Form
