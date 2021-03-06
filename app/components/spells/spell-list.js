"use strict"
import React from "react"
import Spell from './spell'

export default class SpellList extends React.Component {

    render (){

        const spellList = this.props.spells.map((spell,i)=>{

            return <div key={i} className="thumbnail-container col-3">
                <Spell
                    key={spell.id}
                    spell={spell}
                />
            </div>
        })

        return  <div className="row">{spellList}</div>
    }
}
