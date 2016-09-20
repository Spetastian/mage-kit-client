"use strict"
import React from "react"

export default class SpellbookThumbnail extends React.Component {

        render (){
          return <div className="spellbook-thumbnail">
            <div>
              <span>{this.props.title} - </span>
            </div>
            <div>
              <span>{this.props.mage} - </span>
            </div>
            <div>
              <span>Points left: {120-this.props.totalMana} </span><br/>
            </div>
          </div>
        }
}
