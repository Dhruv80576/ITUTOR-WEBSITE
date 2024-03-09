"use client"
import { teacher_profile } from "@/app/api/teachers_routes";
import { useEffect, useState } from "react";
import { TeacherDashboardSidebar } from "./TeacherDashboardSidebar";
import TeacherDashboardMain from "./TeacherDashboardMain";
import TeacherDashboardProfile from "./TeacherDashboardProfile";
import { ContextProvider } from "@/app/providers/MeetContext";

const Teacher_Dashboard = () => {
	const [user, setUser] = useState({ teacher: {} });
	const getdata = async (userid) => {
		console.log(userid)
		const response = await teacher_profile(userid);
		if (response.status === 200) {
			console.log("success");
			console.log(response.data);
			setUser(response.data)
		}
	}
	useEffect(() => {
		const userid = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
		getdata(userid);
	}, []);
	return (
			<div className="h-screen w-full flex overflow-hidden select-none bg-gray-50">
				<TeacherDashboardSidebar />
				<TeacherDashboardMain {...user} />
				<TeacherDashboardProfile />
			</div>
	);
}

export default Teacher_Dashboard;
