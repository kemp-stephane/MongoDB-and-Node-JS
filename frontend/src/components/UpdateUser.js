import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser =()=>{
    const {id} = useParams()

    const [Model, setModel] = useState()
    const [Make, setMake] = useState()
    const [Owner, setOwner] = useState()
    const [Registration_number, setRegistration] = useState()

    useEffect(()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get("http://localhost:5000/cars/"+id);
                console.log(response);
                setModel(response.data.Model)
                setMake(response.data.Make)
                setOwner(response.data.Owner)
                setRegistration(response.data.Registration_number)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    },)
     
    const navigate = useNavigate()

    //this function will allow you to update the specific data in the app
    const handleUpdate = (e) =>{
        e.preventDefault()
        axios.put("http://localhost:5000/cars/"+id, {Model, Make, Owner, Registration_number})
            .then(res=>{
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
                <form onSubmit={handleUpdate}>
                    <h2>Update Car Details</h2>
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

                    <button>Update</button>
                    <button onClick={backPage}> Back</button>
                    
                </form>

            </div>
        </div>
    );
}

export default UpdateUser;