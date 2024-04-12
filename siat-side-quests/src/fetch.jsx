import Alum from "./alum.json"

const fetch = () =>{

    return(

        <div>
            {
                Alum.map(rec => {
                    return(
                        <div>
                            {rec.title}
                        </div>
                    )
                })
            }
            </div>
    
    )
}

export default fetch