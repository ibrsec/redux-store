import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../img/logo.png';

// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Team", href: "#", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Calendar", href: "#", current: false },
// ];

function classNames(...classes) {

  return classes.filter(Boolean).join(" ");
}

export default function Example() {

const basketLength = useSelector((state) => state.product.basket)?.length || 0
console.log('basketLength', basketLength) 
  const navigate = useNavigate();
  return (
    <Disclosure as="nav" className=" bg-[#4a506a]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:left-10 text-md sm:text-lg ">
                 <p className="text-white cursor-pointer" onClick={() => navigate("/")}>Redux Store</p>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    onClick={() => navigate("/")}
                    className="h-8 w-auto cursor-pointer"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={() => navigate("/basket")}
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>

                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute bg-red-600 text-red-100 px-2 py-1 text-[11px] font-semi rounded-full -top-3 -right-2">
                    {basketLength}
                  </span>
                </button>
 


              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
