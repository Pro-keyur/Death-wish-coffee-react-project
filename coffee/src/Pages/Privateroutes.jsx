import React from 'react'

const PrivateRoutes = ({children}) => {
    const token=localStorage.getItem("token")
    if(!token)
        {
            return <h1>You are not login</h1>
        }

  return children
}

export default PrivateRoutes