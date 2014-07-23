var classes = [
	{
		index: 0,
		name:'Titan',
		subclass: 'Striker',
		image: 'striker.png',
		description: 'At close quarters a fist is better than any gun.',
		stats: {
			armor: 40,
			recovery: 10,
			agility: 10,
		},
		skills: [
			// Row 1
			[
				{
					name: 'Flashbang Grenade',
					description: 'An explosive grenade that disorients the\nenemies it damages.',
					binding: 'Binds to L1',
					image: 'striker/flashbang_grenade.png'
				},
				{
					name: 'Lift',
					description: 'Jump and then press X again while in the air\n to activate Lift.',
					binding: 'Binds to X',
					image: 'striker/lift.png'
				},
				{
					name: 'Fist of Havoc',
					description: 'Smash the ground and dissolve nearby\nenemies in a maelstrom of Arc Light.',
					binding: 'Binds to L1 + R1',
					image: 'striker/fist_of_havoc.png'
				},
				{
					name: 'Storm Fist',
					description: 'A punishing melee attack that deals bonus\ndamage.',
					image: 'striker/storm_fist.png'
				},
				{
					name: 'Titan Codex I',
					description: 'Training focused on battle recovery and\ntoughness.',
					buffs: {
						armor: 10,
						recovery: 20,
						agility: 0
					},
					image: 'striker/codex1.png'
				},
				{
					name: 'Headstrong',
					description: 'Sprinting increases the leap distance of Fist of\nHavoc.',
					buffs: {
						armor: 0,
						recovery: 0,
						agility: 10
					},
					image: 'striker/headstrong.png'
				},
				{
					name: 'Titan Codex IV',
					description: 'Training focused on all attributes.',
					buffs: {
						armor: 10,
						recovery: 20,
						agility: 10
					},
					image: 'striker/codex2.png'
				},
				{
					name: 'Unstoppable',
					description: 'You are harder to kill while using Fist of Havoc.',
					buffs: {
						armor: 10,
						recovery: 0,
						agility: 0
					},
					image: 'striker/unstoppable.png'
				}
			],
			// Row 2
			[
				{
					name: 'Pulse Grenade',
					description: 'A grenade that periodically damages enemies\ninside its explosion radius',
					binding: 'Binds to L1',
					image: 'striker/pulse_grenade.png'
				},
				{
					name: 'Increased Height',
					description: 'Upgrades Lift to travel to greater heights',
					image: 'striker/increased_height.png'
				},
				{
					name: 'Aftermath',
					description: 'Fist of Havoc leaves a damage-dealing field in\nits wake.',
					image: 'striker/aftermath.png'
				},
				{
					name: 'Overload',
					description: 'Hits with Storm Fist have a chance to\nimmediately reset its cooldown.',
					image: 'striker/overload.png'
				},
				{
					name: 'Titan Codex II',
					description: 'Training focused on speed and\ntoughness.',
					buffs: {
						armor: 10,
						recovery: 0,
						agility: 20
					},
					image: 'striker/codex1.png'
				},
				{
					name: 'Aftermath',
					description: 'Increases the duration of Pulse Grenade,\nShock Grenade, and Aftermath.',
					image: 'striker/aftermath.png'
				},
				{
					name: 'Titan Codex V',
					description: 'Training focused on maximum battle recovery.',
					buffs: {
						armor: 0,
						recovery: 50,
						agility: 0
					},
					image: 'striker/codex2.png'
				},
				{
					name: 'Shoulder Charge',
					description: 'After sprinting for a short time, press R1 to\n unleash a devastating melee attack.',
					image: 'striker/shoulder_charge.png'
				},
				{
					name: 'Illumination',
					description: 'Seal this Subclass, locking previous choices.',
					buffs: {
						armor: 10,
						recovery: 0,
						agility: 0
					},
					image: 'illumination.png'
				}
			],
			// Row 3
			[
				{
					name: 'Lightning Grenade',
					description: 'A grenade that sticks to any surface \nperiodically emitting bolts of lightning.',
					binding: 'Binds to L1',
					image: 'striker/lightning_grenade.png'
				},
				{
					name: 'Increased Control',
					description: 'Upgrades Lift for better directional control\nwhile in the air.',
					image: 'striker/increased_control.png'
				},
				{
					name: 'Death From Above',
					description: 'After jumping, Fist of Havoc can be aimed at\nenemies below',
					image: 'striker/death_from_above.png'
				},
				{
					name: 'Discharge',
					description: 'Hits with Storm Fist have achance to deal area\nof effect damage around the target.',
					image: 'striker/discharge.png'
				},
				{
					name: 'Titan Codex III',
					description: 'Training focused on battle recovery and speed.',
					buffs: {
						armor: 0,
						recovery: 20,
						agility: 20
					},
					image: 'striker/codex1.png'
				},
				{
					name: 'Transfusion',
					description: 'Kills with melee attacks immediately trigger\nhealth regeneration.',
					image: 'striker/transfusion.png'
				},
				{
					name: 'Titan Codex VI',
					description: 'Training focused on raw speed.',
					buffs: {
						armor: 10,
						recovery: 0,
						agility: 30
					},
					image: 'striker/codex2.png'
				},
				{
					name: 'Juggernaut',
					description: 'After sprinting for a short time, gain a\nprotective shield.',
					image: 'striker/juggernaut.png'
				}
			],
			// Row 4
			[
				{
					name: 'Catapult',
					description: 'Upgrades Lift to provide a strong initial burst\nof momentum',
					image: 'striker/catapult.png'
				},
				{
					name: 'Shockwave',
					description: 'Fist of Havoc unleashes a wave of devastating\nenergy which travels along the ground.',
					image: 'striker/shockwave.png'
				},
				{
					name: 'Illuminated',
					description: 'Kills with Storm Fist significantly reduce the\ncooldown of Fist of Havoc',
					image: 'striker/illuminated.png'
				}
			]
		]},
	{
		index: 1,
		name:'Hunter',
		subclass: 'Gunslinger',
		image: 'gunslinger.png',
		description: 'A lone wolf who lives for the perfect shot.',
		stats: {
			armor: 10,
			recovery: 10,
			agility: 40
		},
		skills: [
			// Row 1
			[
				{
					name: 'Incendiary Grenade',
					description: 'An explosive grenade that catches enemies on\nfire, causing additional damage over time.',
					binding: 'Binds to L1',
					image: 'gunslinger/incendiary_grenade.png'
				},
				{
					name: 'Double Jump',
					description: 'Jump a second time after leaving the ground.',
					binding: 'Binds to X',
					image: 'gunslinger/double_jump.png'
				},
				{
					name: 'Golden Gun',
					description: 'Summon a flaming pistol which disintegrates\nenemies with Solar Light.',
					binding: 'Binds to L1 + R1',
					image: 'gunslinger/golden_gun.png'
				},
				{
					name: 'Throwing Knife',
					description: 'Throw a knife from a distance.',
					image: 'gunslinger/throwing_knife.png'
				},
				{
					name: 'Path Forgotten',
					description: 'Training focused on toughness and speed.',
					image: 'gunslinger/path_stats.png'
				},
				{
					name: 'Scavenger',
					description: 'Picking up ammo reduces the cooldown of\nyour grenade and Throwing Knife.',
					image: 'gunslinger/scavenger.png'
				},
				{
					name: 'Way of the Drifter',
					description: 'Training focused on all attributes.',
					image: 'gunslinger/way_stats.png'
				},
				{
					name: 'Chain of Woe',
					description: 'Precision kills increase weapon reload speed.\nStacks up to 3 times.',
					image: 'gunslinger/chain_of_woe.png'
				}

			],
			// Row 2
			[
				{
					name: 'Swarm Grenade',
					description: 'A grenade which detonates on impact,\nreleasing multiple drones that seek nearby\nenemies.',
					binding: 'Binds to L1',
					image: 'gunslinger/swarm_grenade.png'
				},
				{
					name: 'Better Control',
					description: 'Upgrades Double Jump for better directional\ncontrol while in the air.',
					image: 'gunslinger/better_control.png'
				},
				{
					name: 'Deadeye',
					description: 'Significantly increases the accuracy of Golden\nGun.',
					image: 'gunslinger/deadeye.png'
				},
				{
					name: 'Circle of Life',
					description: 'Killing an enemy with Throwing Knife while\nGoden Gun is active extends the duration of\nGolden Gun.',
					image: 'gunslinger/circle_of_life.png'
				},
				{
					name: 'Path Forbidden',
					description: 'Training focused on battle recovery and speed.',
					image: 'gunslinger/path_stats.png'
				},
				{
					name: 'Keyhole',
					description: 'Golden Gun overpenetrates and can damage\nmultiple targets.',
					image: 'gunslinger/keyhole.png'
				},
				{
					name: 'Way of the Fearless',
					description: 'Training focused on toughness at all costs.',
					image: 'gunslinger/way_stats.png'
				},
				{
					name: 'Over the Horizon',
					description: 'Increases the range of Golden Gun.',
					image: 'gunslinger/over_the_horizon.png'
				},
				{
					name: 'Illumination',
					description: 'Seal this Subclass, locking previous choices.',
					image: 'illumination.png'
				}
			],
			// Row 3
			[
				{
					name: 'Tripmine Grenade',
					description: 'An explosive grenade that sticks to surfaces\nand detonates when enemies pass through its\nlaser trigger.',
					binding: 'Binds to L1',
					image: 'gunslinger/tripmine_grenade.png'
				},
				{
					name: 'Triple Jump',
					description: 'Upgrades Double Jump with a third jump.',
					image: 'gunslinger/triple_jump.png'
				},
				{
					name: 'Combustion',
					description: 'Killing enemies with Golden Gun causes them\nto explode.',
					image: 'gunslinger/combustion.png'
				},
				{
					name: 'Incendiary Blade',
					description: 'Throwing Knife catches enemies on fire,\ndealing additional damage over time.',
					image: 'gunslinger/incendiary_blade.png'
				},
				{
					name: 'Path Unknown',
					description: 'Training focused on battle recovery and toughness.',
					image: 'gunslinger/path_stats.png'
				},
				{
					name: 'Gunslinger\'s Trance',
					description: 'Precision kills increase weapon stability.\nStacks up to 3 times.',
					image: 'gunslinger/gunslingers_trance.png'
				},
				{
					name: 'Way of the Nomad',
					description: 'Training focused on maximum battle recovery.',
					image: 'gunslinger/way_stats.png'
				},
				{
					name: 'Gambler\'s Dagger',
					description: 'Gain an additional Throwing Knife.',
					image: 'gunslinger/gamblers_dagger.png'
				}
			],
			// Row 4
			[
				{
					name: 'Higher Jump',
					description: 'Upgrades Double Jump for even greater\nheight.',
					image: 'gunslinger/higher_jump.png'
				},
				{
					name: 'Gunfighter',
					description: 'Reduces the cooldown of Golden Gun,\nallowing it to be used more often.',
					image: 'gunslinger/gunfighter.png'
				},
				{
					name: 'Knife Juggler',
					description: 'Precision kills with Throwing Knife\nimmediately reset its cooldown.',
					image: 'gunslinger/knife_juggler.png'
				}
			]
		]
	},
	{
		index: 2,
		name:'Warlock',
		subclass: 'Voidwalker',
		image: 'voidwalker.png',
		description: 'Those who have stared into the Void are not bound by the laws of space and time.',
		stats: {
			armor: 10,
			recovery: 40,
			agility: 10
		},
		skills: [
			// Row 1
			[
				{
					name: 'Vortex Grenade',
					description: 'A grenade which creates a Vortex which\ncontinually damages enemies trapped inside.',
					binding: 'Binds to L1',
					image: 'voidwalker/vortex_grenade.png'
				},
				{
					name: 'Glide',
					description: 'Jump and press X again while in the air\nto activate Glide.',
					binding: 'Binds to X',
					image: 'voidwalker/glide.png'
				},
				{
					name: 'Nova Bomb',
					description: 'Hurl an explosive bolt of Void Light at the\nenemy, disintegrating those caught within its blast.',
					binding: 'Binds to L1 + R1',
					image: 'voidwalker/nova_bomb.png'
				},
				{
					name: 'Energy Drain',
					description: 'A powerful melee attack which drains energy\nfrom enemies and uses it to reduce the\ncooldown of your grenade.',
					image: 'voidwalker/energy_drain.png'
				},
				{
					name: 'Arcane Wisdom',
					description: 'Training focused on battle recovery and speed.',
					image: 'voidwalker/arcane_stats.png'
				},
				{
					name: 'Vortex Mastery',
					description: 'Increases the range of Axion Bolt seekers and\nthe duration of the Vortex effect of Nova Bomb\nand Vortex Grenade.',
					image: 'voidwalker/vortex_mastery.png'
				},
				{
					name: 'Ancestral Order',
					description: 'Training focused on all attributes.',
					image: 'voidwalker/order_stats.png'
				},
				{
					name: 'Angry Magic',
					description: 'Nova Bomb tracks enemies.',
					image: 'voidwalker/angry_magic.png'
				}
			],
			// Row 2
			[
				{
					name: 'Scatter Grenade',
					description: 'A grenade that splits into many submunitions\nand covers a large area with explosions.',
					binding: 'Binds to L1',
					image: 'voidwalker/scatter_grenade.png'
				},
				{
					name: 'Focused Control',
					description: 'Upgrades Glide for better directional control\nwhile in the air.',
					image: 'voidwalker/focused_control.png'
				},
				{
					name: 'Vortex',
					description: 'Nova Bomb creates a Vortex which continually\ndamages enemies trapped inside.',
					image: 'voidwalker/vortex.png'
				},
				{
					name: 'Surge',
					description: 'Killing an enemy with Energy Drain increases\nmovement speed for a short time.',
					image: 'voidwalker/surge.png'
				},
				{
					name: 'Arcane Spirit',
					description: 'Training focused on battle recovery and\ntoughness.',
					image: 'voidwalker/arcane_stats.png'
				},
				{
					name: 'Bent Gravity',
					description: 'Increases the range of grenades and Nova\nBomb.',
					image: 'voidwalker/bent_gravity.png'
				},
				{
					name: 'Chaos Order',
					description: 'Training focused on raw speed.',
					image: 'voidwalker/order_stats.png'
				},
				{
					name: 'Embrace the Void',
					description: 'Damaging enemies with Nova Bomb or any\ngrenade triggers the Energy Drain effect.',
					image: 'voidwalker/embrace_the_void.png'
				},
				{
					name: 'Illumination',
					description: 'Seal this Subclass, locking previous choices.',
					image: 'illumination.png'
				}
			],
			// Row 3
			[
				{
					name: 'Axion Bolt',
					description: 'A bolt of Void Light which forks into smaller\nbolts on impact which seek toward enemies.',
					binding: 'Binds to L1',
					image: 'voidwalker/axion_bolt.png',
					column_unique: true
				},
				{
					name: 'Focused Burst',
					description: 'Upgrades Glide to provide an initial boost of\nspeed.',
					image: 'voidwalker/focused_burst.png'
				},
				{
					name: 'Shatter',
					description: 'Nova Bomb splits into three projectiles.',
					image: 'voidwalker/shatter.png'
				},
				{
					name: 'Life Steal',
					description: 'Killing an enemy with Energy Drain\nimmediately restores a significant portion of\nyour health.',
					image: 'voidwalker/life_steal.png'
				},
				{
					name: 'Arcane Force',
					description: 'Training focused on toughness and speed.',
					image: 'voidwalker/arcane_stats.png'
				},
				{
					name: 'The Hunger',
					description: 'Increases the duration of the Energy Drain\neffect.',
					image: 'voidwalker/the_hunger.png'
				},
				{
					name: 'Divine Order',
					description: 'Training focused on toughness at all costs.',
					image: 'voidwalker/order_stats.png'
				},
				{
					name: 'Bloom',
					description: 'Enemies killed by any of your abilities explode.',
					image: 'voidwalker/bloom.png'
				}
			],
			// Row 4
			[
				{
					name: 'Blink',
					description: 'A short distance teleport which replaces Glide.',
					binding: 'Binds to L1',
					image: 'voidwalker/blink.png'
				},
				{
					name: 'Lance',
					description: 'Nova Bomb travels farther and faster.',
					image: 'voidwalker/lance.png'
				},
				{
					name: 'Soul Rip',
					description: 'Killing an enemy with Energy Drain reduces\nthe cooldown of Nova Bomb.',
					image: 'voidwalker/soul_rip.png'
				}
			]
		]
	}
];