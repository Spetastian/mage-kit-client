module.exports = [
  {
    id: 41,
    name: "Acid Ball",
    type: "Attack",
    subTypes: ["Acid"],
    schools:
      [
        {name: "water", level: 1, operator: ""}
      ],
    manaCost: 5,
    actionType: "quick",
    range: [0,2],
    target: "Creature or Conjuration",
    attacks: [
      {
        name: "",
        damageType: "Acid",
        damage: 2,
        effects: [{name: "corrode", chance: [1, 4]}, {name: "2 corrode", chance: [5, 12]}]
      },
    ],
    traits:[],
    description: ""
  },
  {
    id: 42,
    name: "Arc Lightning",
    type: "Attack",
    subTypes: ["Lightning"],
    schools:
      [
        {name: "air", level: 1, operator: ""}
      ],
    manaCost: 5,
    actionType: "quick",
    range: [0,1],
    target: "Creature or Conjuration",
    attacks: [
      {
        name: "",
        damageType: "Lightning",
        damage: 3,
        effects: [{name: "Daze", chance: [7, 8]}, {name: "Stun", chance: [9, 12]}]
      },
    ],
    traits:[],
    description: ""
  },
  {
    id: 43,
    name: "Blinding Flash",
    type: "Attack",
    subTypes: ["Light"],
    schools:
      [
        {name: "holy", level: 2, operator: ""}
      ],
    manaCost: 7,
    actionType: "full",
    range: [0,0],
    target: "Zone",
    attacks: [
      {
        name: "",
        target: "zone",
        damageType: "Light",
        damage: 2,
        effects: [{name: "Daze", chance: [4, 9]}, {name: "Stun", chance: [10, 12]}],
        traits: ["Etheral", "Unavoidable", "+2 vs Nonliving Creatures"]
      },
    ],
    traits:[],
    description: "Attacks all objects in the zone except the caster."
  },
]
