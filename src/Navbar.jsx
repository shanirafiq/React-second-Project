import {GrMenu} from "react-icons/gr"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Navbar=()=>{
    const[menu,setMenu]=useState(true)
    console.log(menu);
    let Abc=()=>{
        setMenu(!menu)
    }
    return(
        <>
        
            <div className={  menu ? "navbar": "navbar active "}>
                <div className="heading">
                    zeeshan rafiq
                </div>
                <div className="nav">
                    <ul>
                        <li> <NavLink   className="navlink" to={"/"}> Home </NavLink></li>
                        <li> <NavLink  className="navlink" to={"/about"}> About </NavLink></li>
                        <li> <NavLink  className="navlink" to={"/services"}> Services  </NavLink></li>
                        <li>  <NavLink  className="navlink" to={"/contact"}>Contact </NavLink></li>
                    </ul>
                  
                </div>
                <div className="icon">
                <i className="menu"  name="open" > <GrMenu  onClick={Abc}/> </i>
                 <i className="menu" name="cancel" id="close"> <AiOutlineClose  onClick={Abc}/> </i>
                </div>
        
            </div>
            
        </>
    )
}
export default Navbar