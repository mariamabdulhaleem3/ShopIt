import { Link } from "react-router-dom";
import NavBarLog from "./NavBarLog";

const Contact =() =>{
    return(
        <div>
            <NavBarLog/>
            <section class="content">
            <div class="div2">
            
        <h3 class="head3">Contact us</h3>
            <form  id="myForm" novalidate>
            <div class="form-group">
            <label for="name" class="pl-4 fs-3">Name</label>
            <input type="text" class="form-control" id="name" required/>
            <div class="invalid-feedback">
                Please enter a valid name.
            </div>
            </div>
            <div class="form-group">
            <label for="email" class="pl-4 fs-3">Email Address</label>
            <input type="email" class="form-control" id="email" required/>
            <div class="invalid-feedback">
                Please enter a valid email.
            </div>
            </div>
            <div class="form-group">
                <label for="message" class="pl-4 fs-3">Subject</label>
                <textarea class="form-control" id="message" rows="5" required></textarea>
                <div class="invalid-feedback">
                Please enter a message.
                </div>
            </div>
           <Link to="/Message" > <button class=" but fs-2 w-50 mt-4 ml-5">Submit</button></Link>
            </form>
            </div>
            
            </section>
</div>
    );
}
export default Contact;