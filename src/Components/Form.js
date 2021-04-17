import React from 'react'


export default function Form({value,handler,setVisible,message, btn_text}) {

  const sendValue = e => {
    e.preventDefault();
    handler(e)
    if (value) {
      document.getElementsByClassName("belt")[0].classList.add('transitioned-1');
      document.getElementsByClassName("progress-inner")[0].classList.add('loading');
      setTimeout(function () {
        document.getElementsByClassName('form-container')[0].classList.add('transitioned-3');
      }, 3000);
      setTimeout(function () {
    
        document.getElementsByClassName('belt')[0].classList.remove('transitioned-1');
        document.getElementsByClassName('belt')[0].classList.add('transitioned-2');
            
      }, 3300);
    }

    }

    const GoBack = () => {
        document.getElementsByClassName('progress-inner')[0].classList.remove('loading');
        document.getElementsByClassName('belt')[0].classList.remove('transitioned-2');
      document.getElementsByClassName('form-container')[0].classList.remove('transitioned-3');
      setVisible()
    }


  return (
    <div className="form-container">
    <div className="belt">
      <div className="form">
      <h2 style={{color:'white'}}>{btn_text==="Widthraw Now"?"Widthraw":btn_text} an Amount</h2>
          <input type="text" placeholder={btn_text+"......."} value={value} onChange={(e) => handler(e)} style={{background:'#243B54',border:'0px',color:'white',fontSize:'20px'}} />
          <div style={{ display: 'flex' }}>
              <input type="button" value={btn_text} className="form-button" onClick={sendValue} style={{ width: "130px", borderRadius: '50px', border: '1px solid white' }} />
          <input className="form-button" type="button" value="Close" onClick={setVisible} style={{ width: "100px", borderRadius: '50px',border:'1px solid white'}}/>
          </div>
          {message && <p style={{color:'cyan',marginTop:'10px'}}>{message}</p>}
      </div>
      <div className="progress-wrapper">
        <div className="progress-div">
          <h3 style={{color:'white'}}>Your Amount is sending...</h3>
          <div className="progress-outer">
            <div className="progress-inner"></div>
          </div>
        </div>
      </div>
      <div className="success-wrapper">
        <div className="success">
          <i className="ion-android-done transitioned-3"></i>
          <h2 style={{color:'white'}}>Your Amount Has Been Sent!</h2>
          <button className="form-button" onClick={GoBack} style={{border:'1px solid white'}}>Back</button>
        </div>
      </div>
    </div>
  </div>
        
        );
}
