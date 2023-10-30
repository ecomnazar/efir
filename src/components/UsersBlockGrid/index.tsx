import { IChildren } from '../../interfaces/Global/IChildren'

const UsersBlockGrid = ({ children }: IChildren) => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-8">
        {children}
    </div>
  )
}

export default UsersBlockGrid