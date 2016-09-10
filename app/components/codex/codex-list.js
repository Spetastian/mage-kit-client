"use strict"
import React from "react"
import CodexListItem from './codex-list-item'
import InstantSearch from "../shared/instant-search"

class CodexList extends React.Component {

  render (){
        let codexList = this.props.items.map((item)=>{
          return <CodexListItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    />
        })

      return <div className="codex-list-holder">
      <div className="codex-search-holder">
        <InstantSearch
          onSearch={this.props.onSearch}
          placeholder={"Search codex"}
          />
        </div>
        <section className="codex-list">
          {codexList}
        </section>
      </div>
  }
}

export default CodexList
