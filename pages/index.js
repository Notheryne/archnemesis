import Head from 'next/head'
import _ from 'lodash';
import {useState, useEffect} from 'react';

const data = [{
    'name': 'Toxic',
    'img': 'http://www.vhpg.com/arimg/toxic.png',
    'effect': 'Monster has augmented Poison powers',
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}, {
        'name': 'Gems',
        'img': 'http://www.vhpg.com/arimg/HeistRewardGems.png'
    }],
    'recipe': []
}, {
    'name': 'Chaosweaver',
    'img': 'http://www.vhpg.com/arimg/chaosweaver.png',
    'effect': 'Monster is imbued with Chaos Damage and Resistance',
    'rewards': [{'name': 'Gems', 'img': 'http://www.vhpg.com/arimg/HeistRewardGems.png'}],
    'recipe': []
}, {
    'name': 'Frostweaver',
    'img': 'http://www.vhpg.com/arimg/frostweaver.png',
    'effect': 'Monster is imbued with Cold Damage and Resistance',
    'rewards': [{'name': 'Armour', 'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'}],
    'recipe': []
}, {
    'name': 'Permafrost',
    'img': 'http://www.vhpg.com/arimg/permafrost.png',
    'effect': 'Monster has augmented Freeze and Chill powers',
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}, {
        'name': 'Armour',
        'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'
    }],
    'recipe': []
}, {
    'name': 'Hasted',
    'img': 'http://www.vhpg.com/arimg/hasted.png',
    'effect': 'Monster is faster',
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}],
    'recipe': []
}, {
    'name': 'Deadeye',
    'img': 'http://www.vhpg.com/arimg/deadeye.png',
    'effect': 'Monster is Accurate and applies Marks',
    'rewards': [{'name': 'Armour', 'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'}, {
        'name': 'Trinkets',
        'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'
    }],
    'recipe': []
}, {
    'name': 'Bombardier',
    'img': 'http://www.vhpg.com/arimg/bombardier.png',
    'effect': 'Monster has augmented Projectile powers and periodically unleashes a barrage of mortars',
    'rewards': [{'name': 'Weapon', 'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'}, {
        'name': 'Armour',
        'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'
    }],
    'recipe': []
}, {
    'name': 'Flameweaver',
    'img': 'http://www.vhpg.com/arimg/flameweaver.png',
    'effect': 'Monster is imbued with Fire Damage and Resistance',
    'rewards': [{'name': 'Weapon', 'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'}],
    'recipe': []
}, {
    'name': 'Incendiary',
    'img': 'http://www.vhpg.com/arimg/incendiary.png',
    'effect': 'Monster has augmented Ignite powers',
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}, {
        'name': 'Weapon',
        'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'
    }],
    'recipe': []
}, {
    'name': 'Arcane Buffer',
    'img': 'http://www.vhpg.com/arimg/arcane-buffer.png',
    'effect': 'Monster has augmented Energy Shield powers and releases a stunning nova when Energy Shield breaks',
    'rewards': [{'name': 'Essences', 'img': 'http://www.vhpg.com/arimg/HeistRewardEssences.png'}],
    'recipe': []
}, {
    'name': 'Echoist',
    'img': 'http://www.vhpg.com/arimg/echoist.png',
    'effect': 'Monster repeats skills additional times',
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}, {
        'name': 'Currency',
        'img': 'http://www.vhpg.com/arimg/HeistRewardCurrency.png'
    }],
    'recipe': []
}, {
    'name': 'Stormweaver',
    'img': 'http://www.vhpg.com/arimg/stormweaver.png',
    'effect': 'Monster is imbued with Lightning Damage and Resistance',
    'rewards': [{'name': 'Trinkets', 'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'}],
    'recipe': []
}, {
    'name': 'Dynamo',
    'img': 'http://www.vhpg.com/arimg/dynamo.png',
    'effect': 'Monster has augmented Shock powers',
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}, {
        'name': 'Trinkets',
        'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'
    }],
    'recipe': []
}, {
    'name': 'Bonebreaker',
    'img': 'http://www.vhpg.com/arimg/bonebreaker.png',
    'effect': "Monster has augmented Stun powers. Monster hits are slower and can't be evaded",
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}, {
        'name': 'Weapon',
        'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'
    }],
    'recipe': []
}, {
    'name': 'Bloodletter',
    'img': 'http://www.vhpg.com/arimg/bloodletter.png',
    'effect': 'Monster has augmented Bleed powers. Monster Maims nearby enemies',
    'rewards': [{'name': 'Weapon', 'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'}, {
        'name': 'Trinkets',
        'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'
    }],
    'recipe': []
}, {
    'name': 'Steel-infused',
    'img': 'http://www.vhpg.com/arimg/steel-infused.png',
    'effect': 'Monster is imbued with Physical Damage and Physical Damage Reduction',
    'rewards': [{'name': 'Weapon', 'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'}],
    'recipe': []
}, {
    'name': 'Gargantuan',
    'img': 'http://www.vhpg.com/arimg/gargantuan.png',
    'effect': 'Monster is massive, granting more Life, Area of Effect, and Damage',
    'rewards': [{'name': 'Currency', 'img': 'http://www.vhpg.com/arimg/HeistRewardCurrency.png'}],
    'recipe': []
}, {
    'name': 'Berserker',
    'img': 'http://www.vhpg.com/arimg/berserker.png',
    'effect': 'Monster Enrages as it loses life',
    'rewards': [{'name': 'Uniques', 'img': 'http://www.vhpg.com/arimg/HeistRewardUniques.png'}],
    'recipe': []
}, {
    'name': 'Sentinel',
    'img': 'http://www.vhpg.com/arimg/sentinel.png',
    'effect': 'Monster is imbued with Block and Spell Block. Monster Triggers Reckoning when hit',
    'rewards': [{'name': 'Armour', 'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'}, {
        'name': 'Armour',
        'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'
    }],
    'recipe': []
}, {
    'name': 'Juggernaut',
    'img': 'http://www.vhpg.com/arimg/juggernaut.png',
    'effect': 'Monster cannot be Slowed or Stunned. Monster gains Endurance Charges',
    'rewards': [{'name': 'Harbinger', 'img': 'http://www.vhpg.com/arimg/HeistRewardHarbinger.png'}],
    'recipe': []
}, {
    'name': 'Vampiric',
    'img': 'http://www.vhpg.com/arimg/vampiric.png',
    'effect': 'Monster has augmented Life Leech powers',
    'rewards': [{'name': 'Fossils', 'img': 'http://www.vhpg.com/arimg/HeistRewardFossils.png'}],
    'recipe': []
}, {
    'name': 'Overcharged',
    'img': 'http://www.vhpg.com/arimg/overcharged.png',
    'effect': 'Monster grants Charges to itself and Allies over time',
    'rewards': [{'name': 'Trinkets', 'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'}, {
        'name': 'Trinkets',
        'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'
    }],
    'recipe': []
}, {
    'name': 'Soul Conduit',
    'img': 'http://www.vhpg.com/arimg/soul-conduit.png',
    'effect': 'On death, Monster and nearby Allies are revived',
    'rewards': [{'name': 'Maps', 'img': 'http://www.vhpg.com/arimg/HeistRewardMaps.png'}],
    'recipe': []
}, {
    'name': 'Opulent',
    'img': 'http://www.vhpg.com/arimg/opulent.png',
    'effect': 'Monster is fabulously wealthy',
    'rewards': [],
    'recipe': []
}, {
    'name': 'Malediction',
    'img': 'http://www.vhpg.com/arimg/malediction.png',
    'effect': 'Monster has a weakening Aura',
    'rewards': [{'name': 'DivinationCards', 'img': 'http://www.vhpg.com/arimg/HeistRewardDivination.png'}],
    'recipe': []
}, {
    'name': 'Consecrator',
    'img': 'http://www.vhpg.com/arimg/consecrator.png',
    'effect': 'Monster periodically creates Consecrated Ground, healing allies and making them immune to curses and ailments',
    'rewards': [{'name': 'Fragments', 'img': 'http://www.vhpg.com/arimg/HeistRewardFragments.png'}],
    'recipe': []
}, {
    'name': 'Frenzied',
    'img': 'http://www.vhpg.com/arimg/frenzied.png',
    'effect': 'Monster and allies periodically Enrage',
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}, {
        'name': 'Uniques',
        'img': 'http://www.vhpg.com/arimg/HeistRewardUniques.png'
    }],
    'recipe': []
}, {
    'name': 'Heralding Minions',
    'img': 'http://www.vhpg.com/arimg/heralding-minions.png',
    'effect': "Monster's minions summon invulnerable Lightning Totems on death",
    'rewards': [{
        'name': 'Fragments',
        'img': 'http://www.vhpg.com/arimg/HeistRewardFragments.png'
    }, {'name': 'Fragments', 'img': 'http://www.vhpg.com/arimg/HeistRewardFragments.png'}],
    'recipe': [{'name': 'Dynamo', 'img': 'http://www.vhpg.com/arimg/dynamo.png'}, {
        'name': 'Arcane Buffer',
        'img': 'http://www.vhpg.com/arimg/arcane-buffer.png'
    }]
}, {
    'name': 'Empowering Minions',
    'img': 'http://www.vhpg.com/arimg/empowering-minions.png',
    'effect': "Monster's minions are empowered. Minions empower the Monster with additional modifiers on death",
    'rewards': [{'name': 'Blight', 'img': 'http://www.vhpg.com/arimg/HeistRewardBlight.png'}, {
        'name': 'Ritual',
        'img': 'http://www.vhpg.com/arimg/RewardIconRitual.png'
    }],
    'recipe': [{'name': 'Necromancer', 'img': 'http://www.vhpg.com/arimg/necromancer.png'}, {
        'name': 'Executioner',
        'img': 'http://www.vhpg.com/arimg/executioner.png'
    }, {'name': 'Gargantuan', 'img': 'http://www.vhpg.com/arimg/gargantuan.png'}]
}, {
    'name': 'Assassin',
    'img': 'http://www.vhpg.com/arimg/assassin.png',
    'effect': 'Monster has augmented Critical powers and has Shroud Walker',
    'rewards': [{'name': 'Currency', 'img': 'http://www.vhpg.com/arimg/HeistRewardCurrency.png'}, {
        'name': 'Currency',
        'img': 'http://www.vhpg.com/arimg/HeistRewardCurrency.png'
    }],
    'recipe': [{'name': 'Deadeye', 'img': 'http://www.vhpg.com/arimg/deadeye.png'}, {
        'name': 'Vampiric',
        'img': 'http://www.vhpg.com/arimg/vampiric.png'
    }]
}, {
    'name': 'Trickster',
    'img': 'http://www.vhpg.com/arimg/trickster.png',
    'effect': 'Monster has damage avoidance. Monster periodically Flees',
    'rewards': [{'name': 'Currency', 'img': 'http://www.vhpg.com/arimg/HeistRewardCurrency.png'}, {
        'name': 'Uniques',
        'img': 'http://www.vhpg.com/arimg/HeistRewardUniques.png'
    }, {'name': 'DivinationCards', 'img': 'http://www.vhpg.com/arimg/HeistRewardDivination.png'}],
    'recipe': [{'name': 'Overcharged', 'img': 'http://www.vhpg.com/arimg/overcharged.png'}, {
        'name': 'Assassin',
        'img': 'http://www.vhpg.com/arimg/assassin.png'
    }, {'name': 'Echoist', 'img': 'http://www.vhpg.com/arimg/echoist.png'}]
}, {
    'name': 'Necromancer',
    'img': 'http://www.vhpg.com/arimg/necromancer.png',
    'effect': 'Monster can raise Undead. Minions are empowered and revive shortly after dying',
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}],
    'recipe': [{'name': 'Bombardier', 'img': 'http://www.vhpg.com/arimg/bombardier.png'}, {
        'name': 'Overcharged',
        'img': 'http://www.vhpg.com/arimg/overcharged.png'
    }]
}, {
    'name': 'Rejuvenating',
    'img': 'http://www.vhpg.com/arimg/rejuvenating.png',
    'effect': 'Monster has Life Regeneration. Periodically releases a wave that heals nearby allies and prevents enemy Life and Energy Shield recovery',
    'rewards': [{'name': 'Currency', 'img': 'http://www.vhpg.com/arimg/HeistRewardCurrency.png'}],
    'recipe': [{'name': 'Gargantuan', 'img': 'http://www.vhpg.com/arimg/gargantuan.png'}, {
        'name': 'Vampiric',
        'img': 'http://www.vhpg.com/arimg/vampiric.png'
    }]
}, {
    'name': 'Executioner',
    'img': 'http://www.vhpg.com/arimg/executioner.png',
    'effect': 'Monster gains Damage based on missing enemy Life. Monster has an aura that prevents enemies recovering Life and Energy Shield above 50%',
    'rewards': [{'name': 'Legion', 'img': 'http://www.vhpg.com/arimg/HeistRewardLegion.png'}, {
        'name': 'Breach',
        'img': 'http://www.vhpg.com/arimg/HeistRewardBreach.png'
    }],
    'recipe': [{'name': 'Frenzied', 'img': 'http://www.vhpg.com/arimg/frenzied.png'}, {
        'name': 'Berserker',
        'img': 'http://www.vhpg.com/arimg/berserker.png'
    }]
}, {
    'name': 'Hexer',
    'img': 'http://www.vhpg.com/arimg/hexer.png',
    'effect': 'Monster is Hexproof. Monster is followed by a Hexing Effigy that creates Hexing areas',
    'rewards': [{'name': 'Essences', 'img': 'http://www.vhpg.com/arimg/HeistRewardEssences.png'}, {
        'name': 'Essences',
        'img': 'http://www.vhpg.com/arimg/HeistRewardEssences.png'
    }],
    'recipe': [{'name': 'Chaosweaver', 'img': 'http://www.vhpg.com/arimg/chaosweaver.png'}, {
        'name': 'Echoist',
        'img': 'http://www.vhpg.com/arimg/echoist.png'
    }]
}, {
    'name': 'Drought Bringer',
    'img': 'http://www.vhpg.com/arimg/drought-bringer.png',
    'effect': 'Monster disables Flask effects on hit. Monster has an aura that drains Flask charges and prevents gaining Flask charges',
    'rewards': [{
        'name': 'Labyrinth',
        'img': 'http://www.vhpg.com/arimg/HeistRewardLabyrinth.png'
    }, {'name': 'Labyrinth', 'img': 'http://www.vhpg.com/arimg/HeistRewardLabyrinth.png'}],
    'recipe': [{'name': 'Malediction', 'img': 'http://www.vhpg.com/arimg/malediction.png'}, {
        'name': 'Deadeye',
        'img': 'http://www.vhpg.com/arimg/deadeye.png'
    }]
}, {
    'name': 'Entangler',
    'img': 'http://www.vhpg.com/arimg/entangler.png',
    'effect': 'Monster creates Thorned Vines that slow and deal Chaos Damage over time.',
    'rewards': [{'name': 'Fossils', 'img': 'http://www.vhpg.com/arimg/HeistRewardFossils.png'}, {
        'name': 'Fossils',
        'img': 'http://www.vhpg.com/arimg/HeistRewardFossils.png'
    }],
    'recipe': [{'name': 'Toxic', 'img': 'http://www.vhpg.com/arimg/toxic.png'}, {
        'name': 'Bloodletter',
        'img': 'http://www.vhpg.com/arimg/bloodletter.png'
    }]
}, {
    'name': 'Temporal Bubble',
    'img': 'http://www.vhpg.com/arimg/temporal-bubble.png',
    'effect': 'Monster is protected by a Temporal Bubble that severely slows those in it and cannot be damaged by those outside of it',
    'rewards': [{'name': 'Heist', 'img': 'http://www.vhpg.com/arimg/RewardIconHeist.png'}, {
        'name': 'Expedition',
        'img': 'http://www.vhpg.com/arimg/RewardIconExpedition.png'
    }],
    'recipe': [{'name': 'Juggernaut', 'img': 'http://www.vhpg.com/arimg/juggernaut.png'}, {
        'name': 'Hexer',
        'img': 'http://www.vhpg.com/arimg/hexer.png'
    }, {'name': 'Arcane Buffer', 'img': 'http://www.vhpg.com/arimg/arcane-buffer.png'}]
}, {
    'name': 'Treant Horde',
    'img': 'http://www.vhpg.com/arimg/treant-horde.png',
    'effect': "Monster's minions are replaced with powerful Treants. Some Damage taken from the monster is split between the Treants",
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}],
    'recipe': [{'name': 'Toxic', 'img': 'http://www.vhpg.com/arimg/toxic.png'}, {
        'name': 'Sentinel',
        'img': 'http://www.vhpg.com/arimg/sentinel.png'
    }, {'name': 'Steel-infused', 'img': 'http://www.vhpg.com/arimg/steel-infused.png'}]
}, {
    'name': 'Frost Strider',
    'img': 'http://www.vhpg.com/arimg/frost-strider.png',
    'effect': 'Monster leaves Chilling Ground in its wake. Minions create Frost Bearers on death',
    'rewards': [{'name': 'Armour', 'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'}, {
        'name': 'Armour',
        'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'
    }, {'name': 'Armour', 'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'}],
    'recipe': [{'name': 'Frostweaver', 'img': 'http://www.vhpg.com/arimg/frostweaver.png'}, {
        'name': 'Hasted',
        'img': 'http://www.vhpg.com/arimg/hasted.png'
    }]
}, {
    'name': 'Ice Prison',
    'img': 'http://www.vhpg.com/arimg/ice-prison.png',
    'effect': 'Monster periodically entraps players in a cage of ice',
    'rewards': [{'name': 'Armour', 'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'}, {
        'name': 'Armour',
        'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'
    }],
    'recipe': [{'name': 'Permafrost', 'img': 'http://www.vhpg.com/arimg/permafrost.png'}, {
        'name': 'Sentinel',
        'img': 'http://www.vhpg.com/arimg/sentinel.png'
    }]
}, {
    'name': 'Soul Eater',
    'img': 'http://www.vhpg.com/arimg/soul-eater.png',
    'effect': 'Monster empowers when nearby allies die. Periodically summons Phantasms',
    'rewards': [{'name': 'Maps', 'img': 'http://www.vhpg.com/arimg/HeistRewardMaps.png'}, {
        'name': 'Maps',
        'img': 'http://www.vhpg.com/arimg/HeistRewardMaps.png'
    }],
    'recipe': [{'name': 'Soul Conduit', 'img': 'http://www.vhpg.com/arimg/soul-conduit.png'}, {
        'name': 'Necromancer',
        'img': 'http://www.vhpg.com/arimg/necromancer.png'
    }, {'name': 'Gargantuan', 'img': 'http://www.vhpg.com/arimg/gargantuan.png'}]
}, {
    'name': 'Flame Strider',
    'img': 'http://www.vhpg.com/arimg/flame-strider.png',
    'effect': 'Monster leaves Burning Ground in its wake. Minions create Flame Bearers on death',
    'rewards': [{'name': 'Weapon', 'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'}, {
        'name': 'Weapon',
        'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'
    }, {'name': 'Weapon', 'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'}],
    'recipe': [{'name': 'Flameweaver', 'img': 'http://www.vhpg.com/arimg/flameweaver.png'}, {
        'name': 'Hasted',
        'img': 'http://www.vhpg.com/arimg/hasted.png'
    }]
}, {
    'name': 'Corpse Detonator',
    'img': 'http://www.vhpg.com/arimg/corpse-detonator.png',
    'effect': 'Monster detonates nearby Corpses. Monster periodically creates Corpses',
    'rewards': [{
        'name': 'DivinationCards',
        'img': 'http://www.vhpg.com/arimg/HeistRewardDivination.png'
    }, {'name': 'DivinationCards', 'img': 'http://www.vhpg.com/arimg/HeistRewardDivination.png'}],
    'recipe': [{'name': 'Necromancer', 'img': 'http://www.vhpg.com/arimg/necromancer.png'}, {
        'name': 'Incendiary',
        'img': 'http://www.vhpg.com/arimg/incendiary.png'
    }]
}, {
    'name': 'Evocationist',
    'img': 'http://www.vhpg.com/arimg/evocationist.png',
    'effect': 'Monster is imbued with Elemental Damage, Resistances and Ailments',
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}, {
        'name': 'Weapon',
        'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'
    }, {'name': 'Armour', 'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'}, {
        'name': 'Trinkets',
        'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'
    }],
    'recipe': [{'name': 'Flameweaver', 'img': 'http://www.vhpg.com/arimg/flameweaver.png'}, {
        'name': 'Frostweaver',
        'img': 'http://www.vhpg.com/arimg/frostweaver.png'
    }, {'name': 'Stormweaver', 'img': 'http://www.vhpg.com/arimg/stormweaver.png'}]
}, {
    'name': 'Magma Barrier',
    'img': 'http://www.vhpg.com/arimg/magma-barrier.png',
    'effect': 'Monster is protected by a Magmatic shield that explodes when depleted. Monster periodically creates Volatile Flamebloods',
    'rewards': [{'name': 'Weapon', 'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'}, {
        'name': 'Weapon',
        'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'
    }],
    'recipe': [{'name': 'Incendiary', 'img': 'http://www.vhpg.com/arimg/incendiary.png'}, {
        'name': 'Bonebreaker',
        'img': 'http://www.vhpg.com/arimg/bonebreaker.png'
    }]
}, {
    'name': 'Mirror Image',
    'img': 'http://www.vhpg.com/arimg/mirror-image.png',
    'effect': 'Monster can create illusions of itself',
    'rewards': [{'name': 'Scarabs', 'img': 'http://www.vhpg.com/arimg/HeistRewardScarabs.png'}],
    'recipe': [{'name': 'Echoist', 'img': 'http://www.vhpg.com/arimg/echoist.png'}, {
        'name': 'Soul Conduit',
        'img': 'http://www.vhpg.com/arimg/soul-conduit.png'
    }]
}, {
    'name': 'Storm Strider',
    'img': 'http://www.vhpg.com/arimg/storm-strider.png',
    'effect': 'Monster leaves Shocking Ground in its wake and spawns Lightning Mirages when hit. Minions create Storm Bearers on death',
    'rewards': [{'name': 'Trinkets', 'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'}, {
        'name': 'Trinkets',
        'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'
    }, {'name': 'Trinkets', 'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'}],
    'recipe': [{'name': 'Stormweaver', 'img': 'http://www.vhpg.com/arimg/stormweaver.png'}, {
        'name': 'Hasted',
        'img': 'http://www.vhpg.com/arimg/hasted.png'
    }]
}, {
    'name': 'Mana Siphoner',
    'img': 'http://www.vhpg.com/arimg/mana-siphoner.png',
    'effect': 'Monster is surrounded by a ring that deals Lightning Damage over time as well as draining Mana',
    'rewards': [{'name': 'Trinkets', 'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'}, {
        'name': 'Trinkets',
        'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'
    }],
    'recipe': [{'name': 'Consecrator', 'img': 'http://www.vhpg.com/arimg/consecrator.png'}, {
        'name': 'Dynamo',
        'img': 'http://www.vhpg.com/arimg/dynamo.png'
    }]
}, {
    'name': 'Corrupter',
    'img': 'http://www.vhpg.com/arimg/corrupter.png',
    'effect': 'Monster inflicts Corrupted Blood on Hit and when Hit. Minions create Corrupted Bubbles on death',
    'rewards': [{'name': 'Abyss', 'img': 'http://www.vhpg.com/arimg/HeistRewardAbyss.png'}, {
        'name': 'Abyss',
        'img': 'http://www.vhpg.com/arimg/HeistRewardAbyss.png'
    }],
    'recipe': [{'name': 'Bloodletter', 'img': 'http://www.vhpg.com/arimg/bloodletter.png'}, {
        'name': 'Chaosweaver',
        'img': 'http://www.vhpg.com/arimg/chaosweaver.png'
    }]
}, {
    'name': 'Invulnerable',
    'img': 'http://www.vhpg.com/arimg/invulnerable.png',
    'effect': 'Monster and its Minions periodically become immune to all Damage. Minions cannot die while Monster is alive',
    'rewards': [{
        'name': 'Delirium',
        'img': 'http://www.vhpg.com/arimg/HeistRewardDelirium.png'
    }, {'name': 'Metamorphosis', 'img': 'http://www.vhpg.com/arimg/HeistRewardMetamorph.png'}],
    'recipe': [{'name': 'Sentinel', 'img': 'http://www.vhpg.com/arimg/sentinel.png'}, {
        'name': 'Juggernaut',
        'img': 'http://www.vhpg.com/arimg/juggernaut.png'
    }, {'name': 'Consecrator', 'img': 'http://www.vhpg.com/arimg/consecrator.png'}]
}, {
    'name': 'Crystal-skinned',
    'img': 'http://www.vhpg.com/arimg/crystal-skinned.png',
    'effect': 'Monster triggers the creation of Crystals when hit. Crystals explode when the Monster dies',
    'rewards': [{
        'name': 'Harbinger',
        'img': 'http://www.vhpg.com/arimg/HeistRewardHarbinger.png'
    }, {'name': 'Harbinger', 'img': 'http://www.vhpg.com/arimg/HeistRewardHarbinger.png'}],
    'recipe': [{'name': 'Permafrost', 'img': 'http://www.vhpg.com/arimg/permafrost.png'}, {
        'name': 'Rejuvenating',
        'img': 'http://www.vhpg.com/arimg/rejuvenating.png'
    }, {'name': 'Berserker', 'img': 'http://www.vhpg.com/arimg/berserker.png'}]
}, {
    'name': 'Empowered Elements',
    'img': 'http://www.vhpg.com/arimg/empowered-elements.png',
    'effect': 'Monster cycles between imbued damage of a particular type and immunity to all other damage types',
    'rewards': [{'name': 'Uniques', 'img': 'http://www.vhpg.com/arimg/HeistRewardUniques.png'}, {
        'name': 'Uniques',
        'img': 'http://www.vhpg.com/arimg/HeistRewardUniques.png'
    }],
    'recipe': [{'name': 'Evocationist', 'img': 'http://www.vhpg.com/arimg/evocationist.png'}, {
        'name': 'Steel-infused',
        'img': 'http://www.vhpg.com/arimg/steel-infused.png'
    }, {'name': 'Chaosweaver', 'img': 'http://www.vhpg.com/arimg/chaosweaver.png'}]
}, {
    'name': 'Effigy',
    'img': 'http://www.vhpg.com/arimg/effigy.png',
    'effect': 'Monster creates an Effigy of the player. Damage dealt to the Effigy is also reflected to the bonded player',
    'rewards': [{
        'name': 'DivinationCards',
        'img': 'http://www.vhpg.com/arimg/HeistRewardDivination.png'
    }, {'name': 'DivinationCards', 'img': 'http://www.vhpg.com/arimg/HeistRewardDivination.png'}],
    'recipe': [{'name': 'Hexer', 'img': 'http://www.vhpg.com/arimg/hexer.png'}, {
        'name': 'Malediction',
        'img': 'http://www.vhpg.com/arimg/malediction.png'
    }, {'name': 'Corrupter', 'img': 'http://www.vhpg.com/arimg/corrupter.png'}]
}, {
    'name': 'Lunaris-touched',
    'img': 'http://www.vhpg.com/arimg/lunaris-touched.png',
    'effect': 'Monster uses the abilities of Lunaris',
    'rewards': [{'name': 'Uniques', 'img': 'http://www.vhpg.com/arimg/HeistRewardUniques.png'}],
    'recipe': [{'name': 'Invulnerable', 'img': 'http://www.vhpg.com/arimg/invulnerable.png'}, {
        'name': 'Frost Strider',
        'img': 'http://www.vhpg.com/arimg/frost-strider.png'
    }, {'name': 'Empowering Minions', 'img': 'http://www.vhpg.com/arimg/empowering-minions.png'}]
}, {
    'name': 'Solaris-touched',
    'img': 'http://www.vhpg.com/arimg/solaris-touched.png',
    'effect': 'Monster uses the abilities of Solaris',
    'rewards': [{'name': 'Scarabs', 'img': 'http://www.vhpg.com/arimg/HeistRewardScarabs.png'}],
    'recipe': [{'name': 'Invulnerable', 'img': 'http://www.vhpg.com/arimg/invulnerable.png'}, {
        'name': 'Magma Barrier',
        'img': 'http://www.vhpg.com/arimg/magma-barrier.png'
    }, {'name': 'Empowering Minions', 'img': 'http://www.vhpg.com/arimg/empowering-minions.png'}]
}, {
    'name': 'Arakaali-touched',
    'img': 'http://www.vhpg.com/arimg/arakaali-touched.png',
    'effect': 'Monster uses the abilities of Arakaali',
    'rewards': [{'name': 'DivinationCards', 'img': 'http://www.vhpg.com/arimg/HeistRewardDivination.png'}],
    'recipe': [{
        'name': 'Corpse Detonator',
        'img': 'http://www.vhpg.com/arimg/corpse-detonator.png'
    }, {'name': 'Entangler', 'img': 'http://www.vhpg.com/arimg/entangler.png'}, {
        'name': 'Assassin',
        'img': 'http://www.vhpg.com/arimg/assassin.png'
    }]
}, {
    'name': 'Brine King-touched',
    'img': 'http://www.vhpg.com/arimg/brine-king-touched.png',
    'effect': 'Monster uses the abilities of the Brine King',
    'rewards': [{'name': 'Armour', 'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'}, {
        'name': 'Armour',
        'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'
    }, {'name': 'Armour', 'img': 'http://www.vhpg.com/arimg/HeistRewardArmour.png'}],
    'recipe': [{'name': 'Ice Prison', 'img': 'http://www.vhpg.com/arimg/ice-prison.png'}, {
        'name': 'Storm Strider',
        'img': 'http://www.vhpg.com/arimg/storm-strider.png'
    }, {'name': 'Heralding Minions', 'img': 'http://www.vhpg.com/arimg/heralding-minions.png'}]
}, {
    'name': 'Tukohama-touched',
    'img': 'http://www.vhpg.com/arimg/tukohama-touched.png',
    'effect': 'Monster uses the abilities of Tukohama',
    'rewards': [{'name': 'Weapon', 'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'}, {
        'name': 'Weapon',
        'img': 'http://www.vhpg.com/arimg/HeistRewardWeapon.png'
    }, {'name': 'Fragments', 'img': 'http://www.vhpg.com/arimg/HeistRewardFragments.png'}],
    'recipe': [{'name': 'Bonebreaker', 'img': 'http://www.vhpg.com/arimg/bonebreaker.png'}, {
        'name': 'Executioner',
        'img': 'http://www.vhpg.com/arimg/executioner.png'
    }, {'name': 'Magma Barrier', 'img': 'http://www.vhpg.com/arimg/magma-barrier.png'}]
}, {
    'name': 'Abberath-touched',
    'img': 'http://www.vhpg.com/arimg/abberath-touched.png',
    'effect': 'Monster uses the abilities of Abberath',
    'rewards': [{'name': 'Trinkets', 'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'}, {
        'name': 'Trinkets',
        'img': 'http://www.vhpg.com/arimg/HeistRewardTrinkets.png'
    }, {'name': 'Maps', 'img': 'http://www.vhpg.com/arimg/HeistRewardMaps.png'}],
    'recipe': [{'name': 'Flame Strider', 'img': 'http://www.vhpg.com/arimg/flame-strider.png'}, {
        'name': 'Frenzied',
        'img': 'http://www.vhpg.com/arimg/frenzied.png'
    }, {'name': 'Rejuvenating', 'img': 'http://www.vhpg.com/arimg/rejuvenating.png'}]
}, {
    'name': 'Shakari-touched',
    'img': 'http://www.vhpg.com/arimg/shakari-touched.png',
    'effect': 'Monster uses the abilities of Shakari',
    'rewards': [{'name': 'Uniques', 'img': 'http://www.vhpg.com/arimg/HeistRewardUniques.png'}],
    'recipe': [{'name': 'Entangler', 'img': 'http://www.vhpg.com/arimg/entangler.png'}, {
        'name': 'Soul Eater',
        'img': 'http://www.vhpg.com/arimg/soul-eater.png'
    }, {'name': 'Drought Bringer', 'img': 'http://www.vhpg.com/arimg/drought-bringer.png'}]
}, {
    'name': 'Innocence-touched',
    'img': 'http://www.vhpg.com/arimg/innocence-touched.png',
    'effect': 'Monster uses the abilities of Innocence',
    'rewards': [{'name': 'Currency', 'img': 'http://www.vhpg.com/arimg/HeistRewardCurrency.png'}, {
        'name': 'Currency',
        'img': 'http://www.vhpg.com/arimg/HeistRewardCurrency.png'
    }, {'name': 'Currency', 'img': 'http://www.vhpg.com/arimg/HeistRewardCurrency.png'}],
    'recipe': [{
        'name': 'Lunaris-touched',
        'img': 'http://www.vhpg.com/arimg/lunaris-touched.png'
    }, {'name': 'Solaris-touched', 'img': 'http://www.vhpg.com/arimg/solaris-touched.png'}, {
        'name': 'Mirror Image',
        'img': 'http://www.vhpg.com/arimg/mirror-image.png'
    }, {'name': 'Mana Siphoner', 'img': 'http://www.vhpg.com/arimg/mana-siphoner.png'}]
}, {
    'name': 'Kitava-touched',
    'img': 'http://www.vhpg.com/arimg/kitava-touched.png',
    'effect': 'Monster uses the abilities of Kitava',
    'rewards': [{'name': 'Generic', 'img': 'http://www.vhpg.com/arimg/HeistRewardGeneric2.png'}],
    'recipe': [{
        'name': 'Tukohama-touched',
        'img': 'http://www.vhpg.com/arimg/tukohama-touched.png'
    }, {'name': 'Abberath-touched', 'img': 'http://www.vhpg.com/arimg/abberath-touched.png'}, {
        'name': 'Corrupter',
        'img': 'http://www.vhpg.com/arimg/corrupter.png'
    }, {'name': 'Corpse Detonator', 'img': 'http://www.vhpg.com/arimg/corpse-detonator.png'}]
}];

function Panel({text, img}) {
    return <div className={'panel'}>
        <img className={'panel-img'} src={img} alt={text}/>
        <div className={'panel-name'}>{text}</div>
    </div>
}

export default function Home() {
    const [searchValue, setSearchValue] = useState('');
    const [mods, setMods] = useState([]);

    const onSearchChange = _.debounce((e) => {
        console.log({e})
        setSearchValue(e.target.value);
        searchMods();
    }, 250);

    useEffect(() => {
        searchMods();
    }, [searchValue]);


    const searchMods = () => {
        const foundMods = _.filter(data, (mod) => {
            const search = _.lowerCase(searchValue);
            return _.includes(_.lowerCase(mod.name), search) || _.includes(mod.effect, search) || _.some(mod.recipe, (r) => {
                return _.includes(_.lowerCase(r.name), search);
            });
        });
        setMods(foundMods);
    };

    return (
        <div>
            <Head>
                <title>Archnemesis recipes</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={'header text-light'}>Welcome to archnemesis recipes quick lookup</div>
            <input className={'search form-control'} placeholder={'Search for mods'} onChange={(e) => setSearchValue(e.target.value)}
                   value={searchValue}/>
            <table className={'table table-striped table-dark table-bordered table-hover table-sm'}>
                <thead>
                <tr>
                    <th style={{width: '15%'}}>Name</th>
                    <th style={{width: '30%'}}>Effect</th>
                    <th style={{width: '15%'}}>Rewards</th>
                    <th style={{width: '1%'}}>Recipe</th>
                </tr>
                </thead>
                <tbody>
                {_.map(_.isEmpty(searchValue) ? data : mods, (mod) => {
                    const {name, img, effect, rewards, recipe} = mod;
                    return <tr key={name}>
                        <td>
                            <Panel img={img} text={name}/>
                        </td>
                        <td>{effect}</td>
                        <td>
                            {_.map(rewards, (reward) => {
                                return <Panel img={reward.img} text={''} key={`${Math.random()}`}/>
                            })}
                        </td>
                        <td>
                            <div className={'panel-list'}>
                                {_.map(recipe, (component) => {
                                    return <Panel img={component.img} text={component.name} key={`${Math.random()}`}/>
                                })}
                            </div>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>


        </div>
    )
}
