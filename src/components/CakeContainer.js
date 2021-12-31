import React from 'react'
import { buyCake } from '../redux/cakes/cakeAction'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            {!props.noOfCakes?"no cake found":<h2>No of cakes -{props.noOfCakes}</h2>}
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        noOfCakes:state.noOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
