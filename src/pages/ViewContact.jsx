import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../Redux/Actions/ContactActions";
import { Link } from "react-router-dom";

function ViewContact() {

    let details = useSelector((state) => state.contactRoot.contact);
    console.log(details, "details");

    let dispatch = useDispatch();

    let deleteData = (pos) => {
        console.log(pos);
        dispatch(deleteContact(pos))
    }

    return (
        <>
            <h1>
                Contact List
            </h1>

            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact No.</th>
                        <th>Actions</th>
                    </tr>
                    {details.map((v, i) => {
                        return (
                            <>
                                <tr>
                                    <td>{v.name}</td>
                                    <td>{v.contact}</td>
                                    <td>
                                        <button onClick={() => deleteData(i)}>Delete</button>
                                        <Link to={'/updateContact/' + i}>Update</Link>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                    }

                </thead>
            </table>
        </>
    )
}

export default ViewContact;