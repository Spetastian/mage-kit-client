const express = require('express')
const router = express.Router()
const assert = require('assert')
const codexList = require('../data/codex/codex-data')
const attacks = require('../data/spells/attacks')
const conjurations = require('../data/spells/conjurations')
const creatures = require('../data/spells/creatures')
const incantations = require('../data/spells/incantations')
const StandardResultLimit = 10
const checksum = "abc123"

const spellbooks = [
  {name: "Facemelter", mage: "Adramelech warlock", totalMana: 118},
  {name: "Windwalker", mage: "Wizard, wind", totalMana: 120},
  {name: "Battle druid", mage: "Druid", totalMana: 119},
]

router.get("/test", (req, res) => {
  res.send("HEJ")
})

router.get("/spellbooks", (req, res) => {

  const limit = req.query.limit || StandardResultLimit
  const searchText = req.query.searchText || ''

  res.json(spellbooks
    .filter((spellbook, index) => {
      return ((spellbook.name.toLowerCase().startsWith(searchText.toLowerCase()) || searchText === '') && index < limit)
    }))
})

router.get("/spells", (req, res) => {

  const limit = req.query.limit || StandardResultLimit
  const searchText = req.query.searchText || ''

  res.json([ ...attacks, ...conjurations, ...creatures, ...incantations]
    .filter((spell, index) => {
      return ((spell.name.toLowerCase().startsWith(searchText.toLowerCase()) || searchText === '') && index < limit)
    }))
})

router.get("/codex", (req, res) => {
  assert(req.query.checksum)

  const checksumParam = req.query.checksum
  let hasChanged = false
  let codex = {}

  if(checksum !== checksumParam){
    hasChanged = true;
    codex.checksum = checksum
    codex.list = codexList
  }

  const result = {
    hasChanged : hasChanged,
    codex : codex
  }

  res.json(result)

})

module.exports = router
