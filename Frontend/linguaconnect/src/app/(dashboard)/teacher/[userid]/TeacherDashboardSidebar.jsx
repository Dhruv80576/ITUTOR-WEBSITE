"use client"
import { useEffect, useState } from "react";

export const TeacherDashboardSidebar = () => {
  const [userid,setuserid]=useState(null);
  useEffect(() => {
    setuserid(typeof window !== "undefined" ? localStorage.getItem("userId") : null)
  },[])
  return (
    <div>
      <nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">
        <div>
          <svg
            className="h-8 w-8 fill-current text-blue-600 dark:text-blue-300"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
        6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
        15l5-2.73V16z"
            ></path>
          </svg>
        </div>

        <ul className="mt-2 text-gray-700 dark:text-gray-400 capitalize">
          <li className="mt-3 p-2 text-blue-600 dark:text-blue-300 rounded-lg">
            <a
              href="teacher-dashboard/"
              className=" flex flex-col items-center"
            >
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                8h-8v10h8V11m-10 4H3v6h8v-6z"
                ></path>
              </svg>
              <span className="text-xs mt-2">dashBoard</span>
            </a>
          </li>

          <li
            className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
    rounded-lg"
          >
            <a href="inbox/" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M23 3v-.5a2.5 2.5 0 00-5 0V3c-.55 0-1 .45-1 1v4c0
                .55.45 1 1 1h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1
                0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V3M6
                11h9v2H6v-2m0-4h9v2H6V7m16 4v5c0 1.11-.89 2-2 2H6l-4
                4V4a2 2 0 012-2h11v2H4v13.17L5.17 16H20v-5h2z"
                ></path>
              </svg>
              <span className="text-xs mt-2">messages</span>
            </a>
          </li>

          <li
            className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
    rounded-lg"
          >
            <a
              href="expenses-dashboard/"
              className=" flex flex-col items-center"
            >
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0
                012-2h14a2 2 0 012 2v1h-9a2 2 0 00-2 2v8a2 2 0 002
                2m0-2h10V8H12m4 5.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0
                011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5z"
                ></path>
              </svg>
              <span className="text-xs mt-2">earnings</span>
            </a>
          </li>

          <li
            className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
    rounded-lg"
          >
            <a href="meetup/" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2
                2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2m-2.47
                8.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59
                17l5.94-5.94z"
                ></path>
              </svg>
              <span className="text-xs mt-2">schedule</span>
            </a>
          </li>

          <li className="mt-3 p-2 hover:text-blue-600 rounded-lg">
            <a
              href={`/${userid}/meet/${1}}`}
              className=" flex flex-col items-center"
            >
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0
                001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"
                ></path>
              </svg>
              <span className="text-xs mt-2">lesson</span>
            </a>
          </li>
        </ul>
        <div
          className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full"
        >
          <a href="/">
            <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"
              ></path>
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
};
