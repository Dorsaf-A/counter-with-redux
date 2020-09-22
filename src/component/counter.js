import React from 'react'
import { connect } from 'react-redux'
import {increment,decrement,reset} from '../actions/actions'
import '../component/counter.css'


function Counter(props) {
    return (
        <div className='main'><div style={{textAlign:'center'}}>
            <h1>Counter</h1>
            <button onClick={()=>props.increment()}>+</button>
            {props.count}
            <button onClick={()=>props.decrement()}>-</button><br></br></div>
            <button onClick={()=>props.reset()}>RESET</button>
            
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        count : state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: ()=>dispatch(increment()),
        decrement: ()=> dispatch(decrement()),
        reset: ()=> dispatch(reset())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
