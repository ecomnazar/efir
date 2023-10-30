import { navLinks } from "../../constants/NavLinks";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

interface INavLinks {
  title: string;
  link: string;
  icon: any;
  onlySuperAdmin: boolean,
}

const LeftSideNavbar = () => {
  const data = useAppSelector((state) => state.me.data)
  return (
    <aside className="fixed bg-primaryColor w-[250px] h-[calc(100vh-30px)] p-4 rounded-xl">
      {/* <h1 className="text-whiteColor font-medium text-xl mb-2">
        Efir Admin
      </h1> */}
      <ul>
        {navLinks.map((elem: INavLinks, index: number) => {
          return (
            data?.is_superuser ? <li key={index} className="mb-2">
            <NavLink
              to={elem.link}
              className="navLink flex items-center gap-x-2 p-4 rounded-xl"
            >
              {elem.icon}
              <h4 className="font-medium text-whiteColor">{elem?.title}</h4>
            </NavLink>
          </li> : !elem?.onlySuperAdmin && <li key={index} className="mb-2">
            <NavLink
              to={elem.link}
              className="navLink flex items-center gap-x-2 p-4 rounded-xl"
            >
              {elem.icon}
              <h4 className="font-medium text-whiteColor">{elem?.title}</h4>
            </NavLink>
          </li>
          )
        })}
      </ul>
    </aside>
  );
};

export default LeftSideNavbar;
