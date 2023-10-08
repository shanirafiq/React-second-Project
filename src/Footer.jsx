import {FaFacebook} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
const Footer=()=>{
    return(
        <>
            <div className="footer  d-flex justify-content-center align-items-center justify-content-between">
            <div className="container">
            <div className="row gy-4">
        
                <div className="col-md-3 col-6 text-center">
                    <h3>Zeeshan Rafiq</h3>
                    <p className="pt-3">i am a fromt-end developer <br/> i build responsive website</p>
                    </div>
                    <div className="col-md-3 col-6 ps-md-5 ps-3">
                        <p>please visit my page</p>
                        <input type="text"  className="p-1 pt-2"/>
                        <br/>
                        <button className="bg-primary p-2 mt-2">Subscribe</button>
                    </div>
                    <div className="fs-3 ps-2 gap-3 col-md-4 col-7 text-center">
                        <h5>Foolow us</h5>
                        <FaFacebook/>
                        <AiFillInstagram/>
                        <AiFillTwitterCircle/>
                    </div>
                    <div className="col-md-2 col-5 pe-1">
                        <h5>call us</h5>
                        <p>03041700470</p>
                    </div>

</div>
                </div>
                </div>
    
        </>
    )
}
export default Footer