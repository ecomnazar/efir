import React from "react";
import ButtonWithLoading from "../../Buttons/ButtonWithLoading";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import MainModal from "../MainModal";
import { deleteCategory, onCloseDeleteCategoryModal } from "../../../services/CategorySlice";

const DeleteCategoryModal = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.category.deleteCategoryModal.isLoading);
  const isOpenModal = useAppSelector((state) => state.category.deleteCategoryModal.isOpen);
  const activeCategoryId = useAppSelector((state) => state.category.activeCategoryId)
  const handleCloseModal = () => {
    dispatch(onCloseDeleteCategoryModal())
  }

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(deleteCategory(activeCategoryId))
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

export default DeleteCategoryModal;
