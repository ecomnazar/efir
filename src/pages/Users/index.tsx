import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { changeActiveUserId, fetchUsers, getUser, onOpenDeleteUserModal } from "../../services/UsersSlice";
import { IUsers } from "../../interfaces/Users/IUsers";
import clsx from "clsx";
import { AiFillStar } from 'react-icons/ai'
import { IString } from "../../interfaces/Global";

const Users = () => {
  const users: IUsers[] = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.users.userData.data)

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleUserClick = (id: IString) => {
    // dispatch(onOpenDeleteUserModal())
    // dispatch(changeActiveUserId(id))
    dispatch(getUser(id))
  }

  console.log(userProfile);
  
  

  return (
    <>
      {/* <Flex>
        <SectionHeading title={"Users"} />
        <div className="w-[400px] bg-[#ffffff] shadow-md rounded-xl overflow-hidden relative">
          <input
            className="py-3.5 pl-12 w-full outline-none bg-[#ffffff] "
            type="text"
            placeholder="Search here..."
          />
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <FiSearch size={25} />
          </div>
        </div>
      </Flex> */}
      <ul className="flex justify-around items-center bg-blackColor py-5 rounded-xl mb-8">
        <li className="font-medium basis-[18%] text-whiteColor cursor-default">Name</li>
        <li className="font-medium basis-[10%] text-whiteColor cursor-default">Place</li>
        <li className="font-medium basis-[10%] text-whiteColor cursor-default">Is Premium</li>
        <li className="font-medium basis-[12%] text-whiteColor cursor-default">Phone</li>
        <li className="font-medium basis-[5%] text-whiteColor cursor-default">Avatar</li>
      </ul>
      {users &&
          users.map((elem, index) => {
            return (
              <React.Fragment key={index}>
                <ul onClick={() => handleUserClick(elem.id)} className="flex justify-around items-center bg-blackColor py-4 rounded-xl mb-2 cursor-pointer">
                  <li className="font-medium basis-[18%] text-whiteColor cursor-pointer">{elem.username}</li>
                  <li className="font-medium basis-[10%] text-whiteColor cursor-pointer">{elem.region.name}</li>
                  <li className="font-medium basis-[10%] text-whiteColor cursor-pointer">{elem.is_premium && <AiFillStar size={25} color={'#B2820B'} />}</li>
                  <li className="font-medium basis-[12%] text-whiteColor cursor-pointer">{elem.phone_number}</li>
                  <li className="font-medium basis-[5%] text-whiteColor cursor-pointer"><div className={clsx("h-[30px] w-[30px] rounded-full overflow-hidden" )}>
                    <img className="w-full" src={elem.avatar ? elem.avatar : ''} alt="" />
                    </div></li>
                </ul>
              </React.Fragment>
            );
          })}
 
      {/* <UsersBlockGrid>
        {users?.map((elem: IUsers) => {
          return <UsersBlock key={elem.id} data={elem} />;
        })}
      </UsersBlockGrid> */}
    </>
  );
};

export default Users;
