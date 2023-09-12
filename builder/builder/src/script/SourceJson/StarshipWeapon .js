var weaponsList = [
    {
        "name": "Slug cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4000,
        "range": {
            "short": 600,
            "long": 2400
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 8,
                "sizeMod": null
            },
            "damageType": "kinetic"
        },
        "properties": [
            "Power",
            "constitution 11",
            "dire 1",
            "overheat 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Slug cannon"
    },
    {
        "name": "Sparkler ion cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 6100,
        "range": {
            "short": 200,
            "long": 800
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "ion"
        },
        "properties": [
            "Power",
            "auto",
            "burst 1",
            "ionizing",
            "overheat 1",
            "saturate"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Sparkler ion cannon"
    },
    {
        "name": "Twin auto-blaster",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4400,
        "range": {
            "short": 250,
            "long": 1000
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "auto",
            "burst 10",
            "hidden",
            "overheat 20",
            "rapid 5"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Twin auto-blaster"
    },
    {
        "name": "Twin laser cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4400,
        "range": {
            "short": 600,
            "long": 2400
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 8,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 11",
            "rapid 3",
            "overheat 12"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Twin laser cannon"
    },
    {
        "name": "Ion cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 6100,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 2,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "ion"
        },
        "properties": [
            "Power",
            "constitution 13",
            "ionizing",
            "overheat 8"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Ion cannon"
    },
    {
        "name": "Heavy laser cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4150,
        "range": {
            "short": 1200,
            "long": 4800
        },
        "attack": {
            "attackBonus": 1,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 12,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 15",
            "heavy",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Heavy laser cannon"
    },
    {
        "name": "Heavy blaster cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4150,
        "range": {
            "short": 600,
            "long": 2400
        },
        "attack": {
            "attackBonus": 1,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 8,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "heavy",
            "overheat 12"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Heavy blaster cannon"
    },
    {
        "name": "Double laser cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4500,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 2,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "overheat 8"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Double laser cannon"
    },
    {
        "name": "Thermite cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 6300,
        "range": {
            "short": 1200,
            "long": 4800
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 12,
                "sizeMod": null
            },
            "damageType": "fire"
        },
        "properties": [
            "Power",
            "constitution 17",
            "melt",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Thermite cannon"
    },
    {
        "name": "Burst laser cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4500,
        "range": {
            "short": 200,
            "long": 800
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 2,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "auto",
            "burst 1",
            "overheat 2",
            "saturate"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Burst laser cannon"
    },
    {
        "name": "Assault laser cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4150,
        "range": {
            "short": 1200,
            "long": 4800
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 2,
                "dieType": 6,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 15",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Assault laser cannon"
    },
    {
        "name": "Blaster cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4000,
        "range": {
            "short": 600,
            "long": 2400
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 8,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "hidden",
            "overheat 18",
            "rapid 9"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Blaster cannon"
    },
    {
        "name": "Light ion cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 6100,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 8,
                "sizeMod": null
            },
            "damageType": "ion"
        },
        "properties": [
            "Power",
            "overheat 16"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Light ion cannon"
    },
    {
        "name": "Light laser cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4100,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 8,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "overheat 16"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Light laser cannon"
    },
    {
        "name": "Quad laser cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4400,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 2,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 13",
            "overheat 8",
            "rapid 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Quad laser cannon"
    },
    {
        "name": "Quad pulse laser",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4400,
        "range": {
            "short": 400,
            "long": 1600
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 6,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "overheat 16",
            "rapid 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Quad pulse laser"
    },
    {
        "name": "Rapid-fire laser cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4600,
        "range": {
            "short": 400,
            "long": 1600
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 3
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 6,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "auto",
            "burst 16",
            "overheat 16",
            "rapid 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Rapid-fire laser cannon"
    },
    {
        "name": "Plasburst laser cannon",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 4000,
        "range": {
            "short": 600,
            "long": 2400
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 8,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "burst 12",
            "overheat 12"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Plasburst laser cannon"
    },
    {
        "name": "Ion cannon point-defense",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 5500,
        "range": {
            "short": 300,
            "long": 1200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 2,
                "dieType": 6,
                "sizeMod": null
            },
            "damageType": "ion"
        },
        "properties": [
            "Power",
            "ionizing",
            "saturate",
            "zone"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Ion cannon point-defense"
    },
    {
        "name": "Blaster point-defense",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4000,
        "range": {
            "short": 200,
            "long": 800
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "saturate",
            "zone"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Blaster point-defense"
    },
    {
        "name": "Laser cannon point-defense",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 6000,
        "range": {
            "short": 300,
            "long": 1200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 6,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "saturate",
            "zone"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Laser cannon point-defense"
    },
    {
        "name": "Ordnance point-defense",
        "description": null,
        "weaponCategory": {
            "enum": 1,
            "name": "Primary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 6000,
        "range": {
            "short": 300,
            "long": 1200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 2,
                "dieType": 6,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "explosive",
            "saturate",
            "zone"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Ordnance point-defense"
    },
    {
        "name": "Assault turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4150,
        "range": {
            "short": 1200,
            "long": 4800
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 6,
                "dieType": 6,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 15",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Assault turbolaser battery"
    },
    {
        "name": "Burst turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4500,
        "range": {
            "short": 200,
            "long": 800
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 6,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "auto",
            "burst 1",
            "overheat 2",
            "saturate"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Burst turbolaser battery"
    },
    {
        "name": "Double turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4500,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 6,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "overheat 8"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Double turbolaser battery"
    },
    {
        "name": "Heavy gun battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4000,
        "range": {
            "short": 400,
            "long": 1600
        },
        "attack": {
            "attackBonus": 1,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 4,
                "dieType": 10,
                "sizeMod": null
            },
            "damageType": "kinetic"
        },
        "properties": [
            "Power",
            "constitution 17",
            "overheat 1",
            "vicious 1"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Heavy gun battery"
    },
    {
        "name": "Heavy ion battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4150,
        "range": {
            "short": 1000,
            "long": 4000
        },
        "attack": {
            "attackBonus": 1,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 10,
                "sizeMod": null
            },
            "damageType": "ion"
        },
        "properties": [
            "Power",
            "constitution 17",
            "heavy",
            "ionizing",
            "overheat 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Heavy ion battery"
    },
    {
        "name": "Heavy ion railgun",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 5700,
        "range": {
            "short": 2000,
            "long": 8000
        },
        "attack": {
            "attackBonus": 1,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 10,
                "sizeMod": null
            },
            "damageType": "ion"
        },
        "properties": [
            "Power",
            "constitution 19",
            "ionizing",
            "overheat 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Heavy ion railgun"
    },
    {
        "name": "Heavy slug railgun",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 5150,
        "range": {
            "short": 2400,
            "long": 9600
        },
        "attack": {
            "attackBonus": 1,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 12,
                "sizeMod": null
            },
            "damageType": "kinetic"
        },
        "properties": [
            "Power",
            "constitution 17",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Heavy slug railgun"
    },
    {
        "name": "Heavy thermite railgun",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 5400,
        "range": {
            "short": 2400,
            "long": 9600
        },
        "attack": {
            "attackBonus": 1,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 10,
                "sizeMod": null
            },
            "damageType": "fire"
        },
        "properties": [
            "Power",
            "constitution 19",
            "melt",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Heavy thermite railgun"
    },
    {
        "name": "Heavy turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4150,
        "range": {
            "short": 1200,
            "long": 4800
        },
        "attack": {
            "attackBonus": 1,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 12,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 15",
            "heavy",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Heavy turbolaser battery"
    },
    {
        "name": "Ion battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 6100,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 6,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 13",
            "ionizing",
            "overheat 8"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Ion battery"
    },
    {
        "name": "Light ion battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 6100,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damageDice": {
            "numberOfDice": 3,
            "dieType": 8,
            "sizeMod": null
        },
        "damageType": "ion",
        "properties": [
            "Power",
            "overheat 16"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Light ion battery"
    },
    {
        "name": "Light turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4100,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 8,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "overheat 16"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Light turbolaser battery"
    },
    {
        "name": "Long-range turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4000,
        "range": {
            "short": 2400,
            "long": 9600
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 10,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 15",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Long-range turbolaser battery"
    },
    {
        "name": "Particle Cannon",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 5750,
        "range": {
            "short": 1600,
            "long": 6400
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 6,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 13",
            "overheat 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Particle Cannon"
    },
    {
        "name": "Plasburst turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4000,
        "range": {
            "short": 600,
            "long": 2400
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 8,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "burst 12",
            "overheat 12"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Plasburst turbolaser battery"
    },
    {
        "name": "Pulse turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 2500,
        "range": {
            "short": 500,
            "long": 2000
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "keen 1",
            "piercing 1",
            "overheat 20"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Pulse turbolaser battery"
    },
    {
        "name": "Quad pulse turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4400,
        "range": {
            "short": 400,
            "long": 1600
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 2,
                "dieType": 6,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "overheat 16",
            "rapid 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Pulse turbolaser battery"
    },
    {
        "name": "Quad turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4400,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 6,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 13",
            "overheat 8",
            "rapid 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Quad turbolaser battery"
    },
    {
        "name": "Rapid-fire turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4600,
        "range": {
            "short": 400,
            "long": 1600
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 3
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 6,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "auto",
            "burst 16",
            "overheat 16",
            "rapid 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Rapid-fire turbolaser battery"
    },
    {
        "name": "Thermite battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 6300,
        "range": {
            "short": 1200,
            "long": 4800
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 12,
                "sizeMod": null
            },
            "damageType": "fire"
        },
        "properties": [
            "Power",
            "constitution 17",
            "melt",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Thermite battery"
    },
    {
        "name": "Turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4000,
        "range": {
            "short": 1000,
            "long": 4000
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 3,
                "dieType": 10,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 11",
            "overheat 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Turbolaser battery"
    },
    {
        "name": "Twin turbolaser battery",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 4400,
        "range": {
            "short": 600,
            "long": 2400
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 2,
                "dieType": 8,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 11",
            "rapid 3",
            "overheat 12"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Twin turbolaser battery"
    },
    {
        "name": "Ion railgun",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 5700,
        "range": {
            "short": 1000,
            "long": 4000
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 10,
                "sizeMod": null
            },
            "damageType": "ion"
        },
        "properties": [
            "Power",
            "constitution 17",
            "ionizing",
            "overheat 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Ion railgun"
    },
    {
        "name": "Particle beam",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 5750,
        "range": {
            "short": 800,
            "long": 3200
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 2,
                "dieType": 4,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 11",
            "overheat 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Particle beam"
    },
    {
        "name": "Slug railgun",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 5150,
        "range": {
            "short": 1200,
            "long": 4800
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 12,
                "sizeMod": null
            },
            "damageType": "kinetic"
        },
        "properties": [
            "Power",
            "constitution 15",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Slug railgun"
    },
    {
        "name": "Thermite railgun",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 5400,
        "range": {
            "short": 1200,
            "long": 4800
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 10,
                "sizeMod": null
            },
            "damageType": "fire"
        },
        "properties": [
            "Power",
            "constitution 17",
            "melt",
            "overheat 2"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Thermite railgun"
    },
    {
        "name": "Turbolaser",
        "description": null,
        "weaponCategory": {
            "enum": 2,
            "name": "Secondary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 5000,
        "range": {
            "short": 1000,
            "long": 4000
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": 1,
                "dieType": 10,
                "sizeMod": null
            },
            "damageType": "energy"
        },
        "properties": [
            "Power",
            "constitution 13",
            "overheat 4"
        ],
        "ammo": null,
        "reload": 0,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "Turbolaser"
    },
    {
        "name": "Missile Launcher",
        "description": null,
        "weaponCategory": {
            "enum": 3,
            "name": "Tertiary"
        },
        "size": {
            "enum": 1,
            "name": "Small"
        },
        "cost": 6000,
        "range": {
            "short": 300,
            "long": 600
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": null,
                "dieType": null,
                "sizeMod": null
            },
            "damageType": null
        },
        "properties": [
            "Ammunition",
            "reload 4"
        ],
        "ammo": [
            "Adv. Concussion Missile",
            "Concussion Missile",
            "Proton Rocket",
            "Ion Pulse Missile",
            "Silent thunder Missile",
            "Conner Net Missile",
            "Discord missile",
            "S-thread tracer"
        ],
        "reload": 4,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "missile-launcher"
    },
    {
        "name": "Assault Missile Launcher",
        "description": null,
        "weaponCategory": {
            "enum": 3,
            "name": "Tertiary"
        },
        "size": {
            "enum": 2,
            "name": "Huge"
        },
        "cost": 6250,
        "range": {
            "short": 300,
            "long": 600
        },
        "attack": {
            "attackBonus": 0,
            "attacksPerRound": 1
        },
        "damage": {
            "effect": null,
            "damageDice": {
                "numberOfDice": null,
                "dieType": null,
                "sizeMod": null
            },
            "damageType": null
        },
        "properties": [
            "Ammunition",
            "reload 8"
        ],
        "ammo": [
            "Adv. Concussion Missile",
            "Concussion Missile",
            "Proton Rocket",
            "Ion Pulse Missile",
            "Silent thunder Missile",
            "Conner Net Missile",
            "Discord missile",
            "S-thread tracer"
        ],
        "reload": 8,
        "contentInfo": {
            "type": {
                "enum": 1,
                "name": "Core"
            },
            "partitionKey": "Core",
            "source": {
                "enum": 4,
                "name": "SotG"
            }
        },
        "rowKey": "assault-missile-launcher"
    }
]

export default weaponsList