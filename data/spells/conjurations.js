module.exports = [
  {
    id: 11,
    name: "Akiro's Hammer",
    type: "Conjuration",
    subTypes: ["War Machine"],
    schools:
      [
        {name: "war", level: 3, operator: ""}
      ],
    manaCost: 12,
    actionType: "quick",
    range: [0,1],
    target: "zone",
    armor: 2,
    life: 11,
    attacks: [
      {
        name: "Boulder",
        range: [2,3],
        target: "object",
        damage: 8,
        traits: ["Can only target Corporeal Conjurations"]
      },
      {
        name: "Rock Storm",
        range: [2,3],
        target: "zone",
        damage: 3,
        traits: ["Unavoidable"]
      }
    ],
    traits:["Zone Exclusive", "Flame +2", "Legendary", "Warlord Only"],
    description: "Akiro's Hammer starts with 1 Load token on it. Each Upkeep Phase place 1 token on it (to a maximum of 2). Before or after any friendly Action Phase, you may remove 2 tokens to make 1 of its 2 attacks listed."
  },
  {
    id: 12,
    name: "Altar of Carnage",
    type: "Conjuration",
    subTypes: ["Altar", "Artifact"],
    schools:
      [
        {name: "war", level: 2, operator: ""}
      ],
    manaCost: 8,
    actionType: "quick",
    range: [0,1],
    target: "zone",
    armor: 2,
    life: 8,
    traits:["Zone Exclusive", "Legendary", "War Mage Only", "Epic"],
    description: "Whenever a friendly soldier attacks and damages an enemy creature, you may place 1 mana on a friendly Spawnpoint or Familiar. Each friendly soldier may only trigger this ability once per round."
  },
  {
    id: 13,
    name: "Altar of Domination",
    type: "Conjuration",
    subTypes: ["Altar", "Artifact"],
    schools:
      [
        {name: "war", level: 2, operator: ""}
      ],
    manaCost: 9,
    actionType: "quick",
    range: [0,1],
    target: "zone",
    armor: 3,
    life: 8,
    traits:["Zone Exclusive", "Burnproof", "Warlord Only", "Epic"],
    description: "During the Upkeet Phase, if you control 3 or more outposts, place a Domination token on Altar of Domination. During the Deployment Phase, if there are 4 or more Domination tokens on Altar of Domination, you may retrieve Talos from your spellbook and Summon it to this zone at no mana cost. Then, destroy Altar of Domination."
  }
]
