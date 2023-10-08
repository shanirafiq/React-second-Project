import React from "react";
const Header=(props)=>{
    return(
        <>
            <div className="header">
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 content">
                        <h1 className="display-2 fw-bolder"> {props.heading} </h1>
                        <p className="py-3">
                  {props.para}
                        </p>
                        <button className="bg-primary text-white ps-3 pe-3 p-2">{props.btn}</button>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center img-1">
                        <img src={props.img} alt="nothing" className="img-fluid  rounded w-75 mx-auto"/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header