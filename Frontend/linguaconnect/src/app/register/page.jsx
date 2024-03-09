"use client";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { FaBeer } from "react-icons/fa";
import { register_student, register_teacher } from "../api/auth"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const montserrat = Montserrat({ weight: "700", subsets: ['latin'] })
const Register_User = () => {
    const router = useRouter();
    const [formstep, setFormStep] = useState(1);
    const [type, setType] = useState("");
    const [teacher, setTeacher] = useState({});
    const [student, setStudent] = useState({});
    const changeTeacher = (e) => {
        const { name, value } = e.target;
        setTeacher({ ...teacher, [name]: value, ['permissionType']: type });
    }

    const changeStudent = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value, ['permissionType']: type });
    }

    return (
        <div className="flex flex-row w-screen h-screen">
            <div className="flex flex-col items-center justify-start pt-[10%] w-[40%] bg-white h-screen overflow-y-scroll">
                <h1 className={`text-black font-bold text-3xl ${montserrat.className}`}>
                    Sign Up
                </h1>

                <div className="w-[400px] mt-10 justify-center flex flex-col">
                    <h1 className="text-black">{`Step ${formstep}`}</h1>
                    <div className="mb-2"></div>
                    <form>
                        {formstep == 1 && <div>
                            <div className="flex flex-col">
                                <Button onClick={() => {
                                    setFormStep(2)
                                    setType("Teacher")
                                }}>
                                    Teacher
                                </Button>
                                <div className="h-4"></div>
                                <Button onClick={() => {
                                    setFormStep(3)
                                    setType("Student")
                                }}>
                                    Student
                                </Button>

                            </div>
                        </div>}
                        {

                            formstep == 2 &&
                            <div className="flex flex-col mx-3 items-center justify-center">
                                <Input size='sm' type="text" label="Name" name="fullName" onChange={(e) => { changeTeacher(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="text" label="Username" name="userName" onChange={(e) => { changeTeacher(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="email" label="Email" name="email" onChange={(e) => { changeTeacher(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="password" label="Password" name="password" onChange={(e) => { changeTeacher(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="password" label="Confirm Password" name="confirmPassword" onChange={(e) => { changeTeacher(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="text" label="ProfilePic" name="profilePic" onChange={(e) => { changeTeacher(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="text" label="Gender" name="gender" onChange={(e) => { changeTeacher(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="text" label="Language" name="language" onChange={(e) => { changeTeacher(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="text" label="Experience" name="experience" onChange={(e) => { changeTeacher(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="text" label="Pricing" name="cost" onChange={(e) => { changeTeacher(e) }} />
                                <div className="h-4"></div>
                                <Button onClick={async () => {
                                    console.log(teacher)
                                    const response = await register_teacher(teacher);
                                    if (response.status == 200) {
                                        router.replace('/');
                                        toast.success("Teacher Registered Successfully")
                                    }
                                }}>
                                    Submit
                                </Button>
                            </div>
                        }
                        {
                            formstep == 3 && <div className="flex flex-col mx-3 items-center justify-center">
                                <Input size='sm' type="text" label="Name" name="fullName" onChange={(e) => { changeStudent(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="text" label="Username" name="userName" onChange={(e) => { changeStudent(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="email" label="Email" name="email" onChange={(e) => { changeStudent(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="password" label="Password" name="password" onChange={(e) => { changeStudent(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="password" label="Confirm Password" name="confirmPassword" onChange={(e) => { changeStudent(e) }} />
                                <div className="h-4"></div>

                                <Input size='sm' type="text" label="ProfilePic" name="profilePic" onChange={(e) => { changeStudent(e) }} />
                                <div className="h-4"></div>
                                <Input size='sm' type="text" label="Gender" name="gender" onChange={(e) => { changeStudent(e) }} />
                                <div className="h-4"></div>
                                <Button onClick={async () => {
                                    console.log(student)
                                    const response = await register_student(student)
                                    if (response.status == 200) {
                                        console.log('a');
                                        router.replace('/');
                                        toast.success("Student registeres successfully");
                                    }
                                }}>
                                    Submit
                                </Button>
                            </div>
                        }
                    </form>

                </div>

            </div>
        </div>

    );
}

export default Register_User;