import React from 'react'

class Input extends React.Component{
    


    render()
    {
        const {handler}=this.props;
        return (
            
              <fieldset style={{width:'40%',marginLeft:'300px'}}>
                <legend style={{color:'white'}}>Transaction</legend>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input className="form-button" type="button" value="Give" onClick={(e)=>{handler(e)}} style={{marginRight:'10px',border:'1px solid white',borderRadius:'50px'}}/>
                    <br/> <br/>
                    <input className="form-button" type="button" value="Widthraw" onClick={(e)=>{handler(e)}} style={{marginRight:'10px',border:'1px solid white',borderRadius:'50px'}}/>
                    <br/> <br/>
                    <input className="form-button" type="button" value="Reset" onClick={(e) => handler(e)} style={{border:'1px solid white',borderRadius:'50px'}} />
                </div>
                </fieldset>  
            
        );
    }
}

export default Input