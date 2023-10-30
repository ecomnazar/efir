import clsx from 'clsx'
import { ICn } from '../../../interfaces/Global/ICn'

interface ISectionHeading extends ICn {
    title: string
}

const SectionHeading = ({ title, cn }: ISectionHeading) => {
  return (
    <h1 className={clsx("text-whiteColor font-bold text-[30px]", {
        [String(cn)]: cn
    })}>{title}</h1>
  )
}

export default SectionHeading