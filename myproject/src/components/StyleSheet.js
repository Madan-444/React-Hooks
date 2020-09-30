import React from 'react'
import './mystyles.css'
function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div className= {className}>
            <h1> Stylesheets</h1>
        </div>
        
    )
}

export default StyleSheet
