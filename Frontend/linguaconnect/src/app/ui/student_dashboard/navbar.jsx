import { Avatar } from "@nextui-org/react";

const NavBar = () => {
    return (
        <div className="fixed left-0 top-0 bg-blue-500 h-screen w-[250px] m-2 rounded-2xl p-4">
            <div className="flex flex-col items-center">
                <div className="h-10"></div>
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg"/>
                <div className="h-8"></div>
                <h1 className="self-start font-bold text-[18px]">Menu</h1>
                <h1></h1>
            </div>
        </div>
    );
}

export default NavBar;