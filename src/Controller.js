import React from 'react'
import { Bachelors } from './Components/Bachelors';
import Balance from './Components/Balance';
import Form from './Components/Form';
import Input from './Components/Input';

class Controller extends React.Component{


    state={
        amount:'0.00',
        Text:'',
        Message: '',
        visible: false,
        btn_text:''

    }

    handler=(e)=>
    {
        if(e.target.type==="text"&&!isNaN(e.target.value))
        {
            this.setState({
               
                Text:e.target.value,
            })
        }

        else if(e.target.type==="button")
        {
            if (e.target.value === 'Give') {
                this.setState({
                    visible: !this.state.visible,
                    btn_text:"Send"
                })
            }
            else if (e.target.value === 'Widthraw') {
                this.setState({
                    visible: !this.state.visible,
                    btn_text:"Widthraw Now"
                })
            }
            else if(e.target.value==='Send'){

               if(this.state.Text!==''){
               let val1=parseFloat(this.state.amount,10);
               let val2=parseFloat(this.state.Text,10); 
            
               let val=0.00
               val = val1+val2;
               
               this.setState({
                   
               amount:val,
               Text:'',
               Message:'',
           })

        }
        else {
            this.setState({
                Message:'Please provide an amount',
            })
        }

        }
        else if(e.target.value==="Reset")
        {
            this.setState({
                amount:'0.00',
                Text:'',
                Message:'',
            })
        }
        else if(e.target.value==="Widthraw Now")
        {
            if(this.state.Text==='')
            {
                this.setState({
                    visible: !this.state.visible,
                    btn_text:'Widthraw'
                })
            }
            else {
               let Widthrawal_amount = parseFloat(this.state.Text);
               let Current_balance = parseFloat(this.state.amount);
               if(Widthrawal_amount>Current_balance)
               {
                   this.setState({
                       Message:'You dont have enough balance',

                   })
               }
               else {
                   Current_balance-=Widthrawal_amount;
                   this.setState({
                       amount:Current_balance,
                       Message:'',
                       Text:'',

                   })
               }
               
            }
        }

        
        
    }
    
}

    render()
    {
        const {amount,Text,Message}=this.state;
        const names=['zhalok','rabi','morshed'];
       return (
          <div>

             <Bachelors/>
             <Balance balance={amount} handle={this.handler}/> <br/>
               <Input handler={this.handler} />
               {this.state.visible && <Form value={Text} btn_text={this.state.btn_text} handler={this.handler} visible={this.state.visible} message={Message} setVisible={(() => this.setState({visible:!this.state.visible}))}/>}
             <br/>
           </div>
       );
    }
}





export default Controller;