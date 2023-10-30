import React from "react";
import ButtonWithLoading from "../../Buttons/ButtonWithLoading";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import MainModal from "../MainModal";
import { deleteUser, onCloseDeleteUserModal } from "../../../services/UsersSlice";

const DeleteUserModal = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.category.deleteCategoryModal.isLoading);
  const isOpenModal = useAppSelector((state) => state.users.deleteUserModal.isOpen);
  const activeUserId = useAppSelector((state) => state.users.activeUserId)
  const handleCloseModal = () => {
    dispatch(onCloseDeleteUserModal())
  }

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handleclick');
    
    dispatch(deleteUser(activeUserId))
  };

  return (
    <>
        <MainModal isOpen={isOpenModal} handleClick={handleCloseModal}>
          <form onSubmit={(e) => handleClick(e)}>
            <h1 className="text-whiteColor mb-4 text-xl text-center">Вы точно хотите удалить?</h1>
            <ButtonWithLoading title={"Да"} isLoading={isLoading} />
          </form>
        </MainModal>
    </>
  );
};

export default DeleteUserModal;
