import React from "react";

const StudentDashboardProfile = (props) => {
  const {fullName, userName, profilePic, email, classesAttended, examsAttended} = props.student;
  return (
    <aside
      className="w-1/4 my-1 mr-1 px-6 py-4 flex flex-col bg-gray-200 dark:bg-black
		dark:text-gray-400 rounded-r-lg overflow-y-auto"
    >
      <div className="flex items-center justify-between text-black">
        <a href="inbox/" className="relative">
          <span>
            <svg
              className="h-5 w-5 hover:text-red-600 dark-hover:text-red-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </span>

          <div className="absolute w-2 h-2 left-0 mb-6 ml-2 bottom-0">
            <span
              className="px-2 py-1 bg-red-600 rounded-full text-black
						text-xs"
            >
              7
            </span>
          </div>
        </a>

        <div className="flex items-center mx-auto">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src={profilePic}
            alt="tempest profile"
          />
        </div>
      </div>
      <span className="mt-4 text-gray-600">Total Classes Attended</span>
      <span className="mt-1 text-3xl font-semibold text-gray-600">{classesAttended==null?0:classesAttended.length}</span>
      <span className="mt-4 text-gray-600">Total Exams Attempted</span>
      <span className="mt-1 text-3xl font-semibold text-gray-600">{examsAttended==null?0:examsAttended.length}</span>
      <span
        className="mt-8 flex items-center py-4 px-3 text-white rounded-lg
			bg-green-400 shadow focus:outline-none justify-center "
      >
        <span className="text-2xl text-center">Ratings 4+</span>
      </span>

      <div className="mt-12 flex items-center">
        <span className="text-black">Top Scores</span>
        <button className="ml-2 focus:outline-none">
          <svg className="h-5 w-5 fill-black" viewBox="0 0 256 512">
            <path
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
						0l-22.6-22.6c-9.4-9.4-9.4-24.6
						0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3
						103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1
						34z"
            ></path>
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default StudentDashboardProfile;
