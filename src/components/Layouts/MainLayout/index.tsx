import React from 'react'
import LeftSideNavbar from '../../LeftSideNavbar'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { fetchMe } from '../../../services/MeSlice'


const MainLayout = () => {
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(fetchMe())
  }, [])
  return (
      <div className='h-screen bg-blackColor relative overflow-y-hidden px-4 flex flex-col justify-center'>
        <LeftSideNavbar />        
        <section className='modal bg-primaryColor h-[calc(100vh-30px)] w-[calc(100vw-300px)] ml-auto p-4 rounded-xl overflow-y-scroll'>
            <Outlet />
        </section>
    </div>
  )
}

export default MainLayout