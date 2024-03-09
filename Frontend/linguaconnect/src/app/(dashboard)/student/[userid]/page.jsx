"use client"
import StudentDashboardMain from "@/app/ui/student_dashboard/StudentDashboardMain";
import StudentDashboardProfile from "@/app/ui/student_dashboard/StudentDashboardProfile";
import { StudentDashboardSidebar } from "@/app/ui/student_dashboard/StudentDashboardSidebar";
import NavBar from "@/app/ui/student_dashboard/navbar";

const Student_Dashboard = () => {
    return ( 
        <div className="h-screen w-full flex overflow-hidden select-none bg-gray-50">
            <StudentDashboardSidebar/>
            <StudentDashboardMain/>
            <StudentDashboardProfile/>
        </div>
     );
}

export default Student_Dashboard;