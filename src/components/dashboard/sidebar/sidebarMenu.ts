import path from 'path';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

export const sideBarItem = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: HiChartPie
    },
    {
        title: "user",
        path: "/dasboard/user",
        icon: HiUser
    },
    {
        title: "Setting",
        path: "/dasboard/setting",
        icon: HiViewBoards
    },
    {
        title: "Inbox",
        path: "/dasboard/inbox",
        icon: HiInbox
    },
    {
        title: "Sign In",
        path: "/dasboard/login",
        icon: HiArrowSmRight
    },
    {
        title: "Sign Up",
        path: "/dasboard/signup",
        icon: HiTable
    },
]