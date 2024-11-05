import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactDetails } from "../../Redux/Actions/ContactActions";
import { Link, useNavigate } from 'react-router-dom'
import './Contact.css'

function Contact() {

    let [data, setData] = useState({});
    let [list, setList] = useState([]);
    let [pos, setPos] = useState(-1);
    let [find, setFind] = useState([]);
    let [validationErrors, setValidationErrors] = useState({});
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let details = useSelector((state) => state)
    console.log(details.contactRoot.contact, "details");

    let handleChange = ((e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    })

    let submitData = ((e) => {
        e.preventDefault();
        let validate = validation();
        if (Object.keys(validate).length > 0) {
            setValidationErrors(validate);
        }
        else {
            navigate("/viewContact")
            dispatch(contactDetails(data));
        }
    })

    let validation = () => {
        let validationMessages = {};
        if (!data.date) {
            validationMessages.date = 'Date is required';
        }
        if (!data.username) {
            validationMessages.username = 'Username is required';
        }
        if (!data.email) {
            validationMessages.email = 'Email is required';
        }
        else if (!data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            validationMessages.email = 'You have entered an invalid email address!'
        }
        if (!data.phonenumber) {
            validationMessages.phonenumber = 'Phone Number is required';
        }
        if (!data.password) {
            validationMessages.password = 'Password is required';
        }
        else if (!data.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
            validationMessages.password = 'Enter a password between 7 to 15 characters which contain at least one numeric digit and a special character.'
        }
        if (!data.city) {
            validationMessages.City = 'City is required';
        } if (!data.gender) {
            validationMessages.gender = 'Gender is required';
        } if (!data.time) {
            validationMessages.time = 'Time is required';
        } if (!data.range) {
            validationMessages.range = 'Range is required';
        }
        return validationMessages
    }

    return (
        <>
            <div className="bg-image">
                <div className="container">
                    <div className="row">
                        <form method='post' onSubmit={submitData} className='form'>
                            <input type="date" name='date' onChange={(e) => handleChange(e)} value={data.date ? data.date : ""} />
                            <div> {validationErrors.date && <p>{validationErrors.date}</p>}</div>

                            <input type="text" placeholder="Username*" name='username' onChange={(e) => handleChange(e)} value={data.username ? data.username : ""} />
                            <div> {validationErrors.username && <p>{validationErrors.username}</p>}</div>

                            <input type="email" placeholder="someone@example.com*" name='email' onChange={(e) => handleChange(e)} value={data.email ? data.email : ""} />
                            <div> {validationErrors.email && <p>{validationErrors.email}</p>}</div>

                            <input type="number" placeholder="1234567890*" name='phonenumber' onChange={(e) => handleChange(e)} value={data.phonenumber ? data.phonenumber : ""} />
                            <div > {validationErrors.phonenumber && <p>{validationErrors.phonenumber}</p>}</div>

                            <input type="password" name="password" placeholder="Enter your password*" onChange={(e) => handleChange(e)} value={data.password ? data.password : ""} />
                            <div> {validationErrors.password && <p>{validationErrors.password}</p>}</div>

                            <input type="text" placeholder="Enter your city" name='city' onChange={(e) => handleChange(e)} value={data.city ? data.city : ""} />
                            <div> {validationErrors.city && <p>{validationErrors.city}</p>}</div>

                            {/* gender */}
                            <div className='gender' >
                                <label for="gender">Gender:</label>
                                <input type="radio" id="male" name="gender" value="male" onChange={(e) => handleChange(e)} checked={data.gender == 'male' ? "checked" : ""} />
                                <label for="male">Male</label>
                                <input type="radio" id="female" name="gender" value="female" onChange={(e) => handleChange(e)} checked={data.gender == 'female' ? "checked" : ""} />
                                <label for="female">Female</label>
                            </div>
                            <div> {validationErrors.gender && <p>{validationErrors.gender}</p>}</div>

                            <input type="time" name='time' onChange={(e) => handleChange(e)} value={data.time ? data.time : ""} />
                            <div> {validationErrors.time && <p>{validationErrors.time}</p>}</div>

                            <input type="range" name='range' min={0} max={100} step={10} onChange={(e) => handleChange(e)} value={data.range ? data.range : 0} />
                            <div> {validationErrors.range && <p>{validationErrors.range}</p>}</div>

                            <input type="submit" value={pos == -1 ? "Register" : "Edit"} className="register-btn" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;
