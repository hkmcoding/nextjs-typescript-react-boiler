import React from "react"
import Layout from "../components/Layout"
import { inject, observer } from "mobx-react"
import { toJS } from "mobx"

type Props = {
  store: any
}

type State = {
  pageData: {}
}

@inject('store') @observer
class Index extends React.Component<Props, State> {
  state = {
    pageData: toJS(this.props.store.data.homepage)
  }
  render() {
    return (
      <Layout>
        You are on the {this.state.pageData.pageName} page!
      </Layout>
    )
  }
}

export default Index