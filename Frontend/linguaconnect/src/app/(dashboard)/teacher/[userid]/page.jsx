"use client"
const Teacher_Dashboard = async () => {
    return (
		<div className="h-screen w-full flex overflow-hidden select-none bg-gray-50">
		<TeacherDashboardSidebar />
		<TeacherDashboardMain />
		<TeacherDashboardProfile />
		</div>

    );
}

export default Teacher_Dashboard;
