"use strict"
import React from "react"

export default class SpellbookThumbnail extends React.Component {

        render (){
          return <div className="thumbnail spellbook">
            <div>
              <span>{this.props.title} - </span>
            </div>
            <div>
              <span>{this.props.mage} - </span>
            </div>
            <div>
              <span>Cost: {this.props.totalMana}/120 </span><br/>
            </div>
          </div>
        }
}
