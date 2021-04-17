import React from 'react'

class Balance extends React.Component{
    render()
    {
        const {balance,handler}=this.props;
        return (
            <>
            <fieldset style={{width:'40%',marginLeft:'300px'}} >
                <legend style={{color:'white'}}>Current Balance</legend>
                 <h1 onChange={(e)=>handler(e)} style={{color:'white',textAlign:'center'}}> <span style={{fontSize:'50px'}}>{balance}</span><small style={{marginLeft:'10px',fontSize:'20px'}}>.tk</small></h1>
            </fieldset>

            </>
        );
    }
}

export default Balance;