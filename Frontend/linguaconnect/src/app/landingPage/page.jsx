
"use client"
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { signin_teacher } from "../api/auth";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const montserrat = Montserrat({ weight: "700", subsets: ['latin'] })
const LandingPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const router=useRouter();
    return (

        <div className="flex flex-row w-screen h-screen">
            <div className="flex flex-col items-center justify-start pt-[10%] w-[40%] bg-white h-screen">
                <h1 className={`text-black font-bold text-3xl ${montserrat.className}`}>
                    Login
                </h1>
                <div className="w-[400px] mt-10 justify-center flex flex-col">
                    <Input type="text" label="Username" onChange={(e) => { setUsername(e.target.value) }} />
                    <div className="h-5"></div>
                    <Input type="password" label="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    <div className="h-5"></div>
                    
                    <Button className="" onClick={async () => {
                        const response = await signin_teacher({ "email": username, "password": password })
                        console.log(response)
                        if (response.status == 200) {
                            const Permission=response.data.user.permissionType.toLowerCase();
                            const userid=response.data.user._id;
                            localStorage.setItem('userId', userid);
                            localStorage.setItem('Permission', Permission);
                            router.replace(`${Permission}/${userid}`)
                            toast.success("Login Successfull")
                            console.log("Success")
                        }
                    }} color="secondary">
                        Submit
                    </Button>
                    
                </div>
                <div className="h-4"></div>
                    <h1 className="text-black">
                        {"Dont't have an account? "}
                        <span>
                            <Link href={'/register'} className="text-blue-700">
                                Sign up
                            </Link>
                        </span>
                    </h1>
            </div>
        </div>

    );
}

export default LandingPage;