import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rec}) => {
    return (
        <>
            <div id="wrapper-header">
                <h1 id='counter'>{counter}</h1>
            </div>
            <div id="wrapper-button">
                <button onClick={inc} id='inc'></button>
                <button onClick={dec} id='dec'></button>
                <button onClick={rec} id='rec'></button>
            </div>
        </>
        
    )
}

const mapStateToProps = (state) => {
    return {
        counter : state
    }
}

export default connect(mapStateToProps, actions)(Counter);