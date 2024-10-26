import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateContactList } from "../Redux/Actions/ContactActions";

function UpdateContact() {

    let [updatedcontactData, setUpdatedContactData] = useState({});

    let pos = useParams();
    console.log(pos, "pos");//position
    let dispatch = useDispatch();

    let allContactData = useSelector((state) => state.contactRoot.contact);

    let nav = useNavigate();

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
        let { name, value } = e.target
        setUpdatedContactData({ ...updatedcontactData, [name]: value });
    })

    let submitData = (e) => {
        e.preventDefault();
        dispatch(updateContactList(pos.index, updatedcontactData));
        nav("/viewContact")
    }

    return (
        <>
            <form method="post" onSubmit={submitData} style={{ display: "flex", justifyContent: "center" }}>
                <table border={1} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <td><input type="text" name="name" value={updatedcontactData.name ? updatedcontactData.name : ""} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <th>Contact no.</th>
                            <td><input type="number" name="contact" value={updatedcontactData.contact ? updatedcontactData.contact : ""} onChange={(e) => handleChange(e)} /></td>
                        </tr>
                        <tr>
                            <th>edit</th>
                            <td><button type="submit">Edit</button></td>
                        </tr>
                    </thead>
                </table>
            </form>
        </>
    )
}

export default UpdateContact;