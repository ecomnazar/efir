import React from "react";
import ButtonWithLoading from "../../Buttons/ButtonWithLoading";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { closeDeleteConfirmationAdminModal, deleteAdmins } from "../../../services/AdminSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";
import MainModal from "../MainModal";

const DeleteAdminModal = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.admin.deleteConfirmationAdminModal.isLoading);
  const isOpenModal = useAppSelector((state) => state.admin.deleteConfirmationAdminModal.openModal);
  const activeAdminId = useAppSelector((state) => state.admin.activeAdminId)
  const handleCloseModal = () => {
    dispatch(closeDeleteConfirmationAdminModal())
  }

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(deleteAdmins(activeAdminId))
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

export default DeleteAdminModal;
