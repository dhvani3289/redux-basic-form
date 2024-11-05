import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateContactList } from "../Redux/Actions/ContactActions";

function UpdateContact() {

    let [updatedcontactData, setUpdatedContactData] = useState({});
    let pos = useParams();

    let dispatch = useDispatch();
    let nav = useNavigate();
    let allContactData = useSelector((state) => state.contactRoot.contact);

    useEffect(() => {
        setTimeout(() => {
            updatingContact();
        }, 1000);
    }, setUpdatedContactData)

    let updatingContact = (() => {
        let contactDetails = allContactData.filter((v, i) => {
            if (i == pos.index) {
                return v;
            }
        })
        setUpdatedContactData(contactDetails[0]);
    })

    let handleChange = ((e) => {
        let { name, value } = e.target;
        setUpdatedContactData({ ...updatedcontactData, [name]: value });
    })

    let submitData = (e) => {
        e.preventDefault();
        dispatch(updateContactList(pos.index, updatedcontactData));
        nav("/viewContact")
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <form method='post' onSubmit={(e) => submitData(e)} className="form" style={{ backgroundColor: "lightblue" }}>
                        <h2>Edit Data</h2>
                        <input type="date" name='date' onChange={(e) => handleChange(e)} value={updatedcontactData.date ? updatedcontactData.date : ""} />
                        <input type="text" placeholder="Username*" name='username' onChange={(e) => handleChange(e)} value={updatedcontactData.username ? updatedcontactData.username : ""} />

                        <input type="email" placeholder="someone@example.com*" name='email' onChange={(e) => handleChange(e)} value={updatedcontactData.email ? updatedcontactData.email : ""} />
                        <input type="number" placeholder="1234567890*" name='phonenumber' onChange={(e) => handleChange(e)} value={updatedcontactData.phonenumber ? updatedcontactData.phonenumber : ""} />

                        <input type="password" name="password" placeholder="Enter your password*" onChange={(e) => handleChange(e)} value={updatedcontactData.password ? updatedcontactData.password : ""} />

                        <input type="text" placeholder="Enter your city" name='city' onChange={(e) => handleChange(e)} value={updatedcontactData.city ? updatedcontactData.city : ""} />

                        <div className='gender' >
                            <label for="gender">Gender:</label>
                            <input type="radio" id="male" name="gender" value="male" onChange={(e) => handleChange(e)} checked={updatedcontactData.gender == 'male' ? "checked" : ""} />
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female" onChange={(e) => handleChange(e)} checked={updatedcontactData.gender == 'female' ? "checked" : ""} />
                            <label for="female">Female</label>
                        </div>
                        <input type="time" name='time' onChange={(e) => handleChange(e)} value={updatedcontactData.time ? updatedcontactData.time : ""} />
                        <input type="range" name='range' min={0} max={100} step={10} onChange={(e) => handleChange(e)} value={updatedcontactData.range ? updatedcontactData.range : ""} />
                        <input type="submit" value="Edit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateContact;