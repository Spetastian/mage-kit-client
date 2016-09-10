"use strict"
import React from "react"

export default class CodexListItem extends React.Component {
        render (){
            return <article className="codex-list-item">
                <header><p><b>{this.props.name}</b></p></header>
                <section className="description"><p>{this.props.description}</p></section>
            </article>
        }
}
