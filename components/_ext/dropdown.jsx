"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
export default function DropDown({ list }) {
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
        {list.map((section, sectionIdx) => (
          <div key={sectionIdx} className="py-1">
            {section.items.map((item, itemIdx) => {
              const Icon = item.icon;

              return (
                <MenuItem key={itemIdx} className="group">
                  <Link
                    href={item.href}
                    className={`group flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 ${item.danger ? "text-red-400 data-focus:bg-red-100 data-focus:text-red-400" : " text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900"}`}
                  >
                    <Icon
                      aria-hidden="true"
                      className={`mr-3 size-5 ${item.danger ? "text-red-400 group-data-focus:text-red-400" : "text-gray-400"} group-data-focus:text-gray-500`}
                    />
                    {item.label}
                  </Link>
                </MenuItem>
              );
            })}
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}
