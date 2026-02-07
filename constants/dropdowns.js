import {
  ArrowLeftStartOnRectangleIcon,
  ArrowRightCircleIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  HomeIcon,
  LockClosedIcon,
  SparklesIcon,
  TrashIcon,
  UserCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";

export const new_dd = [
  {
    items: [
      {
        label: "New",
        href: "/new",
        icon: PlusIcon,
      },
      {
        label: "Duplicate",
        href: "#",
        icon: DocumentDuplicateIcon,
      },
    ],
  },
  {
    items: [
      {
        label: "Home",
        href: "/",
        icon: HomeIcon,
      },
      {
        label: "Lock",
        href: "#",
        icon: LockClosedIcon,
      },
    ],
  },
  {
    items: [
      {
        label: "Account",
        href: "#",
        icon: UserCircleIcon,
      },
      {
        label: "Add to favorites",
        href: "#",
        icon: HeartIcon,
      },
    ],
  },
  {
    items: [
      {
        label: "Delete",
        href: "#",
        icon: TrashIcon,
        danger: true, // optional future use
      },
    ],
  },
];
export const home_dd = [
  {
    items: [
      {
        label: "New",
        href: "/new",
        icon: PlusIcon,
      },
      {
        label: "Advanced search",
        href: "#",
        icon: SparklesIcon,
      },
    ],
  },
  {
    items: [
      {
        label: "Home",
        href: "/",
        icon: HomeIcon,
      },
      {
        label: "Lock",
        href: "#",
        icon: LockClosedIcon,
      },
    ],
  },
  {
    items: [
      {
        label: "Account",
        href: "#",
        icon: UserCircleIcon,
      },
      {
        label: "Favorites",
        href: "#",
        icon: HeartIcon,
      },
    ],
  },
  {
    items: [
      {
        label: "Logout",
        href: "#",
        icon: ArrowLeftStartOnRectangleIcon,
        danger: true, // optional future use
      },
    ],
  },
];
