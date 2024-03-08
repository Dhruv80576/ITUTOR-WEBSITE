"use client"
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";


const Register_User = () => {
    const [formstep, setFormStep] = useState(1);
    const [type, setType] = useState("student");
    const [teacher, setTeacher] = useState({});
    const changeTeacher = (e) => {
        const { name, value } = e.target;
        setTeacher({ ...teacher, [name]: value });
    }
    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col items-center justify-center">
                Register
            </div>
            <form>
                {formstep == 1 && <div>
                    <Button onClick={() => { setFormStep(2) }}>
                        Teacher
                    </Button>
                    <Button onClick={() => { setFormStep(3) }}>
                        Student
                    </Button>
                </div>}
                {
                    formstep == 2 &&
                    <div className="flex flex-col mx-3 items-center justify-center w-[20%]">
                        <Input size='sm' type="text" label="Name" name="name" onChange={(e) => { changeTeacher(e) }} />
                        <div className="h-4"></div>
                        <Input size='sm' type="text" label="Username" name="username" onChange={(e) => { changeTeacher(e) }} />
                        <div className="h-4"></div>
                        <Input size='sm' type="email" label="Email" name="email" onChange={(e) => { changeTeacher(e) }} />
                        <div className="h-4"></div>
                        <Input size='sm' type="text" label="Password" name="password" onChange={(e) => { changeTeacher(e) }} />
                        <div className="h-4"></div>
                        <Input size='sm' type="text" label="ProfilePic" name="profilePic" onChange={(e) => { changeTeacher(e) }} />
                        <div className="h-4"></div>
                        <Input size='sm' type="text" label="Gender" name="gender" onChange={(e) => { changeTeacher(e) }} />
                        <div className="h-4"></div>
                        <Input size='sm' type="text" label="Language" name="language" onChange={(e) => { changeTeacher(e) }} />
                        <div className="h-4"></div>
                        <Input size='sm' type="text" label="Proficiency" placeholder="Proficient|Expert|Beginner" name="proficiency" onChange={(e) => { changeTeacher(e) }} />
                        <div className="h-4"></div>
                        <Button onClick={() => {
                            console.log(teacher)
                        }}>
                            Submit
                        </Button>
                    </div>
                }
                {
                    formstep == 3 && <div>
                        <Button onClick={() => {
                        }}>
                            Submit
                        </Button>
                    </div>
                }
            </form>
        </div>
    );
}

export default Register_User;