import React from 'react'

type Props = {
    icon: string;
}

const IconComponent = ({ icon }: Props) => {
  return (
    <i className={icon}></i>
  )
}

export default IconComponent