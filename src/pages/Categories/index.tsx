import React from "react";
import SectionHeading from "../../components/Headings/SectionHeading";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  ICategoryData,
  addCategory,
  changeActiveCategoryId,
  fetchCategory,
  onOpenDeleteCategoryModal,
} from "../../services/CategorySlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { INumber, IString } from "../../interfaces/Global";
import { BiSolidEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Flex from "../../components/MiniComponents/Flex";

interface IInputs {
  name: IString;
}

const Categories = () => {
  const dispatch = useAppDispatch();
  const { register, setValue, handleSubmit } = useForm<IInputs>();
  const data: ICategoryData[] = useAppSelector((state) => state.category.data);
  React.useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const onAddCategory: SubmitHandler<IInputs> = (data) => {
    if (data.name !== "") {
      dispatch(addCategory(data.name));
      setValue("name", "");
    }
  };

  const onDeleteCategory = (id: INumber) => {
    dispatch(onOpenDeleteCategoryModal());
    dispatch(changeActiveCategoryId(id));
  };

  return (
    <>
      <Flex>
        <SectionHeading title={"Categories"} />
        <form
          onSubmit={handleSubmit(onAddCategory)}
          className="border-mainColor border-2 inline-block rounded-lg mb-4 mt-4"
        >
          <input
            className="bg-whiteColor px-4 py-2 outline-none rounded-tl-md rounded-bl-md"
            type="text"
            placeholder="New Category Add"
            {...register("name")}
          />
          <button
            type="submit"
            className="bg-blackColor text-whiteColor py-2 px-4 rounded-tr-md rounded-br-md"
          >
            ADD
          </button>
        </form>
      </Flex>
      <ul>
        {data.map((elem: ICategoryData) => {
          return (
            <li
              className={clsx(
                "bg-blackColor flex items-center justify-between p-4 mb-2 text-whiteColor rounded-md"
              )}
              key={elem.id}
            >
              <div className="flex items-center gap-x-2">
                <h1>ID: {elem.id}</h1>
                <p>{elem.name}</p>
              </div>
              <div className="flex items-center gap-x-4">
                <button>
                  <BiSolidEditAlt size={26} />
                </button>
                <button onClick={() => onDeleteCategory(elem.id)}>
                  <AiFillDelete size={26} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Categories;
