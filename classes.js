var classes = [
	{
		name:'Titan',
		subclass: 'Striker',
		skills: [
			// Row 1
			[
				{
					name: 'Flashbang Grenade',
					description: 'An explosive grenade that disorients the\nenemies it damages.',
					binding: 'Binds to L1',
					active: true,
					image: 'grenade.png'
				},
				{
					name: 'Lift',
					description: 'Jump and then press X again while in the air\n to activate Lift.',
					binding: 'Binds to X',
					active: true
				},
				{
					name: 'Fist of Havoc',
					description: 'Smash the ground and dissolve nearby\nenemies in a maelstrom of Arc Light.',
					binding: 'Binds to L1 + R1'
				},
				{
					name: 'Storm Fist',
					description: 'A punishing melee attack that deals bonus\ndamage.'
				},
				{
					name: 'Titan Codex I',
					description: 'Training focused on battle recovery and\ntoughness.',
					buffs: {
						armor: 10,
						recovery: 20,
						agility: 0
					}
				},
				{
					name: 'Headstrong',
					description: 'Sprinting increases the leap distance of Fist of\nHavoc.',
					buffs: {
						armor: 0,
						recovery: 0,
						agility: 10
					}
				},
				{
					name: 'Titan Codex IV',
					description: 'Training focused on all attributes.',
					buffs: {
						armor: 10,
						recovery: 20,
						agility: 10
					}
				},
				{
					name: 'Unstoppable',
					description: 'You are harder to kill while using Fist of Havoc.',
					buffs: {
						armor: 10,
						recovery: 0,
						agility: 0
					}
				}
			],
			// Row 2
			[
				{
					name: 'Pulse Grenade',
					description: 'A grenade that periodically damages enemies\ninside its explosion radius',
					binding: 'Binds to L1'
				},
				{
					name: 'Increased Height',
					description: 'Upgrades Lift to travel to greater heights',
				},
				{
					name: 'Aftermath',
					description: 'Fist of Havoc leaves a damage-dealing field in\nits wake.'
				},
				{
					name: 'Overload',
					description: 'Hits with Storm Fist have a chance to\nimmediately reset its cooldown.'
				},
				{
					name: 'Titan Codex II',
					description: 'Training focused on speed and\ntoughness.',
					buffs: {
						armor: 10,
						recovery: 0,
						agility: 20
					}
				},
				{
					name: 'Aftermath',
					description: 'Increases the duration of Pulse Grenade,\nShock Grenade, and Aftermath.'
				},
				{
					name: 'Titan Codex V',
					description: 'Training focused on maximum battle recovery.',
					buffs: {
						armor: 0,
						recovery: 50,
						agility: 0
					}
				},
				{
					name: 'Shoulder Charge',
					description: 'After sprinting for a short time, press R1 to\n unleash a devastating melee attack.'
				},
				{
					name: 'Illumination',
					description: 'Seal this Subclass, locking previous choices.',
					buffs: {
						armor: 10,
						recovery: 0,
						agility: 0
					}
				}
			],
			// Row 3
			[
				{
					name: 'Lightning Grenade',
					description: 'A grenade that sticks to any surface \nperiodically emitting bolts of lightning.',
					binding: 'Binds to L1'
				},
				{
					name: 'Increased Control',
					description: 'Upgrades Lift for better directional control\nwhile in the air.'
				},
				{
					name: 'Death From Above',
					description: 'After jumping, Fist of Havoc can be aimed at\nenemies below'
				},
				{
					name: 'Discharge',
					description: 'Hits with Storm Fist have achance to deal area\nof effect damage around the target.'
				},
				{
					name: 'Titan Codex III',
					description: 'Training focused on battle recovery and speed.',
					buffs: {
						armor: 0,
						recovery: 20,
						agility: 20
					}
				},
				{
					name: 'Transfusion',
					description: 'Kills with melee attacks immediately trigger\nhealth regeneration.'
				},
				{
					name: 'Titan Codex VI',
					description: 'Training focused on raw speed.',
					buffs: {
						armor: 10,
						recovery: 0,
						agility: 30
					}
				},
				{
					name: 'Juggernaut',
					description: 'After sprinting for a short time, gain a\nprotective shield.'
				}
			],
			// Row 4
			[
				{empty:true},
				{
					name: 'Catapult',
					description: 'Upgrades Lift to provide a strong initial burst\nof momentum'
				},
				{
					name: 'Shockwave',
					description: 'Fist of Havoc unleashes a wave of devastating\nenergy which travels along the ground.'
				},
				{
					name: 'Illuminated',
					description: 'Kills with Storm Fist significantly reduce the\ncooldown of Fist of Havoc'
				}
			]
		]},
	{name:'Hunter'},
	{name:'Warlock'}
];