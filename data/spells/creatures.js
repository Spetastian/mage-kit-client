module.exports = [
  {
    id: 31,
    name: "Acolyte of the Bog Queen",
    type: "Creature",
    subTypes: ["Dark Elf", "Cleric"],
    schools:
      [
        {name: "dark", level: 1, operator: ""}
      ],
    manaCost: 5,
    actionType: "full",
    range: [0,0],
    target: "zone",
    armor: 0,
    life: 7,
    attacks: [
      {
        name: "Sacrificial Knife",
        actionType: "quick",
        range: [0,0],
        target: "object",
        damage: 2,
        traits: []
      },
      {
        name: "Repair Bones",
        actionType: "full",
        range: [0,1],
        target: "object",
        traits: ["Reconstruct 2 damage from target skeleton object."]
      },
      {
        name: "Vigor of the Grave",
        actionType: "full",
        range: [0,1],
        target: "object",
        traits: ["Target zombie creature gains the Melee +1 trait until end of round."]
      }
    ],
    traits:[],
    description: ""
  },

    {
      id: 32,
      name: "Adramelech, Lord of Fire",
      type: "Creature",
      subTypes: ["Demon"],
      schools:
        [
          {name: "dark", level: 4, operator: ""},
          {name: "fire", level: 2, operator: "and"},
        ],
      manaCost: 24,
      actionType: "full",
      range: [0,0],
      target: "zone",
      armor: 3,
      life: 14,
      attacks: [
        {
          name: "Hellfire Scythe",
          actionType: "quick",
          range: [0,0],
          target: "object",
          damageType: "Fire",
          damage: 6,
          effects: [{name: "burn", chance: [5, 9]}, {name: "2 burn", chance: [10, 12]}],
          traits: ["Defrost"]
        },
        {
          name: "Hellfire Sweep",
          actionType: "full",
          range: [0,0],
          target: "object",
          damageType: "Fire",
          damage: 4,
          effects: [{name: "burn", chance: [7, 10]}, {name: "2 burn", chance: [11, 12]}],
          traits: ["Sweeping", "Defrost"]
        },
      ],
      traits:["Flying", "Flame Immunity", "Legendary"],
      description: ""
    },

      {
        id: 33,
        name: "Anvil Throne Crossbowman",
        type: "Creature",
        subTypes: ["Dwarf", "Soldier"],
        schools:
          [
            {name: "war", level: 3, operator: ""},
          ],
        manaCost: 11,
        actionType: "full",
        range: [0,0],
        target: "zone",
        armor: 1,
        life: 8,
        attacks: [
          {
            name: "Crossbow Bolt",
            actionType: "full",
            range: [1,2],
            target: "object",
            damage: 3,
            effects: [],
            traits: ["Piercing +2"]
          },
          {
            name: "Small Axe",
            actionType: "quick",
            range: [0,0],
            target: "object",
            damage: 3,
            traits: []
          },
        ],
        traits:["Lightning +1"],
        description: ""
      }
]
