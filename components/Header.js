import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";


function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
            {/* left */}
            <div className="relative hidden lg:inline-grid w-24 cursor-pointer" >
                <Image
                    src="/pawsta logo 1.png"
                    layout="fill"
                    objectFit="contain" /> 
            </div>

            <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                <Image
                    src="/pawsta paw logo.png"
                    layout="fill"
                    objectFit="contain" /> 
            </div>

            {/* middle */}
            <div className="max-w-xs">
              <div className="relative mt-1 p-3 rounded-md">
                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" 
                  type="text" 
                  placeholder="Search"
                />
              </div>
            </div>

            {/* right */}
            <div className="flex items-center justify-end space-x-4">
              <HomeIcon className="navBtn"/>
              <MenuIcon className="h-6 md:hidden cursor-pointer"/>

              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5
                bg-red-500 rounded-full flex items-center justify-center
                text-white">
                  5
                </div>
              </div>

              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img 
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F09%2Fdog-dating-1.jpg"
                alt="profile pic"
                className="h-10 rounded-full cursor-pointer"
              />
            </div>

        </div>
    </div>
  ) 
}

export default Header;
