import { useDispatch, useSelector } from "react-redux";
import { deleteContact, sortData } from "../../Redux/Actions/ContactActions";
import { Link } from "react-router-dom";
import './ViewContact.css'
import { useState } from "react";
function ViewContact() {

    let [find, setFind] = useState([]);

    let details = useSelector((state) => state.contactRoot.contact);
    console.log(details, "details");

    let dispatch = useDispatch();

    let deleteData = (pos) => {
        dispatch(deleteContact(pos))
    }

    let sorting = (e) => {
        dispatch(sortData(e.target.value));
    }

    let searching = (e) => {
        e.preventDefault();
        setFind(e.target.value)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="heading">Contact List</h1>

                    <form method="post" className="searchSort" >
                        {/* searching */}
                        <div className="search">
                            <input type="search" name='search' onChange={(e) => searching(e)} placeholder='Search...' />
                        </div>

                        {/* sorting */}
                        <div className="sorting">
                            <select onChange={sorting} name="sorting">
                                <option hidden >-- Sort Username --</option>
                                <option value="ascending" >ASCENDING</option>
                                <option value="descending">DESCENDING</option>
                            </select>
                        </div>
                    </form>

                    <table border={0} cellPadding={7} cellSpacing={7} className="table">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact No.</th>
                                <th>Password</th>
                                <th>City</th>
                                <th>Gender</th>
                                <th>Time</th>
                                <th>Range</th>
                                <th>Actions</th>
                            </tr>
                            {details.filter((v, i) => {
                                if (find == '') {
                                    return v;
                                }
                                else if (v.username.toLocaleLowerCase().match(find.toLocaleLowerCase())) {
                                    return v;
                                }
                            })
                                .map((v, i) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{v.date}</td>
                                                <td>{v.username}</td>
                                                <td>{v.email}</td>
                                                <td>{v.phonenumber}</td>
                                                <td>{v.password}</td>
                                                <td>{v.city}</td>
                                                <td>{v.gender}</td>
                                                <td>{v.time}</td>
                                                <td>{v.range}</td>

                                                <td className="actions">
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
                </div>
            </div>
        </>
    )
}

export default ViewContact;