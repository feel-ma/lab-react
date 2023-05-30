function Random(probs){
    const result = Math.floor(Math.random() * (probs.max -probs.min + 1) + probs.min)

    return(
        <div>
            <p>Random number between {probs.min} and {probs.max} ={result} </p>
          
        </div>
    )
}

export default Random