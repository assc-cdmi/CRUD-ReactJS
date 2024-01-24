import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { initializeData } from "../store/LoginData";
import EditProfile from "./EditProfile";
import axios from "axios";

function UserDashboard() {

    var data = useSelector((state) => state.counter.userData);
    var dispatch = useDispatch();

    var navigator = useNavigate();
    useEffect(() => {
        if (data.Email === "") {
            navigator("/");
        }
    }, []);

    console.log(data);

    const handleLogout = () => {
        var userData = {
            "Username": "",
            "Email": "",
            "Name": "",
            "Token": "",
            "ID": ""
        }
        dispatch(initializeData(userData));
        navigator("/login");
    }
    const handleDelete = async () => {
        var userData = {
            "Username": "",
            "Email": "",
            "Name": "",
            "Token": "",
            "ID": ""
        }
        dispatch(initializeData(userData));
        await axios.delete(`https://p2carebackend.onrender.com/user/delete/${data.ID}`, {
            headers: {
                Authorization: `${data.Token}`
            }
        })
            .then((res) => {
                console.log(res);
                navigator("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="container p-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-9">
                        <div className="card p-3">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1>
                                        Welcome to ABC Institute.
                                    </h1>
                                </div>
                                <div className="col-12">
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Edit</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Logout</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-delete-tab" data-bs-toggle="pill" data-bs-target="#pills-delete" type="button" role="tab" aria-controls="pills-delete" aria-selected="false">Delete</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                            <table className="table table-bordered table-hover">
                                                <tr>
                                                    <th>
                                                        Username
                                                    </th>
                                                    <th>
                                                        Name
                                                    </th>
                                                    <th>
                                                        Email
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        {data.Username}
                                                    </td>
                                                    <td>
                                                        {data.Name}
                                                    </td>
                                                    <td>
                                                        {data.Email}
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                            <EditProfile />
                                        </div>
                                        <div class="tab-pane fade d-flex justify-content-center" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                                        </div>
                                        <div class="tab-pane fade d-flex justify-content-center" id="pills-delete" role="tabpanel" aria-labelledby="pills-delete-tab" tabindex="0">
                                            <button className="btn btn-danger" onClick={handleDelete}>Delete Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard;