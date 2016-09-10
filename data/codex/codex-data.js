module.exports = [
  {
    id: 1,
    name: "Activate",
    description: "When you choose to take an Action Phase with a creature you activate it. Flip its action marker over, and remove any guard marker on it."
  },
  {
    id: 2,
    name: "Aegis X",
    description: "All attacks made against this object subtract X attack dice before rolling. Attacks cannot be reduced below 1 die. The Aegis trait does not stack or combine with other Aegis traits. If an object acquires more than one Aegis trait, use only the highest one."
  },
  {
    id: 3,
    name: "Armor",
    description: "During an attack, Armor is subtracted from the normal damage rolled on the attack dice. It does not reduce critical damage. Armor cannot be reduced below 0."
  },
  {
    id: 4,
    name: "Autonomous",
    description: "This equipment is attached to a creature, and functions independently from that creature. It does not take up an equipment location. It is unaffected by, and cannot be modified by; traits, abilities, or conditions of the creature it is and objects. If the equipment provides an attack, that attack may be used once per round, as a free action, at the end of the creature’s Action Phase. If the attack is a melee attack, it must follow the normal rules for guarding; however, it will not trigger a counterstrike or damage barrier, and will not remove a guard marker from its target."
  },
  {
    id: 5,
    name: "Bashed",
    description: "When a creature is Pushed into a wall with the Passage Blocked trait it is bashed. It receives an Unavoidable attack of 3 attack dice of damage. The walls around the arena have the Passage Blocked trait."
  },
  {
    id: 6,
    name: "Blocks LoS",
    description: "This Wall blocks Line of Sight. You cannot target an object or a zone if the Line of Sight is blocked. (See “LoS” on page 21.)"
  },
  {
    id: 7,
    name: "Bloodthirsty +X",
    description: "This creature is a savage predator with a lust for blood. This creature gains +X attack dice when it makes a melee attack against a Living creature with 1 or more damage. If the attack makes multiple attacks against the same or different objects, it gains this bonus only for the first attack it makes. If there is a damaged Living enemy creature in the Bloodthirsty creature’s zone during its Action Phase, it must melee attack that creature (if possible). If there is more than one choice, or it has also been Taunted, it can choose which creature to attack."
  },
  {
    id: 8,
    name: "Burn",
    description: "Object is on fire. This is a Flame condition. Each Upkeep Phase, roll 1 attack die of direct damage for each Burn marker on each object. On a roll of “0”, remove that Burn marker. Burn markers have a removal cost of 2."
  },
  {
    id: 9,
    name: "Burnproof",
    description: "Cannot gain the Burn condition. May be vulnerable to flame damage, but cannot 'burn'. All Incorporeal objects are Burnproof."
  },
  {
    id: 10,
    name: "Cancel",
    description: "If a spell, attack, or effect is canceled, it stops and has no further effect."
  },
  {
    id: 11,
    name: "Cantrip",
    description: "Whenever this spell is destroyed, return it to the owner’s spellbook instead of their discard pile."
  },
  {
    id: 12,
    name: "Channeling",
    description: "Some objects have a Channeling attribute, which is how much mana they collect each round during the Channeling phase. Bonuses to channeling cannot effet an object without a channeling attribute. Channeling cannot be reduced below 0."
  },
  {
    id: 13,
    name: "Charge +X",
    description: "Creature gains +X attack dice for its very next melee attack, if it makes that attack immediately after it takes a move action, and moves at least 1 zone."
  },
  {
    id: 14,
    name: "Climbing",
    description: "Creature may take a special full action to climb over any Corporeal wall and move into the adjacent zone. If the wall has the Passage Attacks trait, It attacks the creature before it moves."
  },
  {
    id: 15,
    name: "Condition",
    description: "Conditions are various states that can occur for objects, and are indicated with markers placed on the object. All conditions stack and their effects are cumulative. (See “Effects & Conditions” on page 29.)."
  },
  {
    id: 16,
    name: "Controller",
    description: "Each spell or object in the game is controlled by the player who cast it. The controller may use and act with that object, and makes all decisions and choices for that spell or any abilities that object may have."
  },
  {
    id: 17,
    name: "Corporeal",
    description: "Corporeal objects are normal, physical objects. All creatures and conjurations are Corporeal, unless they have the Incorporeal trait."
  },
  {
    id: 18,
    name: "Counter",
    description: "A spell which has been countered does not resolve. It is destroyed and goes to the discard pile. All costs and actions spent to cast the spell are lost, unless otherwise noted."
  },
  {
    id: 19,
    name: "Counterstrike",
    description: "If a creature is the defender of a melee attack, and it has a quick action melee attack with the Counterstrike trait, it may use that attack against the attacker during the Counterstrike Step of the attack. (See “Counterstrike” on page 32.)."
  },
  /*
  {
    name: "Condition",
    description: ""
  },
  {
    name: "Condition",
    description: ""
  },
  {
    name: "Condition",
    description: ""
  },
  {
    name: "Condition",
    description: ""
  },
  {
    name: "Condition",
    description: ""
  },
  {
    name: "Condition",
    description: ""
  },
  {
    name: "Condition",
    description: ""
  },
*/
]
