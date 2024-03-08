
"use client"
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { signin_teacher } from "../api/auth";

const LandingPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return (

        <div className="flex flex-row w-screen h-screen">
            <div className="flex flex-col items-center justify-start pt-[10%] w-[40%] bg-white h-screen">
                <h1 className="text-black">
                    Login
                </h1>
                <div className="m">
                    <Input type="text" label="Username" placeholder="Enter your Username" onChange={(e) => { setUsername(e.target.value) }} />
                    <Input type="password" label="Password" placeholder="Enter your Password" onChange={(e) => { setPassword(e.target.value) }} />
                    <Button onClick={async() => {
                        console.log(username, password)
                        const response=await signin_teacher({"email":username,"password":password})
                        console.log(response)
                        if(response.status==200){
                            console.log("Success")
                        }
                    }}>
                        Submit
                    </Button>
                </div>

                <h1>
                    {"Dont't have an account?"}
                </h1>
                <Button>
                    Sign Up
                </Button>
            </div>
        </div>

    );
}

export default LandingPage;