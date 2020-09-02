import React, { Component } from 'react'
import Car from './Cars'

class  Mycars extends Component {
    noCopy = () => {
        alert('merci de ne pas copier le texte')
    }
    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>

                <p onCopy= {this.noCopy} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <Car color='red'>ford</Car>
                <Car>Mercedes</Car>
                <Car color='green'></Car>
            </div> 
        )                   
    }
}

export default Mycars