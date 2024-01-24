import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";


function EditProfile() {

    var userData = useSelector((state) => state.counter.userData);
    var dispatch = useDispatch();

    var navigator = useNavigate();
    useEffect(() => {
        if (userData.Email === "") {
            navigator("/");
        }

        document.getElementById("userName").value = userData.Username;
        document.getElementById("email").value = userData.Email;
        document.getElementById("name").value = userData.Name;

    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        var data = {
            "Username": formData.get("userName"),
            "Email": formData.get("email"),
            "Name": formData.get("name")
        }
        if (formData.get("password") != "") {
            data["Password"] = formData.get("password")
        }
        await axios.put(`https://p2carebackend.onrender.com/user/update/${userData.ID}`, {
            headers: {
                Authorization: `${userData.Token}`
            },
            data
        })
            .then((res) => {
                console.log(res);
                document.getElementById("message").innerHTML = "Update Data Successfully.";
            })
            .catch((err) => {
                console.log(err);
                document.getElementById("message").innerHTML = "Update Data Not Successfully.";
            })
    }
    return (
        <>
            <div className="container p-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <form onSubmit={handleSubmit} id='registration'>
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h3>Update Profile</h3>
                                    </div>
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <label for="userName" class="form-label">Username</label>
                                            <input type="text" class="form-control" name="userName" id="userName" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <label for="password" class="form-label">Password</label>
                                            <input type="password" class="form-control" name="password" id="password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <label for="name" class="form-label">Name</label>
                                            <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <input type="submit" class="btn btn-primary" value={"Update"} />
                                        </div>
                                    </div>
                                    <div id="message" className='text-center'>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile;
