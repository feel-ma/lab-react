function IdCard(probs){
    return(
        <div>
            <div>
                <img src={probs.picture} alt="pics" />
            </div>
            <div>
                <p>First Name:{probs.firstName}</p>
                <p>Last Name:{probs.lastName}</p>
                <p>Gender:{probs.gender}</p>
                <p>Height:{probs.height} </p>
                <p>Birth:{probs.birth} </p>
            </div>
        </div>
    )
}

export default IdCard