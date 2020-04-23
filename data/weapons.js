
let weapons = {

	"warScythe" : {
		"name" : "War Scythe",
		"id" : "wep0",
		"length" : {
			"value" : 2,
			"unit" : "m"
		},
		"Weight" : {
			"value" : 2.5,
			"unit" : "kg",
		},
		"Damage" : {
			min : 23,
			max : 43
		},
		"damageModifier" : function(){
			return ( 6 * (( this.athleticism + this.acuity ) / 2) / (3 (( this.athleticism + this.acuity) / 2) + 275 ) );
		},
		"tohitmodifier" : 1.18,
		"effects" : ["hafted", "bladed"]

	},
	
	"warHammer" : {
		"name" : "War Hammer",
		"id" : "wep1",
		"length" : {
			"value" : 0.75,
			"unit" : "m"
		},
		"Weight" : {
			"value" : 2,
			"unit" : "kg",
		},
		"Damage" : {
			min : 16,
			max : 24
		},
		"damageModifier" : function(){
			return ( 6 * (( this.athleticism + this.balance ) / 2) / (3 (( this.athleticism + this.balance) / 2) + 275 ) );
		},
		"tohitmodifier" : 1.12,
		"effects" : ["heavy", "blunt"] 

	}

}



module.exports = weapons