import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName:' Parents'
        }
        this.gretParent = this.gretParent.bind(this)
    }

    gretParent(names){
        alert(`Hello ${this.state.parentName} from ${names}`)
    }
    
    render() {
        return (
            <ChildComp greetHandler = {this.gretParent} />
        )
    }
}

export default ParentComp
