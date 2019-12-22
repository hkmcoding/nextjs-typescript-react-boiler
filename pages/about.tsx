import React, { Component } from 'react'
import Layout from '../components/Layout'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'

type Props = {
    store: any
}

type State = {
    pageData: {}
}

@inject('store') @observer
class About extends Component<Props, State> {
    state = {
        pageData: toJS(this.props.store.data.about)
    }
    componentDidMount() {
        console.log(typeof this.props.store)
    }
    render() {
        return (
            <Layout>
                <h1>This will be the {this.state.pageData.pageName} page!</h1>
            </Layout>
        )
    }
}

export default About