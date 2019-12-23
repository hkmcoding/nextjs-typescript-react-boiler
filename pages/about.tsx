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
class About extends Component<Props, State> {
    state = {
        pageData: toJS(this.props.store.data.about)
    }
    render() {
        return (
            <Layout>
                <main className="about">
                    <span>
                        Under construction!
                    </span>
                    <p>
                        (Not really, I was just practicing using next/router and next/link)
                    </p>
                </main>
            </Layout>
        )
    }
}

export default About