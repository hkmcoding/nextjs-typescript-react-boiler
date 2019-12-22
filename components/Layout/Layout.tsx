import React, { ReactNode } from 'react'
//import Header
//import Footer

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
    return (
        // <Header /> 
        <div className={"container"}>
            {props.children}
        </div>
        // <Footer /> 
    )
}

export default Layout