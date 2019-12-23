import React from "react"
import Layout from "../components/Layout"
import { inject, observer } from "mobx-react"
import { toJS } from "mobx"
import "../styles/pages/index.css"

interface Props {
  store: any
}

interface State {
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
        <>
          <main className="index">
            <section className="column leftside">
              <span className="heading">Project Name:</span> 
              <span className="content">{this.state.pageData.leftSide.projectName}</span>
            </section>
            <section className="column rightside">
              <span className="heading">Project Description:</span>
              <span className="content description">{this.state.pageData.rightSide.projectDescription}</span>
            </section>
          </main>
        </>
      </Layout>
    )
  }
}

export default Index