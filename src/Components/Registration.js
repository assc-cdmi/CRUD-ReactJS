import axios from "axios";
import { Link } from "react-router-dom";


function Registration() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        var data = {
            "Username": formData.get("userName"),
            "Email": formData.get("email"),
            "Password": formData.get("password"),
            "Name": formData.get("name")
        }
        await axios.post("https://p2carebackend.onrender.com/user/add", data)
            .then((res) => {
                console.log(res);
                document.getElementById("message").innerHTML = "Registration Successfully.";

                document.getElementById("userName").value = "";
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                document.getElementById("name").value = "";
            })
            .catch((err) => {
                console.log(err);
                document.getElementById("message").innerHTML = "Registration Not Successfully.";
            })
    }
    return (
        <>
            <div className="container p-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <form onSubmit={handleSubmit} id='registration'>
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h1>Registration</h1>
                                    </div>
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <label for="userName" class="form-label">Username</label>
                                            <input type="text" class="form-control" name="userName" id="userName" placeholder="Username" required />
                                        </div>
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
                                            <label for="name" class="form-label">Name</label>
                                            <input type="text" class="form-control" name="name" id="name" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="mb-3">
                                            <input type="submit" class="btn btn-primary" value={"Registration"} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        Already Account ? <Link to={"/login"}>Login Now</Link>
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

export default Registration;
