import React from 'react'
import clsx from 'clsx'

interface IFlex {
    children: React.ReactNode,
    cn?: string,
    disableJustifyBetween?: boolean,
    disableItemsCenter?: boolean
}

const Flex = ({ children, cn, disableItemsCenter=false, disableJustifyBetween=false }: IFlex) => {
  return (
    <div className={clsx(`flex`, {
        ['items-center']: disableItemsCenter === false,
        ['justify-between']: disableJustifyBetween === false,
        [cn!]: cn !== undefined
    })}>{children}</div>
  )
}

export default Flex