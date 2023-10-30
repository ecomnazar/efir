import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { changeActiveAdminId, fetchAdmins, openAddAdminModal, openDeleteConfirmationAdminModal } from "../../services/AdminSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import clsx from "clsx";
import { IString } from "../../interfaces/Global";

const Admins = () => {
  const dispatch = useAppDispatch();
  const admins = useAppSelector((state) => state.admin.allAdmins.data);
  React.useEffect(() => {
    dispatch(fetchAdmins());
  }, []);
  
  const handleAddClick = () => dispatch(openAddAdminModal());

  const handleAdminClick = (id: IString) => {
    dispatch(openDeleteConfirmationAdminModal())
    dispatch(changeActiveAdminId(id))
    
    //SET ACTIVE ADMIN INDEX TO STORE AND DELETE ADMIN USING IT
  }
  

  return (
    <>
      <ul className="flex justify-around items-center bg-blackColor py-5 rounded-xl mb-8">
        <li className="font-medium basis-[20%] text-whiteColor cursor-default">Name</li> {/* NAME */}
        <li className="font-medium basis-[10%] text-whiteColor cursor-default">Place</li> {/* PLACE */}
        <li className="font-medium basis-[10%] text-whiteColor cursor-default">Created At</li> {/* WHEN CREATED */}
        <li className="font-medium basis-[10%] text-whiteColor cursor-default">Action</li> {/* ACTION */}
        <li className="font-medium basis-[5%] text-whiteColor cursor-default">Gender</li> {/* GENDER */}
      </ul>
      {admins &&
          admins.map((elem, index) => {
            return (
              <React.Fragment key={index}>
                <ul onClick={() => handleAdminClick(elem.id)} className="flex justify-around items-center bg-blackColor py-4 rounded-xl mb-2 cursor-pointer">
                  <li className="font-medium basis-[20%] text-whiteColor cursor-pointer">{elem.username}</li> {/* NAME */}
                  <li className="font-medium basis-[10%] text-whiteColor cursor-pointer">{elem.region}</li> {/* PLACE */}
                  <li className="font-medium basis-[10%] text-whiteColor cursor-pointer">12. 22. 2023</li> {/* WHEN CREATED */}
                  <li className="font-medium basis-[10%] text-whiteColor cursor-pointer">ADMIN</li> {/* ACTION */}
                  <li className="font-medium basis-[5%] text-whiteColor cursor-pointer"><div className={clsx("h-[30px] w-[30px] rounded-full", {
                    ['bg-red-300']: elem.gender === 'female',
                    ['bg-blue-300']: elem.gender === 'male',
                  })}></div></li> {/* GENDER */}
                </ul>
              </React.Fragment>
            );
          })}
          <ul onClick={handleAddClick} className="flex justify-around items-center bg-blackColor py-4 rounded-xl mb-2 cursor-pointer">
            <li className="font-medium text-whiteColor">ADD ADMIN</li> {/* ACTION */}
          </ul>
      {/* <SectionHeading title={"Admins"} /> */}
      {/* <UsersBlockGrid> */}
        {/* <button
          onClick={handleAddClick}
          className="h-[265px] rounded-xl cursor-pointer py-8 px-4 bg-whiteColor shadow-xl flex items-center justify-center hover:shadow-2xl transition-all"
        >
          <AiOutlinePlus size={40} />
        </button> */}
        {/* {admins &&
          admins.map((elem, index) => {
            return (
              <React.Fragment key={index}>
                <UsersBlock data={elem} />
              </React.Fragment>
            );
          })} */}
      {/* </UsersBlockGrid> */}
    </>
  );
};

export default Admins;
