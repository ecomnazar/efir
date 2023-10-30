import React from "react";
import ButtonWithLoading from "../../Buttons/ButtonWithLoading";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addAdmins, closeAddAdminModal } from "../../../services/AdminSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";
import MainModal from "../MainModal";

const AddAdminModal = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.admin.postAdminModal.isLoading);
  const isOpenModal = useAppSelector((state) => state.admin.postAdminModal.openModal);
  const handleCloseModal = () => {
    dispatch(closeAddAdminModal())    
  }

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const username = e.target["username"].value;
    // @ts-ignore
    const password = e.target["password"].value;
    // @ts-ignore
    const region = e.target["region"].value;
    // @ts-ignore
    const phone_number = e.target["phoneNumber"].value;
    // @ts-ignore
    const gender = e.target["gender"].value;
    dispatch(addAdmins({ username, password, region, phone_number, gender }));
  };

  return (
    <>
        <MainModal isOpen={isOpenModal} handleClick={handleCloseModal}>
          <form onSubmit={(e) => handleClick(e)}>
            <input
              name="username"
              className="block w-full text-whiteColor bg-mainColor bg-transparent border-b border-whiteColor h-[50px] mb-2 px-4 outline-none"
              placeholder="Username"
            />
            <input
              name="password"
              className="block w-full text-whiteColor bg-mainColor bg-transparent border-b border-whiteColor h-[50px] mb-2 px-4 outline-none"
              placeholder="Password"
              type="password"
            />
            <input
              name="region"
              className="block w-full text-whiteColor bg-mainColor bg-transparent border-b border-whiteColor h-[50px] mb-2 px-4 outline-none"
              placeholder="Region"
            />
            <input
              name="phoneNumber"
              className="block w-full text-whiteColor bg-mainColor bg-transparent border-b border-whiteColor h-[50px] mb-2 px-4 outline-none"
              placeholder="Phone number"
            />
            <input
              name="gender"
              className="block w-full text-whiteColor bg-mainColor bg-transparent border-b border-whiteColor h-[50px] mb-2 px-4 outline-none"
              placeholder="Male/Female"
            />
            <ButtonWithLoading title={"Добавить админ"} isLoading={isLoading} />
          </form>
        </MainModal>
    </>
  );
};

export default AddAdminModal;
