"use client";
import {
  ArrowLeftStartOnRectangleIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  HomeIcon,
  LockClosedIcon,
  SparklesIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
const ICONS = {
  plus: PlusIcon,
  duplicate: DocumentDuplicateIcon,
  home: HomeIcon,
  lockclosed: LockClosedIcon,
  heart: HeartIcon,
  usercircle: UserCircleIcon,
  trash: TrashIcon,
  sparkles: SparklesIcon,
  arrowleft: ArrowLeftStartOnRectangleIcon,
};

import { useRouter } from "next/navigation";

export default function DropDown({ list }) {
  const router = useRouter();
  const logout = async () => {
    try {
      await fetch("/api/logout");
      router.replace("/signup");
    } catch (err) {
      router.replace("/signup");
    }
  };
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
              const Icon = ICONS[item.icon];

              return (
                <MenuItem key={itemIdx} className="group">
                  {!item.action ? (
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-300"
                      }`}
                    >
                      {Icon && <Icon className="mr-3 size-5" />}
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={logout}
                      className="flex items-center px-4 w-full transition-colors py-2 text-sm
                        text-red-400 data-focus:bg-red-100"
                    >
                      {Icon && <Icon className="mr-3 size-5" />}
                      Logout
                    </button>
                  )}
                </MenuItem>
              );
            })}
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}
