import { GoHomeFill } from 'react-icons/go'
import { FaUserAlt } from 'react-icons/fa'
import { MdAdminPanelSettings } from 'react-icons/md'
import { IoSettingsSharp } from 'react-icons/io5'
import { FaHistory } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'

export const navLinks = [
    {
        title: 'General',
        link: '/',
        icon: <GoHomeFill size={22} />,
        onlySuperAdmin: false,
    },
    {
        title: 'Posts',
        link: '/posts',
        icon: <BiAddToQueue size={22} />,
        onlySuperAdmin: false,
    },
    {
        title: 'Stroies',
        link: '/stories',
        icon: <FaHistory size={19} />,
        onlySuperAdmin: false,
    },
    {
        title: 'Categories',
        link: '/categories',
        icon: <BiAddToQueue size={22} />,
        onlySuperAdmin: true,
    },
    {
        title: 'Users',
        link: '/users',
        icon: <FaUserAlt size={17} />,
        onlySuperAdmin: false,
    },
    {
        title: 'Admins',
        link: '/admins',
        icon: <MdAdminPanelSettings size={22} />,
        onlySuperAdmin: true,
    },
    {
        title: 'Settings',
        link: '/settings',
        icon: <IoSettingsSharp size={22} />,
        onlySuperAdmin: false,
    }
]