module.exports = [
  {
    id: 21,
    name: "Akiro's Battle Cry",
    type: "Incantation",
    subTypes: ["Command"],
    schools:
      [
        {name: "war", level: 4, operator: ""}
      ],
    manaCost: 14,
    actionType: "quick",
    range: [0,0],
    target: "arena",
    traits:["Epic", "Warlord Only"],
    description: "All friendly soldier creatures in the arena gain the Fast and Charge +2 traits, until the end of the round."
  },
    {
      id: 22,
      name: "Animate Dead",
      type: "Incantation",
      subTypes: ["Necro"],
      schools:
        [
          {name: "dark", level: 3, operator: ""}
        ],
      variableManaCost: true,
      actionType: "full",
      range: [0,0],
      target: "Discarded non-epic Living Creature",
      traits:["Dark Mage Only"],
      description: "Choose a non-Epic Living creature from any discard pile, and Summon it into your zone. Place damage on that creature equal to its level. Place a Zombie marker on that creature. X = half the creature's casting cost (rounded up)."
    },
      {
        id: 23,
        name: "Banish",
        type: "Incantation",
        subTypes: ["Teleport"],
        schools:
          [
            {name: "arcane", level: 3, operator: ""}
          ],
        manaCost: 14,
        actionType: "quick",
        range: [0,2],
        target: "Non-Mage Creature",
        traits:[],
        description: "Teleport target creature out of the arena. Place 3 Banish tokes on it. Remove 1 banish token each Upkeep Phase. When the final token is removed, return the creature to the last zone it was in. While out of the arena, this creature cannot take any actions, its action marker remains unchanged, and it can only be affected by attached spells, conditions, or its own traits and abilities."
      },
]
