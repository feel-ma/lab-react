function CreditCard(probs){
    const numberC= probs.number
    const lastFour=numberC.slice((numberC.length-4), numberC.length)
   

    const divStyle = {

        backgroundColor: probs.bgColor      };
   

    return(
        <div style={divStyle}>
           <div> 
            <div> {probs.type}</div>
           </div>
           <div>
           <span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span> 
 <span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span> 
<span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span> 
            <div> {lastFour}</div>
           </div>

           <div>
            <div> Expires {probs.expirationMonth}/{probs.expirationYear} </div>
            <div>{probs.bank}</div>
           </div>
           <div>{probs.owner}</div>
          
        </div>
    )
}

export default CreditCard