"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArrowRightCircleIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  HomeIcon,
  LockClosedIcon,
  TrashIcon,
  UserCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Ellipsis } from "lucide-react";

export default function DropDown() {
  return (
    <Menu as="div" className="relative inline-block text-left out outline-0">
      <div className="flex items-center">
        <MenuButton className=" rounded-md text-sm font-semibold text-gray-900 px-2 py-0 hover:bg-neutral-300">
          <Ellipsis />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              <PlusIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-400 group-data-focus:text-gray-500"
              />
              New
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              <DocumentDuplicateIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-400 group-data-focus:text-gray-500"
              />
              Duplicate
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              <HomeIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-400 group-data-focus:text-gray-500"
              />
              Home
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              <LockClosedIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-400 group-data-focus:text-gray-500"
              />
              Lock
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              <UserCircleIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-400 group-data-focus:text-gray-500"
              />
              Account
            </a>
          </MenuItem>
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              <HeartIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-400 group-data-focus:text-gray-500"
              />
              Add to favorites
            </a>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem className="group">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              <TrashIcon
                aria-hidden="true"
                className="mr-3 size-5 text-gray-400 group-data-focus:text-gray-500"
              />
              Delete
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
