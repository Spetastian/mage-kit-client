let express = require('express')
let router = express.Router()
const codexList = require('../data/codex/codex-data')
const attacks = require('../data/spells/attacks')
const conjurations = require('../data/spells/conjurations')
const creatures = require('../data/spells/creatures')
const incantations = require('../data/spells/incantations')
const StandardResultLimit = 10;
const checksum = "abc123"

router.get("/spells", (req, res) => {

  const limit = req.query.limit || StandardResultLimit;
  const searchText = req.query.searchText || ''

  res.json([...attacks, ...conjurations, ...creatures, ...incantations]
    .filter((spell, index) => {
      return ((spell.name.toLowerCase().startsWith(searchText.toLowerCase()) || searchText === '') && index < limit)
    }))
})

router.get("/codex", (req, res) => {

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
