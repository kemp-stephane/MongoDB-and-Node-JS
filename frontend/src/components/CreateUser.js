import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser =()=>{

    const [Model, setModel] = useState()
    const [Make, setMake] = useState()
    const [Owner, setOwner] = useState()
    const [Registration_number, setRegistration] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:5000/cars", {Model, Make, Owner, Registration_number})
            .then(res=> {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    //This function will simply take you to the previous page
    function backPage(){ 
        window.history.back()
    }


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Add Car Details</h2>
                    <div className="1">
                        <label>Model</label>
                        <input 
                            type="number"
                            placeholder="Enter Model"
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </div>

                    <div className="2">
                        <label>Make</label>
                        <input 
                            type="text"
                            placeholder="Enter Make"
                            onChange={(e) => setMake(e.target.value)}
                        />
                    </div>

                    <div className="3">
                        <label>Owner</label>
                        <input 
                            type="text"
                            placeholder="Enter Owner's Name"
                            onChange={(e) => setOwner(e.target.value)}
                        />
                    </div>

                    <div className="4">
                        <label>Registration Number</label>
                        <input 
                            type="text"
                            placeholder="Enter Registration Number"
                            onChange={(e) => setRegistration(e.target.value)}
                        />
                    </div>

                    <button>Submit</button>
                    <button onClick={backPage}> Back</button>

                    
                </form>

            </div>
        </div>
    );
}

export default CreateUser;