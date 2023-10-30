import SectionHeading from '../../components/Headings/SectionHeading'
import Flex from '../../components/MiniComponents/Flex'
import { FiSearch } from 'react-icons/fi'

const Stories = () => {

  return (
    <>
      <Flex>
          <SectionHeading title={"Stories"} />
          <form
          // onSubmit={handleSubmit(onAddCategory)}
          className="border-mainColor border-2 inline-block rounded-lg mb-4 mt-4"
        >
          <input
            className="bg-whiteColor px-4 py-2 outline-none rounded-tl-md rounded-bl-md"
            type="text"
            placeholder="Search post"
            // {...register("name")}
          />
          <button
            type="submit"
            className="bg-blackColor text-whiteColor py-2 px-4 rounded-tr-md rounded-br-md"
          >
            Search
          </button>
        </form>
      </Flex>
      <div className='flex w-full mt-6'>
          <Flex cn='w-[400px] bg-whiteColor rounded-2xl p-8'>
            <div className='w-full h-full flex flex-col gap-y-2'>
              <input className='w-full focus:shadow-md px-4 py-[8px] outline-none border-[2px] rounded-md' placeholder='Name' />
              <textarea className='w-full focus:shadow-md px-4 py-[8px] outline-none border-[2px] rounded-md' placeholder='Description' />
              <input className='w-full focus:shadow-md px-4 py-[8px] outline-none border-[2px] rounded-md' type='number' placeholder='Expire hour' />
              <input className='w-full focus:shadow-md px-4 py-[8px] outline-none border-[2px] rounded-md' placeholder='Link' />
              <input className='w-full focus:shadow-md px-4 py-[8px] outline-none border-[2px] rounded-md' type='number' placeholder='Row' />
              <label className='bg-bg-mainColor text-whiteColor py-2 px-12 text-lg rounded-md font-medium text-center cursor-pointer' htmlFor="file">
                Upload File
              </label>
              <input type="file" id='file' className='hidden' />
            </div>
          </Flex>
      </div>
    </>
  )
}

export default Stories