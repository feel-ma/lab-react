function Greetings(probs){
    let greetings= ""

    if(probs.lang =='de' ){
        greetings='Hallo'
    }
    else    if(probs.lang =='fr' ){
        greetings='Bonjopur'
    }
    else    if(probs.lang =='es' ){
        greetings='Bueno'
    }

    return(
        <div>
          <p>{greetings} {probs.children} </p>
        </div>
    )
}

export default Greetings