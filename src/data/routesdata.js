import { MdMessage } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { FaVoteYea } from "react-icons/fa";
import { LuAlignVerticalSpaceBetween } from "react-icons/lu";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { FaHome, FaLock, FaUser } from "react-icons/fa";

export const routes = [
  {
    path: "/superadmin",
    name: "Super Admin",
    icon: <MdOutlineSupervisedUserCircle />,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/addvisitor",
    name: "Add Visitor",
    icon: <MdMessage />,
  },
  {
    path: "/logoutvisistors",
    name: "Logout Visitors",
    icon: <FaUser />,
  },

  {
    path: "/settings",
    name: "Reports",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/export",
        name: "Export as CSV",
        icon: <FaLock />,
      },
      {
        path: "/settings/yearlyreport",
        name: "Yearly Reports",
        icon: <FaVoteYea />,
      },
      {
        path: "/settings/betweendatesreport",
        name: "Between Dates",
        icon: <LuAlignVerticalSpaceBetween />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];
