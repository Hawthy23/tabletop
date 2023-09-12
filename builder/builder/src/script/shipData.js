var shipData = {
    "shipName": "No Engraving Please",
    "shipSize": "Tiny",
    "ShipTier": 0,
    "tierRole": ["IDK", "", "", "", ""], //5 tiers available?
    "profBonus": 2,
    "reactor": "",
    "powerCoupling": "",
    "fueluseMod": "",
    "powerDice": {
        "size": "",
        "regen": {
            "num": "",
            "size": "",
            "mod": "",
        },
        "max": {
            "central": "",
            "system": ""
            //5 systems: communications, engines, shields, sensors, weapons
        },
        "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
    },
    "hullStats": {
        "type": "Deflection",
        "current": 40,
        "temp": 1,
        "max": 40, //add dice.num * con mod. 
        "dice": {
            "num": 5,
            "size": 8
        },
        "overrideFlag": false,
        "overrides": {
            "current": "",
            "Max": ""
        },
        "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
    },
    "armorStats": {
        "dispName": "Saving Throw",
        "baseAC": 10,
        "mod": "dex",
        "tierBonus": ["NULL", "", "", "", "", ""],
        "Armor": "",
        "total": "",
        "magicBonus": 0,
        "miscBonus": 0,
        "modsBonus": [0, 0],
        "overrideFlag": false,
        "overrides": {
            "calcTotal": "",
            "total": "",
            "Armor": "",
            "magicBonus": "",
            "miscBonus": "",
        },
        "damageReduction": 0,
        "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
    },
    "shieldStats": {
        "type": "Directional",
        "current": 40,
        "max": 40, //add dice.num * con mod. 
        "temp": 5,
        "regenRate": 1,
        "capacity": 1,
        "dice": {
            "num": 5,
            "size": 8
        },
        "overrideFlag": false,
        "overrides": {
            "current": "",
            "Max": ""
        },
        "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
    },
    "baseStat": {
        "str": {
            "baseStat": 14, "bonus": 2,
            "asi": ["", "", "", "", "", ""],
            "overrideFlag": false,
            "overrides": { "total": "", "magicBonus": "", "miscBonus": "" },
            "mods": [{ "name": "", "bonus": "" }]
        },
        "dex": {
            "statNum": 18, "bonus": 4,
            "asi": ["", "", "", "", "", ""],
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": "" }]
        },
        "con": {
            "statNum": 16, "bonus": 3,
            "asi": ["", "", "", "", "", ""],
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": "" }]
        },
        "wis": {
            "statNum": 10, "bonus": 0,
            "asi": ["", "", "", "", "", ""],
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": "" }]
        },
        "int": {
            "statNum": 12, "bonus": 1,
            "asi": ["", "", "", "", "", ""],
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": "" }]
        },
        "cha": {
            "statNum": 20, "bonus": 5,
            "asi": ["", "", "", "", "", ""],
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": "" }]
        }
    },
    "weapons": [{
        "name": "Slug cannon",
        "firingArc": ["port", "aft"],
        "number": 2,
        "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
    }],
    "saves": {
        "str": {
            "dispName": "Saving Throw",
            "baseStat": "str",
            "total": 5,
            "prof": 1, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 0, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            },
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "dex": {
            "dispName": "Saving Throw",
            "baseStat": "dex",
            "total": 4, //should total to 2+2 with adv
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            },
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "con": {
            "dispName": "Saving Throw",
            "baseStat": "con",
            "total": 0, //should total to 2+2 with adv
            "prof": 1, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "int": {
            "dispName": "Saving Throw",
            "baseStat": "int",
            "total": 0, //should total to 2+2 with adv
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "wis": {
            "dispName": "Saving Throw",
            "baseStat": "wis",
            "total": 0, //should total to 2+2 with adv
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "cha": {
            "dispName": "Saving Throw",
            "baseStat": "cha",
            "total": 0, //should total to 2+2 with adv
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },

    },
    "skills": {
        "boost": {
            "dispName": "Boost",
            "baseStat": "str",
            "total": 8, //should total to 2+2 with adv
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 2, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": true,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "13",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "ram": {
            "dispName": "Ram",
            "baseStat": "str",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "hide": {
            "dispName": "Hide",
            "baseStat": "dex",
            "total": -4,
            "prof": 1, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 0, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "maneuvering": {
            "dispName": "Maneuvering",
            "baseStat": "dex",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "patch": {
            "dispName": "Patch",
            "baseStat": "con",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "regulation": {
            "dispName": "Regulation",
            "baseStat": "con",
            "total": 0,
            "prof": 2, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "astrogation": {
            "dispName": "Astrogation",
            "baseStat": "int",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "data": {
            "dispName": "Data",
            "baseStat": "int",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "probe": {
            "dispName": "Probe",
            "baseStat": "int",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "scan": {
            "dispName": "Scan",
            "baseStat": "wis",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "impress": {
            "dispName": "Impress",
            "baseStat": "cha",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "interfere": {
            "dispName": "Interfere",
            "baseStat": "cha",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "menace": {
            "dispName": "Menace",
            "baseStat": "cha",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
        "swindle": {
            "dispName": "Swindle",
            "baseStat": "cha",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "calcTotal": "",
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }, 
            "mods": [{ "name": "", "bonus": {"type": "", "number":""} }]
        },
    }
}

export default shipData