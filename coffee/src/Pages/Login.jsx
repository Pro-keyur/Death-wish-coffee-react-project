import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const userdata = { email, password }
        console.log(userdata)
        fetch("https://reqres.in/api/login", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)})
            .then((res) => res.json())
                .then((data) => {
                    if (data.token) {
                        localStorage.setItem("token", data.token);
                        document.getElementById("msg").textContent ="Login Successfully"
                        navigate("/products")
                    } else {
                        localStorage.removeItem("token");
                        document.getElementById("msg").textContent ="Invalid user"
                    }
                })
                .catch((err) => console.log(err))
    }



    return (
        <div>
            <form action="" onSubmit={handleSubmit} style={{textAlign:"center", color:"white"}}>
                <h1 style={{marginTop:"25px",color:"white"}}>Login </h1>
                <input className='log' type="text" onChange={(e) => setemail(e.target.value)} placeholder='Enter Email here...' style={{backgroundColor:"white"}} />
                <br />
                <br />
                <input className='log' type="text" onChange={(e) => setPassword(e.target.value)} placeholder='Password Email here...' style={{backgroundColor:"white"}}/>
                <br />
                <br />
                <input type="Submit" variant="outline-primary" style={{backgroundColor:"white"}}/>
                <h3 id='msg'></h3>
            </form>
        </div>

    )
}

export default Login