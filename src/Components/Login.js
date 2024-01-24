import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { initializeData } from "../store/LoginData";

function Login() {

    const navigate = useNavigate();
    var dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        var data = {
            "Email": formData.get("email"),
            "Password": formData.get("password"),
        }
        await axios.post("https://p2carebackend.onrender.com/user/login", data)
            .then((res) => {
                console.log(res);
                if (res.data.status === "Successful") {
                    var data = res.data.data;
                    var userData = {
                        "Username": data.Username,
                        "Email": data.Email,
                        "Name": data.Name,
                        "Token": data.token,
                        "ID": data._id
                    }
                    dispatch(initializeData(userData));
                    navigate("/Dashboard");
                }
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
            })
            .catch((err) => {
                console.log(err);
                document.getElementById("message").innerHTML = "Login Not Successfully.";
            })
    }
    return (
        <>
            <div className="container p-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <form onSubmit={handleSubmit} id='login'>
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h1>Login</h1>
                                    </div>
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <label for="password" class="form-label">Password</label>
                                            <input type="password" class="form-control" name="password" id="password" placeholder="Password" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <input type="submit" class="btn btn-primary" value={"Login"} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        Not Account ? <Link to={"/"}>Registration Now</Link>
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

export default Login;