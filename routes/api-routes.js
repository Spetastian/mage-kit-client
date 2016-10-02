const express = require('express')
const router = express.Router()
const assert = require('assert')
const codexList = require('../data/codex/codex-data')
const attacks = require('../data/spells/attacks')
const conjurations = require('../data/spells/conjurations')
const creatures = require('../data/spells/creatures')
const incantations = require('../data/spells/incantations')
const authenticationRequired = require('../middleware/authentication-required')
const jwt = require('jsonwebtoken')
const StandardResultLimit = 10
const checksum = "abc123"

function *idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

const idGenerator = idMaker()

const spellbooks = []

router.post("/authenticate", (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if(username.toLowerCase() === "sebbe" && password === "sebbe123"){
    const token = jwt.sign(user, app.get('jwtSecret'), {
      expiresInMinutes: 1440 // expires in 24 hours
    });
    return res.json({
      success: true,
      message: 'Enjoy your token!',
      token: token
    });
  }

  return res.json({
    success: false,
    message: 'Enjoy your token!',
    token: token
  });

})

router.get("/spellbooks", authenticationRequired, (req, res) => {

  const limit = req.query.limit || StandardResultLimit
  const searchText = req.query.searchText || ''

  res.json(spellbooks
    .filter((spellbook, index) => {
      return ((spellbook.name.toLowerCase().startsWith(searchText.toLowerCase()) || searchText === '') && index < limit)
    }))
})

router.post("/spellbooks", authenticationRequired, (req, res) => {
  const newSpellbook = {
    id : 4,
    name : "",
    mage : "",
    totalPoints : 0
  }

  spellbooks.push(newSpellbook)
  res.json(newSpellbook)
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
