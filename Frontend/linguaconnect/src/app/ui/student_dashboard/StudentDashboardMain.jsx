import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useState } from "react";
import React from "react";

import { search_profile } from "@/app/api/teachers_routes";
import TeacherDashboardModalSidebar from "@/app/(dashboard)/teacher/[userid]/TeacherDashboardModalSidebar";
const StudentDashboardMain = (props) => {
  const name = props.student.fullName;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [teacher, setTeacher] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState([]);
  const [experience, setExperience] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [language, setLanguage] = useState([]);

  const handleSearchClick = (event) => {
    getdata(searchName, pricing, experience, language, setUsers);
  };

  const handleMentorConnection = (event) =>{
    addMentors();
  }

  const getdata = async (
    searchName,
    pricing,
    experience,
    language,
    setUsers
  ) => {
    const response = await search_profile(
      searchName,
      pricing,
      experience,
      language
    );
    if (response.status === 200) {
      console.log("success");
      console.log(response.data);
      setUsers(response.data.data);
    }
  };

  const addMentors = async () => {
    
  }
  return (
    <main
      className="my-1 pt-2 pb-2 px-10 flex-1 bg-blue-400 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-hidden"
    >
      <div className="flex flex-col capitalize text-3xl">
        <span className="font-semibold">hello, {name}!</span>
      </div>
      <div className="flex">
        <div
          className="mr-6 w-full mt-8 box-content py-2 flex-shrink-0 flex flex-col bg-blue-500
				dark:bg-gray-600 rounded-lg"
        >
          <div>
            <h3
              className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize dark:text-gray-300"
            >
              <span>Search for Tutors</span>
              <button className="ml-2">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                  <path
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"
                  ></path>
                </svg>
              </button>
            </h3>
          </div>
          <div className="w-[90%] flex-wrap md:flex-nowrap gap-14 mx-auto mt-4">
            <div className="flex mt-4 gap-4">
              <h1 className="text-center">Filters</h1>
              <Input
                type="text"
                label="language"
                size="xs"
                onChange={(e) => setLanguage(e.target.value)}
              />
              <Input
                type="text"
                label="experience"
                size="xs"
                onChange={(e) => setExperience(e.target.value)}
              />
              <Input
                type="text"
                label="pricing"
                size="xs"
                onChange={(e) => setPricing(e.target.value)}
              />
            </div>
            <div className="flex gap-4 mt-4">
              <Input
                type="text"
                label="Search"
                siz
                e="sm"
                onChange={(e) => setSearchName(e.target.value)}
              />
              <Dropdown>
                <DropdownTrigger>
                  <Button onClick={handleSearchClick}>Submit</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Link Actions" className="text-black">
                  {users.map((user) => (
                    <DropdownItem key={user.id}>
                      <button
                        className="mt-8 bg-purple-800 rounded-lg py-2 px-4"
                        onClick={() => {
                          onOpen();
                          setTeacher(user);
                        }}
                      >
                        {user.fullName}
                      </button>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
              height={400}
              width={400}
              alt=" empty schedule"
            />
            <span className="font-bold mt-8">Start Learning!</span>
            <span className="text-white">Make your first appointment</span>
            <Modal
              backdrop="blur"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      <p className="text-black">Details of the teacher</p>
                    </ModalHeader>
                    <ModalBody>
                      <TeacherDashboardModalSidebar {...teacher} />                    
                      </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button
                        color="primary"
                        onPress={() => {
                          // console.log(date, time, duration);
                          handleMentorConnection(teacher._id);
                          onClose();
                        }}
                      >
                        Save
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentDashboardMain;
