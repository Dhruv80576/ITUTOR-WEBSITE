import React from "react";

const TeacherDashboardModalSidebar = (props) => {
  const {fullName, userName, profilePic, email, classes, ratings, schedule, language, experience, cost} = props;
  return (
    <aside
      className="w-full my-1 mr-1 px-6 py-4 flex flex-col bg-gray-200 dark:bg-black
		dark:text-gray-400 rounded-r-lg overflow-y-auto"
    >
      <div className="flex items-center justify-between text-black w-full">
        <div className="items-center mx-auto w-[80%] ">
          <img
            className="h-20 w-20 rounded-full object-cover mx-auto"
            src={profilePic}
            alt="tempest profile"
          />
            <h1 className="text-center">{fullName}</h1>
            <h1 className="text-center text-sm text-muted-foreground">{userName}</h1>

        </div>
      </div>

      <div className="w-[80%] mx-auto">
        <div className="flex justify-between ">
            <div>
                <h1 className="mt-4 text-gray-600">Language</h1>
                <h1 className="mt-1 text-3xl font-semibold text-gray-600">{language}</h1>
            </div>
            <div>
                <h1 className="mt-4 text-gray-600">Experience</h1>
                <h1 className="mt-1 text-3xl font-semibold text-gray-600">{experience} years</h1>
            </div>
        </div>
        <div className="flex justify-between ">
            <div>
                <h1 className="mt-4 text-gray-600">Classes</h1>
                <h1 className="mt-1 text-3xl font-semibold text-gray-600">{classes}</h1>
            </div>
            <div>
                <h1 className="mt-4 text-gray-600">Cost</h1>
                <h1 className="mt-1 text-3xl font-semibold text-gray-600">{cost==null ? '0': cost}</h1>
            </div>
        </div>
      </div>
      <div className="mt-12 flex items-center">
        <span className="text-black">Avg Ratings</span>
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

export default TeacherDashboardModalSidebar;
