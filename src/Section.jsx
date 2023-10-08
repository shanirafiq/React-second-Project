import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"

const Section=(props)=>{
    return(
        <>
    <div className="gap-x-5">
<div class="card mx-auto boder border-grey shadow gap-5 overflow-hidden rounded" style={{width:"17rem",height:"30rem"}}>
  <img src={props.img} class="card-img-top img-fluid h-50 w-100 border-bottom" alt="nothing"/>
  <div class="card-body">
    <h5 className="card-title py-2">{props.heading}</h5>
    <p className="card-text pb-2">{props.para}</p>
    <div className="d-flex justify-content-center align-items-center">
    <Link to="services" className="btn btn-primary mb-2">Add to Card</Link>
    </div>
  </div>
</div>
</div>

        </>
    )
}
export default Section