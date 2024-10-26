import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactDetails } from "../Redux/Actions/ContactActions";
import { Link } from 'react-router-dom'

function Contact() {

    let [data, setData] = useState({})
    let dispatch = useDispatch();

    let details = useSelector((state) => state)
    console.log(details.contactRoot.contact, "details");

    let handleChange = ((e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    })
    // console.log(data);

    let submitData = ((e) => {
        e.preventDefault();
        console.log(data);
        dispatch(contactDetails(data));
    })

    return (
        <>
            <Link to='/viewContact'>View Contact</Link>

            <form method="post" onSubmit={submitData} style={{ display: "flex", justifyContent: "center" }}>
                <table border={1} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <td><input type="text" name="name" onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <th>Contact no.</th>
                            <td><input type="number" name="contact" onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <th>Submit</th>
                            <td><button type="submit">Add Contact</button></td>
                        </tr>
                    </thead>
                </table>
            </form>
        </>
    )
}
export default Contact;