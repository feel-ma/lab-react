function BoxColor(probs){
    const divStyle = {

        backgroundColor: `rgb(${probs.r}, ${probs.g}, ${probs.b})`
      };
   

    return(
        <div class="rating">
            <div style={divStyle}>  RGB({probs.r}, {probs.g}, {probs.b}) </div>
           
          
        </div>
    )
}

export default BoxColor