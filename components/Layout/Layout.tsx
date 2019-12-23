import React, { ReactNode } from 'react'
import Header from "../Header"
import Footer from "../Footer"

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
    return (
        <>
            <Header /> 
            {props.children}
            <Footer /> 
        </>
    )
}

export default Layout