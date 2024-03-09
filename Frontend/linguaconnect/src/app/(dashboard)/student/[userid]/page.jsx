"use client";

import StudentDashboardMain from "@/app/ui/student_dashboard/StudentDashboardMain";
import StudentDashboardProfile from "@/app/ui/student_dashboard/StudentDashboardProfile";
import { StudentDashboardSidebar } from "@/app/ui/student_dashboard/StudentDashboardSidebar";
import { useEffect, useState } from "react";
import { student_profile } from "@/app/api/students_routes";

const Student_Dashboard = () => {
    const [user, setUser] = useState({student: {}});
	const getdata = async (userid) => {
		console.log(userid)
		const response=await student_profile(userid);
		if(response.status===200){
			console.log("success");
			console.log(response.data);
			setUser(response.data)
		}
		console.log(user);
	}
    useEffect(() => {
		const userid=typeof window !== "undefined" ? localStorage.getItem("userId") : null;
		getdata(userid);
	 }, []);
    return ( 
        <div className="h-screen w-full flex overflow-hidden select-none bg-gray-50">
            <StudentDashboardSidebar {...user}/>
            <StudentDashboardMain {...user}/>
            <StudentDashboardProfile {...user}/>
        </div>
     );
}

export default Student_Dashboard;