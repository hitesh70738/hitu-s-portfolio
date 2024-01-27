import React from "react";
import { useState } from "react";

function Contact () {

    const [email, setEmail] = useState('')

    const handleClick = (element) => {
        setEmail(element.target.value)
    }

    return (
        <div>
            <form>
                <div className="form-group">
                <label for="exampleInputEmail1">Enter your Email and Phone number and we will get back to you</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <br />
                <div className="form-group">
                <input type="number" className="form-control" placeholder="Enter Phone number" />
                </div>
                <br />
                <button onClick={handleClick} type="submit" class="btn btn-primary">Submit</button>
  
            </form>
        </div>
    )
}

export default Contact;