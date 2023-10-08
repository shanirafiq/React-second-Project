import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Form=()=>{
    return(
        <>
            <h2 className="text-center py-5">Feel Free to Contact us</h2>
           
            <div className="text-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222513.51786316765!2d71.39464608214293!3d29.37691413959123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c46c611ad5%3A0xfcdf0da8e103f862!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696678003880!5m2!1sen!2s" width="1300" height="350" style={{border:"0 "}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    
            <div className="container mt-5">
           <form action="https://formspree.io/f/mzblkqgo" method="POST">
            <div className="col-12  d-flex justify-content-center align-items-center g-5">
                <input  type="text" name="name" placeholder="Enter your name" required className="col-6 p-2"/>
            </div>
            <div className="col-12  d-flex justify-content-center align-items-center mt-4">
                <input  type="email" name="email" required placeholder="Enter your email" className="col-6 p-2"/>
            </div>
            <div className="col-12  d-flex justify-content-center align-items-center mt-4">
                <textarea cols={75} rows={7} name="messege"></textarea>
            </div>
            <div className="col-6 mx-auto mt-4 form-btn">
                <input type="submit" value="send" className="col-3 col-sm-2 p-2 btn bg-primary text-white" />
            </div>
           </form>
            </div>
        </>
    )
}
export default Form