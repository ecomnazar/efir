import clsx from 'clsx'
import { RotatingLines } from 'react-loader-spinner'

interface IButtonWithLoading {
    title: string,
    isLoading: boolean,
}

const ButtonWithLoading = ({ title, isLoading }: IButtonWithLoading) => {
    return (
    <button disabled={isLoading} className={clsx('w-full bg-secondaryColor text-whiteColor text-center h-[50px] flex items-center justify-center rounded-lg', {
        ['opacity-90']: isLoading === true,
    })}>{ isLoading ? <RotatingLines width='20' strokeColor='white' /> : title }</button>
  )
}

export default ButtonWithLoading