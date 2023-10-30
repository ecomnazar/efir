import { BsTelephoneFill } from "react-icons/bs";
import { IAdminData, deleteAdmins } from "../../services/AdminSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import clsx from "clsx";
import { IUsers } from "../../interfaces/Users/IUsers";
import { AiFillStar } from 'react-icons/ai'

interface IUsersBlock {
  data: IUsers;
}

const UsersBlock = ({ data }: IUsersBlock) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(deleteAdmins(data.id));
    console.log(data.id);
  };

  return (
    <div
      onClick={handleClick}
      className="relative h-[265px] rounded-xl cursor-pointer py-8 px-4 bg-whiteColor shadow-xl hover:scale-[1.02] transition-all duration-300 text-center"
    >
      {/*  */}
      {data.is_premium && <div className="w-[30px] h-[30px] absolute top-[10px] left-[10px] flex items-center justify-center">
        <AiFillStar size={30} color={'#B2820B'} />
      </div>
      }
      {/*  */}
      <div className={clsx("w-[90px] h-[90px] mx-auto rounded-full overflow-hidden")}>
      <img className="w-full" src={data.avatar ? data.avatar : ''} alt="" />
      </div>
      <h2 className="font-bold mt-2">{data?.username}</h2>
      {/* <p className="text-[13px] text-darkGreyColor">
        Deisgner at SevenCreative
      </p> */}
      <p className="text-[13px] text-darkGreyColor">City: {data.city.name}</p>
      {/* <p className="text-[13px] text-darkGreyColor">Status: {data.is_superuser ? 'Pro' : 'Simple'}</p> */}
      <ul>
        <li className="flex items-center my-2">
          <div className="bg-lightBlueColor w-[30px] h-[30px] mr-2 rounded-md flex items-center justify-center">
            <BsTelephoneFill color="white" size={14} />
          </div>
          <p className="text-sm font-medium">{data?.phone_number ? data?.phone_number : 'Girizilmedi'}</p>
        </li>
        {/* <li className='flex items-center my-2'>
                                    <div className='bg-lightBlueColor w-[30px] h-[30px] mr-2 rounded-md flex items-center justify-center'><HiMail color='white' size={16} /></div>
                                    <p className='text-sm font-medium'>nazar.se7en@gmail.com</p>
                                </li> */}
      </ul>
    </div>
  );
};

export default UsersBlock;
