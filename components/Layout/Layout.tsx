import { ReactNode } from "react"

//import Header when it exists
//import Footer when it exists

type Props = {
    children: ReactNode
}

const Layout = (props: Props) => {
    return (
        // <Header />
        <main className={"container"}>
            {props.children}
        </main>
        // <Footer />
    )
}

export default Layout