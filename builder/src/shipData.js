var shipData = {
    "name": "No Engraving Please",
    "profBonus": 2,
    "hullStats": {
        "current": 40,
        "temp": 1,
        "max": 40,
        "dice": {
            "num": 5,
            "size": 8
        }
    },
    "shieldStats": {
        "current": 40,
        "temp": 5,
        "regenRate": 1,
        "capacity": 1,
        "dice": {
            "num": 5,
            "size": 8
        }
    },
    "baseStat": {
        "str": { "statNum": 14, "bonus": 2 },
        "dex": { "statNum": 18, "bonus": 4 },
        "con": { "statNum": 16, "bonus": 3 },
        "wis": { "statNum": 10, "bonus": 0 },
        "int": { "statNum": 12, "bonus": 1 },
        "cha": { "statNum": 20, "bonus": 5 }
    },
    "saves": {
        "str": {
            "dispName":"Strength Saving Throw",
            "baseStat": "str",
            "total": 0, //should total to 2+2 with adv
            "prof": 1, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "dex": {
            "dispName":"Dexterity Saving Throw",
            "baseStat": "dex",
            "total": 0, //should total to 2+2 with adv
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "con": {
            "dispName":"Constitution Saving Throw",
            "baseStat": "con",
            "total": 0, //should total to 2+2 with adv
            "prof": 1, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "int": {
            "dispName":"Intelligence Saving Throw",
            "baseStat": "int",
            "total": 0, //should total to 2+2 with adv
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "wis": {
            "dispName":"Wisdom Saving Throw",
            "baseStat": "wis",
            "total": 0, //should total to 2+2 with adv
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "cha": {
            "dispName":"Charisma Saving Throw",
            "baseStat": "cha",
            "total": 0, //should total to 2+2 with adv
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },

    },
    "skills": {
        "boost": {
            "dispName":"Boost",
            "baseStat": "str",
            "total": 0, //should total to 2+2 with adv
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 2, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "ram": {
            "dispName":"Ram",
            "baseStat": "str",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "hide": {
            "dispName":"Hide",
            "baseStat": "dex",
            "total": 0,
            "prof": 1, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 0, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "maneuvering": {
            "dispName":"Maneuvering",
            "baseStat": "dex",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "patch": {
            "dispName":"Patch",
            "baseStat": "con",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "regulation": {
            "dispName":"Regulation",
            "baseStat": "con",
            "total": 0,
            "prof": 2, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "astrogation": {
            "dispName":"Astrogation",
            "baseStat": "int",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "data": {
            "dispName":"Data",
            "baseStat": "int",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "probe": {
            "dispName":"Probe",
            "baseStat": "int",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "scan": {
            "dispName":"Scan",
            "baseStat": "wis",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "impress": {
            "dispName":"Impress",
            "baseStat": "cha",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "interfere": {
            "dispName":"Interfere",
            "baseStat": "cha",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "menace": {
            "dispName":"Menace",
            "baseStat": "cha",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
        "swindle": {
            "dispName":"Swindle",
            "baseStat": "cha",
            "total": 0,
            "prof": 0, //not prof, 0=not, 1=prof, 2=expert, 3=extra
            "adv": 1, //0 = dis, 1=reg, 2=adv
            "magicBonus": 0,
            "miscBonus": 0,
            "overrideFlag": false,
            "overrides": {
                "baseStat": "",
                "total": "",
                "prof": "",
                "adv": "",
                "magicBonus": "",
                "miscBonus": "",
            }
        },
    }
}