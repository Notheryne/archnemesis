import Head from 'next/head'
import _ from 'lodash';
import {useState, useEffect} from 'react';

const data = [{
    'name': 'Toxic',
    'img': 'img/toxic.png',
    'effect': 'Monster has augmented Poison powers',
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}, {
        'name': 'Gems',
        'img': 'img/HeistRewardGems.png'
    }],
    'recipe': []
}, {
    'name': 'Chaosweaver',
    'img': 'img/chaosweaver.png',
    'effect': 'Monster is imbued with Chaos Damage and Resistance',
    'rewards': [{'name': 'Gems', 'img': 'img/HeistRewardGems.png'}],
    'recipe': []
}, {
    'name': 'Frostweaver',
    'img': 'img/frostweaver.png',
    'effect': 'Monster is imbued with Cold Damage and Resistance',
    'rewards': [{'name': 'Armour', 'img': 'img/HeistRewardArmour.png'}],
    'recipe': []
}, {
    'name': 'Permafrost',
    'img': 'img/permafrost.png',
    'effect': 'Monster has augmented Freeze and Chill powers',
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}, {
        'name': 'Armour',
        'img': 'img/HeistRewardArmour.png'
    }],
    'recipe': []
}, {
    'name': 'Hasted',
    'img': 'img/hasted.png',
    'effect': 'Monster is faster',
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}],
    'recipe': []
}, {
    'name': 'Deadeye',
    'img': 'img/deadeye.png',
    'effect': 'Monster is Accurate and applies Marks',
    'rewards': [{'name': 'Armour', 'img': 'img/HeistRewardArmour.png'}, {
        'name': 'Trinkets',
        'img': 'img/HeistRewardTrinkets.png'
    }],
    'recipe': []
}, {
    'name': 'Bombardier',
    'img': 'img/bombardier.png',
    'effect': 'Monster has augmented Projectile powers and periodically unleashes a barrage of mortars',
    'rewards': [{'name': 'Weapon', 'img': 'img/HeistRewardWeapon.png'}, {
        'name': 'Armour',
        'img': 'img/HeistRewardArmour.png'
    }],
    'recipe': []
}, {
    'name': 'Flameweaver',
    'img': 'img/flameweaver.png',
    'effect': 'Monster is imbued with Fire Damage and Resistance',
    'rewards': [{'name': 'Weapon', 'img': 'img/HeistRewardWeapon.png'}],
    'recipe': []
}, {
    'name': 'Incendiary',
    'img': 'img/incendiary.png',
    'effect': 'Monster has augmented Ignite powers',
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}, {
        'name': 'Weapon',
        'img': 'img/HeistRewardWeapon.png'
    }],
    'recipe': []
}, {
    'name': 'Arcane Buffer',
    'img': 'img/arcane-buffer.png',
    'effect': 'Monster has augmented Energy Shield powers and releases a stunning nova when Energy Shield breaks',
    'rewards': [{'name': 'Essences', 'img': 'img/HeistRewardEssences.png'}],
    'recipe': []
}, {
    'name': 'Echoist',
    'img': 'img/echoist.png',
    'effect': 'Monster repeats skills additional times',
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}, {
        'name': 'Currency',
        'img': 'img/HeistRewardCurrency.png'
    }],
    'recipe': []
}, {
    'name': 'Stormweaver',
    'img': 'img/stormweaver.png',
    'effect': 'Monster is imbued with Lightning Damage and Resistance',
    'rewards': [{'name': 'Trinkets', 'img': 'img/HeistRewardTrinkets.png'}],
    'recipe': []
}, {
    'name': 'Dynamo',
    'img': 'img/dynamo.png',
    'effect': 'Monster has augmented Shock powers',
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}, {
        'name': 'Trinkets',
        'img': 'img/HeistRewardTrinkets.png'
    }],
    'recipe': []
}, {
    'name': 'Bonebreaker',
    'img': 'img/bonebreaker.png',
    'effect': "Monster has augmented Stun powers. Monster hits are slower and can't be evaded",
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}, {
        'name': 'Weapon',
        'img': 'img/HeistRewardWeapon.png'
    }],
    'recipe': []
}, {
    'name': 'Bloodletter',
    'img': 'img/bloodletter.png',
    'effect': 'Monster has augmented Bleed powers. Monster Maims nearby enemies',
    'rewards': [{'name': 'Weapon', 'img': 'img/HeistRewardWeapon.png'}, {
        'name': 'Trinkets',
        'img': 'img/HeistRewardTrinkets.png'
    }],
    'recipe': []
}, {
    'name': 'Steel-infused',
    'img': 'img/steel-infused.png',
    'effect': 'Monster is imbued with Physical Damage and Physical Damage Reduction',
    'rewards': [{'name': 'Weapon', 'img': 'img/HeistRewardWeapon.png'}],
    'recipe': []
}, {
    'name': 'Gargantuan',
    'img': 'img/gargantuan.png',
    'effect': 'Monster is massive, granting more Life, Area of Effect, and Damage',
    'rewards': [{'name': 'Currency', 'img': 'img/HeistRewardCurrency.png'}],
    'recipe': []
}, {
    'name': 'Berserker',
    'img': 'img/berserker.png',
    'effect': 'Monster Enrages as it loses life',
    'rewards': [{'name': 'Uniques', 'img': 'img/HeistRewardUniques.png'}],
    'recipe': []
}, {
    'name': 'Sentinel',
    'img': 'img/sentinel.png',
    'effect': 'Monster is imbued with Block and Spell Block. Monster Triggers Reckoning when hit',
    'rewards': [{'name': 'Armour', 'img': 'img/HeistRewardArmour.png'}, {
        'name': 'Armour',
        'img': 'img/HeistRewardArmour.png'
    }],
    'recipe': []
}, {
    'name': 'Juggernaut',
    'img': 'img/juggernaut.png',
    'effect': 'Monster cannot be Slowed or Stunned. Monster gains Endurance Charges',
    'rewards': [{'name': 'Harbinger', 'img': 'img/HeistRewardHarbinger.png'}],
    'recipe': []
}, {
    'name': 'Vampiric',
    'img': 'img/vampiric.png',
    'effect': 'Monster has augmented Life Leech powers',
    'rewards': [{'name': 'Fossils', 'img': 'img/HeistRewardFossils.png'}],
    'recipe': []
}, {
    'name': 'Overcharged',
    'img': 'img/overcharged.png',
    'effect': 'Monster grants Charges to itself and Allies over time',
    'rewards': [{'name': 'Trinkets', 'img': 'img/HeistRewardTrinkets.png'}, {
        'name': 'Trinkets',
        'img': 'img/HeistRewardTrinkets.png'
    }],
    'recipe': []
}, {
    'name': 'Soul Conduit',
    'img': 'img/soul-conduit.png',
    'effect': 'On death, Monster and nearby Allies are revived',
    'rewards': [{'name': 'Maps', 'img': 'img/HeistRewardMaps.png'}],
    'recipe': []
}, {
    'name': 'Opulent',
    'img': 'img/opulent.png',
    'effect': 'Monster is fabulously wealthy',
    'rewards': [],
    'recipe': []
}, {
    'name': 'Malediction',
    'img': 'img/malediction.png',
    'effect': 'Monster has a weakening Aura',
    'rewards': [{'name': 'DivinationCards', 'img': 'img/HeistRewardDivination.png'}],
    'recipe': []
}, {
    'name': 'Consecrator',
    'img': 'img/consecrator.png',
    'effect': 'Monster periodically creates Consecrated Ground, healing allies and making them immune to curses and ailments',
    'rewards': [{'name': 'Fragments', 'img': 'img/HeistRewardFragments.png'}],
    'recipe': []
}, {
    'name': 'Frenzied',
    'img': 'img/frenzied.png',
    'effect': 'Monster and allies periodically Enrage',
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}, {
        'name': 'Uniques',
        'img': 'img/HeistRewardUniques.png'
    }],
    'recipe': []
}, {
    'name': 'Heralding Minions',
    'img': 'img/heralding-minions.png',
    'effect': "Monster's minions summon invulnerable Lightning Totems on death",
    'rewards': [{
        'name': 'Fragments',
        'img': 'img/HeistRewardFragments.png'
    }, {'name': 'Fragments', 'img': 'img/HeistRewardFragments.png'}],
    'recipe': [{'name': 'Dynamo', 'img': 'img/dynamo.png'}, {
        'name': 'Arcane Buffer',
        'img': 'img/arcane-buffer.png'
    }]
}, {
    'name': 'Empowering Minions',
    'img': 'img/empowering-minions.png',
    'effect': "Monster's minions are empowered. Minions empower the Monster with additional modifiers on death",
    'rewards': [{'name': 'Blight', 'img': 'img/HeistRewardBlight.png'}, {
        'name': 'Ritual',
        'img': 'img/RewardIconRitual.png'
    }],
    'recipe': [{'name': 'Necromancer', 'img': 'img/necromancer.png'}, {
        'name': 'Executioner',
        'img': 'img/executioner.png'
    }, {'name': 'Gargantuan', 'img': 'img/gargantuan.png'}]
}, {
    'name': 'Assassin',
    'img': 'img/assassin.png',
    'effect': 'Monster has augmented Critical powers and has Shroud Walker',
    'rewards': [{'name': 'Currency', 'img': 'img/HeistRewardCurrency.png'}, {
        'name': 'Currency',
        'img': 'img/HeistRewardCurrency.png'
    }],
    'recipe': [{'name': 'Deadeye', 'img': 'img/deadeye.png'}, {
        'name': 'Vampiric',
        'img': 'img/vampiric.png'
    }]
}, {
    'name': 'Trickster',
    'img': 'img/trickster.png',
    'effect': 'Monster has damage avoidance. Monster periodically Flees',
    'rewards': [{'name': 'Currency', 'img': 'img/HeistRewardCurrency.png'}, {
        'name': 'Uniques',
        'img': 'img/HeistRewardUniques.png'
    }, {'name': 'DivinationCards', 'img': 'img/HeistRewardDivination.png'}],
    'recipe': [{'name': 'Overcharged', 'img': 'img/overcharged.png'}, {
        'name': 'Assassin',
        'img': 'img/assassin.png'
    }, {'name': 'Echoist', 'img': 'img/echoist.png'}]
}, {
    'name': 'Necromancer',
    'img': 'img/necromancer.png',
    'effect': 'Monster can raise Undead. Minions are empowered and revive shortly after dying',
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}],
    'recipe': [{'name': 'Bombardier', 'img': 'img/bombardier.png'}, {
        'name': 'Overcharged',
        'img': 'img/overcharged.png'
    }]
}, {
    'name': 'Rejuvenating',
    'img': 'img/rejuvenating.png',
    'effect': 'Monster has Life Regeneration. Periodically releases a wave that heals nearby allies and prevents enemy Life and Energy Shield recovery',
    'rewards': [{'name': 'Currency', 'img': 'img/HeistRewardCurrency.png'}],
    'recipe': [{'name': 'Gargantuan', 'img': 'img/gargantuan.png'}, {
        'name': 'Vampiric',
        'img': 'img/vampiric.png'
    }]
}, {
    'name': 'Executioner',
    'img': 'img/executioner.png',
    'effect': 'Monster gains Damage based on missing enemy Life. Monster has an aura that prevents enemies recovering Life and Energy Shield above 50%',
    'rewards': [{'name': 'Legion', 'img': 'img/HeistRewardLegion.png'}, {
        'name': 'Breach',
        'img': 'img/HeistRewardBreach.png'
    }],
    'recipe': [{'name': 'Frenzied', 'img': 'img/frenzied.png'}, {
        'name': 'Berserker',
        'img': 'img/berserker.png'
    }]
}, {
    'name': 'Hexer',
    'img': 'img/hexer.png',
    'effect': 'Monster is Hexproof. Monster is followed by a Hexing Effigy that creates Hexing areas',
    'rewards': [{'name': 'Essences', 'img': 'img/HeistRewardEssences.png'}, {
        'name': 'Essences',
        'img': 'img/HeistRewardEssences.png'
    }],
    'recipe': [{'name': 'Chaosweaver', 'img': 'img/chaosweaver.png'}, {
        'name': 'Echoist',
        'img': 'img/echoist.png'
    }]
}, {
    'name': 'Drought Bringer',
    'img': 'img/drought-bringer.png',
    'effect': 'Monster disables Flask effects on hit. Monster has an aura that drains Flask charges and prevents gaining Flask charges',
    'rewards': [{
        'name': 'Labyrinth',
        'img': 'img/HeistRewardLabyrinth.png'
    }, {'name': 'Labyrinth', 'img': 'img/HeistRewardLabyrinth.png'}],
    'recipe': [{'name': 'Malediction', 'img': 'img/malediction.png'}, {
        'name': 'Deadeye',
        'img': 'img/deadeye.png'
    }]
}, {
    'name': 'Entangler',
    'img': 'img/entangler.png',
    'effect': 'Monster creates Thorned Vines that slow and deal Chaos Damage over time.',
    'rewards': [{'name': 'Fossils', 'img': 'img/HeistRewardFossils.png'}, {
        'name': 'Fossils',
        'img': 'img/HeistRewardFossils.png'
    }],
    'recipe': [{'name': 'Toxic', 'img': 'img/toxic.png'}, {
        'name': 'Bloodletter',
        'img': 'img/bloodletter.png'
    }]
}, {
    'name': 'Temporal Bubble',
    'img': 'img/temporal-bubble.png',
    'effect': 'Monster is protected by a Temporal Bubble that severely slows those in it and cannot be damaged by those outside of it',
    'rewards': [{'name': 'Heist', 'img': 'img/RewardIconHeist.png'}, {
        'name': 'Expedition',
        'img': 'img/RewardIconExpedition.png'
    }],
    'recipe': [{'name': 'Juggernaut', 'img': 'img/juggernaut.png'}, {
        'name': 'Hexer',
        'img': 'img/hexer.png'
    }, {'name': 'Arcane Buffer', 'img': 'img/arcane-buffer.png'}]
}, {
    'name': 'Treant Horde',
    'img': 'img/treant-horde.png',
    'effect': "Monster's minions are replaced with powerful Treants. Some Damage taken from the monster is split between the Treants",
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}],
    'recipe': [{'name': 'Toxic', 'img': 'img/toxic.png'}, {
        'name': 'Sentinel',
        'img': 'img/sentinel.png'
    }, {'name': 'Steel-infused', 'img': 'img/steel-infused.png'}]
}, {
    'name': 'Frost Strider',
    'img': 'img/frost-strider.png',
    'effect': 'Monster leaves Chilling Ground in its wake. Minions create Frost Bearers on death',
    'rewards': [{'name': 'Armour', 'img': 'img/HeistRewardArmour.png'}, {
        'name': 'Armour',
        'img': 'img/HeistRewardArmour.png'
    }, {'name': 'Armour', 'img': 'img/HeistRewardArmour.png'}],
    'recipe': [{'name': 'Frostweaver', 'img': 'img/frostweaver.png'}, {
        'name': 'Hasted',
        'img': 'img/hasted.png'
    }]
}, {
    'name': 'Ice Prison',
    'img': 'img/ice-prison.png',
    'effect': 'Monster periodically entraps players in a cage of ice',
    'rewards': [{'name': 'Armour', 'img': 'img/HeistRewardArmour.png'}, {
        'name': 'Armour',
        'img': 'img/HeistRewardArmour.png'
    }],
    'recipe': [{'name': 'Permafrost', 'img': 'img/permafrost.png'}, {
        'name': 'Sentinel',
        'img': 'img/sentinel.png'
    }]
}, {
    'name': 'Soul Eater',
    'img': 'img/soul-eater.png',
    'effect': 'Monster empowers when nearby allies die. Periodically summons Phantasms',
    'rewards': [{'name': 'Maps', 'img': 'img/HeistRewardMaps.png'}, {
        'name': 'Maps',
        'img': 'img/HeistRewardMaps.png'
    }],
    'recipe': [{'name': 'Soul Conduit', 'img': 'img/soul-conduit.png'}, {
        'name': 'Necromancer',
        'img': 'img/necromancer.png'
    }, {'name': 'Gargantuan', 'img': 'img/gargantuan.png'}]
}, {
    'name': 'Flame Strider',
    'img': 'img/flame-strider.png',
    'effect': 'Monster leaves Burning Ground in its wake. Minions create Flame Bearers on death',
    'rewards': [{'name': 'Weapon', 'img': 'img/HeistRewardWeapon.png'}, {
        'name': 'Weapon',
        'img': 'img/HeistRewardWeapon.png'
    }, {'name': 'Weapon', 'img': 'img/HeistRewardWeapon.png'}],
    'recipe': [{'name': 'Flameweaver', 'img': 'img/flameweaver.png'}, {
        'name': 'Hasted',
        'img': 'img/hasted.png'
    }]
}, {
    'name': 'Corpse Detonator',
    'img': 'img/corpse-detonator.png',
    'effect': 'Monster detonates nearby Corpses. Monster periodically creates Corpses',
    'rewards': [{
        'name': 'DivinationCards',
        'img': 'img/HeistRewardDivination.png'
    }, {'name': 'DivinationCards', 'img': 'img/HeistRewardDivination.png'}],
    'recipe': [{'name': 'Necromancer', 'img': 'img/necromancer.png'}, {
        'name': 'Incendiary',
        'img': 'img/incendiary.png'
    }]
}, {
    'name': 'Evocationist',
    'img': 'img/evocationist.png',
    'effect': 'Monster is imbued with Elemental Damage, Resistances and Ailments',
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}, {
        'name': 'Weapon',
        'img': 'img/HeistRewardWeapon.png'
    }, {'name': 'Armour', 'img': 'img/HeistRewardArmour.png'}, {
        'name': 'Trinkets',
        'img': 'img/HeistRewardTrinkets.png'
    }],
    'recipe': [{'name': 'Flameweaver', 'img': 'img/flameweaver.png'}, {
        'name': 'Frostweaver',
        'img': 'img/frostweaver.png'
    }, {'name': 'Stormweaver', 'img': 'img/stormweaver.png'}]
}, {
    'name': 'Magma Barrier',
    'img': 'img/magma-barrier.png',
    'effect': 'Monster is protected by a Magmatic shield that explodes when depleted. Monster periodically creates Volatile Flamebloods',
    'rewards': [{'name': 'Weapon', 'img': 'img/HeistRewardWeapon.png'}, {
        'name': 'Weapon',
        'img': 'img/HeistRewardWeapon.png'
    }],
    'recipe': [{'name': 'Incendiary', 'img': 'img/incendiary.png'}, {
        'name': 'Bonebreaker',
        'img': 'img/bonebreaker.png'
    }]
}, {
    'name': 'Mirror Image',
    'img': 'img/mirror-image.png',
    'effect': 'Monster can create illusions of itself',
    'rewards': [{'name': 'Scarabs', 'img': 'img/HeistRewardScarabs.png'}],
    'recipe': [{'name': 'Echoist', 'img': 'img/echoist.png'}, {
        'name': 'Soul Conduit',
        'img': 'img/soul-conduit.png'
    }]
}, {
    'name': 'Storm Strider',
    'img': 'img/storm-strider.png',
    'effect': 'Monster leaves Shocking Ground in its wake and spawns Lightning Mirages when hit. Minions create Storm Bearers on death',
    'rewards': [{'name': 'Trinkets', 'img': 'img/HeistRewardTrinkets.png'}, {
        'name': 'Trinkets',
        'img': 'img/HeistRewardTrinkets.png'
    }, {'name': 'Trinkets', 'img': 'img/HeistRewardTrinkets.png'}],
    'recipe': [{'name': 'Stormweaver', 'img': 'img/stormweaver.png'}, {
        'name': 'Hasted',
        'img': 'img/hasted.png'
    }]
}, {
    'name': 'Mana Siphoner',
    'img': 'img/mana-siphoner.png',
    'effect': 'Monster is surrounded by a ring that deals Lightning Damage over time as well as draining Mana',
    'rewards': [{'name': 'Trinkets', 'img': 'img/HeistRewardTrinkets.png'}, {
        'name': 'Trinkets',
        'img': 'img/HeistRewardTrinkets.png'
    }],
    'recipe': [{'name': 'Consecrator', 'img': 'img/consecrator.png'}, {
        'name': 'Dynamo',
        'img': 'img/dynamo.png'
    }]
}, {
    'name': 'Corrupter',
    'img': 'img/corrupter.png',
    'effect': 'Monster inflicts Corrupted Blood on Hit and when Hit. Minions create Corrupted Bubbles on death',
    'rewards': [{'name': 'Abyss', 'img': 'img/HeistRewardAbyss.png'}, {
        'name': 'Abyss',
        'img': 'img/HeistRewardAbyss.png'
    }],
    'recipe': [{'name': 'Bloodletter', 'img': 'img/bloodletter.png'}, {
        'name': 'Chaosweaver',
        'img': 'img/chaosweaver.png'
    }]
}, {
    'name': 'Invulnerable',
    'img': 'img/invulnerable.png',
    'effect': 'Monster and its Minions periodically become immune to all Damage. Minions cannot die while Monster is alive',
    'rewards': [{
        'name': 'Delirium',
        'img': 'img/HeistRewardDelirium.png'
    }, {'name': 'Metamorphosis', 'img': 'img/HeistRewardMetamorph.png'}],
    'recipe': [{'name': 'Sentinel', 'img': 'img/sentinel.png'}, {
        'name': 'Juggernaut',
        'img': 'img/juggernaut.png'
    }, {'name': 'Consecrator', 'img': 'img/consecrator.png'}]
}, {
    'name': 'Crystal-skinned',
    'img': 'img/crystal-skinned.png',
    'effect': 'Monster triggers the creation of Crystals when hit. Crystals explode when the Monster dies',
    'rewards': [{
        'name': 'Harbinger',
        'img': 'img/HeistRewardHarbinger.png'
    }, {'name': 'Harbinger', 'img': 'img/HeistRewardHarbinger.png'}],
    'recipe': [{'name': 'Permafrost', 'img': 'img/permafrost.png'}, {
        'name': 'Rejuvenating',
        'img': 'img/rejuvenating.png'
    }, {'name': 'Berserker', 'img': 'img/berserker.png'}]
}, {
    'name': 'Empowered Elements',
    'img': 'img/empowered-elements.png',
    'effect': 'Monster cycles between imbued damage of a particular type and immunity to all other damage types',
    'rewards': [{'name': 'Uniques', 'img': 'img/HeistRewardUniques.png'}, {
        'name': 'Uniques',
        'img': 'img/HeistRewardUniques.png'
    }],
    'recipe': [{'name': 'Evocationist', 'img': 'img/evocationist.png'}, {
        'name': 'Steel-infused',
        'img': 'img/steel-infused.png'
    }, {'name': 'Chaosweaver', 'img': 'img/chaosweaver.png'}]
}, {
    'name': 'Effigy',
    'img': 'img/effigy.png',
    'effect': 'Monster creates an Effigy of the player. Damage dealt to the Effigy is also reflected to the bonded player',
    'rewards': [{
        'name': 'DivinationCards',
        'img': 'img/HeistRewardDivination.png'
    }, {'name': 'DivinationCards', 'img': 'img/HeistRewardDivination.png'}],
    'recipe': [{'name': 'Hexer', 'img': 'img/hexer.png'}, {
        'name': 'Malediction',
        'img': 'img/malediction.png'
    }, {'name': 'Corrupter', 'img': 'img/corrupter.png'}]
}, {
    'name': 'Lunaris-touched',
    'img': 'img/lunaris-touched.png',
    'effect': 'Monster uses the abilities of Lunaris',
    'rewards': [{'name': 'Uniques', 'img': 'img/HeistRewardUniques.png'}],
    'recipe': [{'name': 'Invulnerable', 'img': 'img/invulnerable.png'}, {
        'name': 'Frost Strider',
        'img': 'img/frost-strider.png'
    }, {'name': 'Empowering Minions', 'img': 'img/empowering-minions.png'}]
}, {
    'name': 'Solaris-touched',
    'img': 'img/solaris-touched.png',
    'effect': 'Monster uses the abilities of Solaris',
    'rewards': [{'name': 'Scarabs', 'img': 'img/HeistRewardScarabs.png'}],
    'recipe': [{'name': 'Invulnerable', 'img': 'img/invulnerable.png'}, {
        'name': 'Magma Barrier',
        'img': 'img/magma-barrier.png'
    }, {'name': 'Empowering Minions', 'img': 'img/empowering-minions.png'}]
}, {
    'name': 'Arakaali-touched',
    'img': 'img/arakaali-touched.png',
    'effect': 'Monster uses the abilities of Arakaali',
    'rewards': [{'name': 'DivinationCards', 'img': 'img/HeistRewardDivination.png'}],
    'recipe': [{
        'name': 'Corpse Detonator',
        'img': 'img/corpse-detonator.png'
    }, {'name': 'Entangler', 'img': 'img/entangler.png'}, {
        'name': 'Assassin',
        'img': 'img/assassin.png'
    }]
}, {
    'name': 'Brine King-touched',
    'img': 'img/brine-king-touched.png',
    'effect': 'Monster uses the abilities of the Brine King',
    'rewards': [{'name': 'Armour', 'img': 'img/HeistRewardArmour.png'}, {
        'name': 'Armour',
        'img': 'img/HeistRewardArmour.png'
    }, {'name': 'Armour', 'img': 'img/HeistRewardArmour.png'}],
    'recipe': [{'name': 'Ice Prison', 'img': 'img/ice-prison.png'}, {
        'name': 'Storm Strider',
        'img': 'img/storm-strider.png'
    }, {'name': 'Heralding Minions', 'img': 'img/heralding-minions.png'}]
}, {
    'name': 'Tukohama-touched',
    'img': 'img/tukohama-touched.png',
    'effect': 'Monster uses the abilities of Tukohama',
    'rewards': [{'name': 'Weapon', 'img': 'img/HeistRewardWeapon.png'}, {
        'name': 'Weapon',
        'img': 'img/HeistRewardWeapon.png'
    }, {'name': 'Fragments', 'img': 'img/HeistRewardFragments.png'}],
    'recipe': [{'name': 'Bonebreaker', 'img': 'img/bonebreaker.png'}, {
        'name': 'Executioner',
        'img': 'img/executioner.png'
    }, {'name': 'Magma Barrier', 'img': 'img/magma-barrier.png'}]
}, {
    'name': 'Abberath-touched',
    'img': 'img/abberath-touched.png',
    'effect': 'Monster uses the abilities of Abberath',
    'rewards': [{'name': 'Trinkets', 'img': 'img/HeistRewardTrinkets.png'}, {
        'name': 'Trinkets',
        'img': 'img/HeistRewardTrinkets.png'
    }, {'name': 'Maps', 'img': 'img/HeistRewardMaps.png'}],
    'recipe': [{'name': 'Flame Strider', 'img': 'img/flame-strider.png'}, {
        'name': 'Frenzied',
        'img': 'img/frenzied.png'
    }, {'name': 'Rejuvenating', 'img': 'img/rejuvenating.png'}]
}, {
    'name': 'Shakari-touched',
    'img': 'img/shakari-touched.png',
    'effect': 'Monster uses the abilities of Shakari',
    'rewards': [{'name': 'Uniques', 'img': 'img/HeistRewardUniques.png'}],
    'recipe': [{'name': 'Entangler', 'img': 'img/entangler.png'}, {
        'name': 'Soul Eater',
        'img': 'img/soul-eater.png'
    }, {'name': 'Drought Bringer', 'img': 'img/drought-bringer.png'}]
}, {
    'name': 'Innocence-touched',
    'img': 'img/innocence-touched.png',
    'effect': 'Monster uses the abilities of Innocence',
    'rewards': [{'name': 'Currency', 'img': 'img/HeistRewardCurrency.png'}, {
        'name': 'Currency',
        'img': 'img/HeistRewardCurrency.png'
    }, {'name': 'Currency', 'img': 'img/HeistRewardCurrency.png'}],
    'recipe': [{
        'name': 'Lunaris-touched',
        'img': 'img/lunaris-touched.png'
    }, {'name': 'Solaris-touched', 'img': 'img/solaris-touched.png'}, {
        'name': 'Mirror Image',
        'img': 'img/mirror-image.png'
    }, {'name': 'Mana Siphoner', 'img': 'img/mana-siphoner.png'}]
}, {
    'name': 'Kitava-touched',
    'img': 'img/kitava-touched.png',
    'effect': 'Monster uses the abilities of Kitava',
    'rewards': [{'name': 'Generic', 'img': 'img/HeistRewardGeneric2.png'}],
    'recipe': [{
        'name': 'Tukohama-touched',
        'img': 'img/tukohama-touched.png'
    }, {'name': 'Abberath-touched', 'img': 'img/abberath-touched.png'}, {
        'name': 'Corrupter',
        'img': 'img/corrupter.png'
    }, {'name': 'Corpse Detonator', 'img': 'img/corpse-detonator.png'}]
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
            <input className={'search form-control'} placeholder={'Search for mods'}
                   onChange={(e) => setSearchValue(e.target.value)}
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
