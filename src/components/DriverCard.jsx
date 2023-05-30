import Rating from "./Rating"

function DriverCard(probs){
   
    return(
        <div >
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <div>{probs.name}</div>
                <div>
                <Rating>{probs.rating}</Rating>
                </div>
                <div> 
                    <div> {probs.car.model} </div>
                    <div> {probs.car.licensePlate} </div>
                </div>
                
            </div>

           
          
        </div>
    )
}

export default DriverCard