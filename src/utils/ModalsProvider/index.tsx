import AddAdminModal from "../../components/Modals/AddAdminModal"
import DeleteCategoryModal from "../../components/Modals/DeleteCategoryModal"
import DeleteUserModal from "../../components/Modals/DeleteUserModal"
import DeleteAdminModal from "../../components/Modals/InfoAdminModal"
import { IChildren } from "../../interfaces/Global/IChildren"

const ModalsProvider = ({ children }: IChildren) => {
  return (
    <>
        <AddAdminModal />
        <DeleteAdminModal />
        <DeleteCategoryModal />
        <DeleteUserModal />
        {children}
    </>
  )
}

export default ModalsProvider