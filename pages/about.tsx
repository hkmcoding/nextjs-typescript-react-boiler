import React, { Component } from 'react'
import Layout from '../components/Layout'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import "../styles/pages/about.css"

interface Props {
    store?: any
}

interface State {
    pageData: {}
}

@inject('store') @observer
// An observer component watches the store for any data changes to know when to re-render the component
class About extends Component<Props, State> {
    state = {
        pageData: toJS(this.props.store.data.about)
    }
    componentDidMount() {
        setTimeout(() => this.props.store.updateName("Socks"), 3000)
    }
    render() {
        return (
            <Layout>
                <main className="about">
                    <span>Under construction! (Not really, I was just practicing using next/router and next/link)</span>
                    <span>Your name is: {this.props.store.name}</span>
                </main>
            </Layout>
        )
    }
}

export default About