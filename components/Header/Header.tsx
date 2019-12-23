import React from 'react'
import { inject, observer } from "mobx-react"
import { toJS } from "mobx"
import Link from "next/link"
import Head from "next/head"
import { withRouter } from "next/router"
import "./header.css"

interface Props {
    store?: any
    router: any
}

interface State {
    componentData: {}
}

// This allowed me to give my map a type, research into this
type LinkObject<K extends keyof any, T> = {
    [P in K]: T
}

@inject('store') @observer
class Header extends React.Component<Props, State> {
    state = {
        componentData: toJS(this.props.store.data.header)
    }
    componentDidMount() {
        console.log(this.props.router.pathname)
    }
    render() {
        return (
            <>
                <Head>
                    <title>New Stack</title>
                    <link href={"https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"} rel="stylesheet" />
                </Head>
                <header>
                    <ul>
                        {this.state.componentData.link.map((link: LinkObject<string, string>, i: number) => {
                            return (
                                this.props.router.pathname === link.path ? 
                                <li key={i} className="navigationlink active"><Link href={link.path}><a>{link.linkName}</a></Link></li>
                                :
                                <li key={i} className="navigationlink"><Link href={link.path}><a>{link.linkName}</a></Link></li>
                            )
                        })}
                    </ul>
                </header>
            </>
        )
    }
}

export default withRouter(Header)