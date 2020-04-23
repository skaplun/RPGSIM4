
let character = {
	"id" : null,
};

character.stats = {
	"name" : null,
	"age" : null,
	"gender" : null,
	"luck" : null,
	"origin" : null
}

character.battleData = {
	"position" : {
		x : null,
		y : null
	},
	"facing" : null,
	"totalTicks" : 100,
	"humours" : {
	  "cholera" : {
		"name" : "Cholera",
		"code" : "cho",
		"value" : null,
		},
	  "sanguis" : {
		"name" : "Sanguis",
		"code" : "san",
		"value" : null,
		},
		"phlegma" : {
		  "name" : "Phlegma",
		  "code" : "phl",
		  "value" : null,
		},
		"melancolia" :{
		  "name" : "Melancolia",
		  "code" : "mel",
		  "value" : null,
		  
		}	
		
	},
	"activeModifiers" : [],
	"activeStatusEffects" : [
		{
			bleed : function(){
					let alreadyExecuted = 2;
					let execute = 10;
					if(alreadyExecuted < execute){
						let effect = this.dmg - 20
						alreadyExecuted +=1;
					}else{
						this.stopEffects.push('bleed')
					}
				} 
		}
	]
	
}
character.worldData = {
	"position" : {
		x : null,
		y : null
	},
	"flipX" : null
	
}

character.flags = {
	"isDead" : false,
	"isPve" : false,
	"kids" : [],
	"spouse" : null,
	"inBattle" : false,
	"inWorld" : true,
	
	"damagedBodyParts" : [],
	"damagedBodyOrgans" : []
	
}

character.inventory = {
	"weapons" : [],
	"armor" : [],
	"items" : []
},

character.humours = {
  "cholera" : {
    "name" : "Cholera",
	"code" : "cho",
    "value" : null,
	},
  "sanguis" : {
    "name" : "Sanguis",
	"code" : "san",
    "value" : null,
	},
	"phlegma" : {
	  "name" : "Phlegma",
	  "code" : "phl",
	  "value" : null,
	},
	"melancolia" :{
	  "name" : "Melancolia",
	  "code" : "mel",
	  "value" : null,
	  
	}
	
	
}

character.traits = {
   "insight" : {
		"name" : "Insight",
		"code" : "ins",
		"calcValue" : function(){
			return (this.humours.melancolia.value + this.humours.cholera.value) / 2 ;
		},
		"value" : null
  },
  "confidence" : {
		"name" : "Confidence",
		"code" : "con",
		"calcValue" : function(){
			return (this.humours.phlegma.value + this.humours.cholera.value) / 2 ;
		},
	},
	"balance" : {
	  "name" : "Balance",
	  "code" : "bal",
	  "calcValue" : function(){
			return (this.humours.sanguis.value + this.humours.cholera.value) / 2 ;
		},
		"value" : null
	},
	"awareness" : {
	  "name" : "Awareness",
	  "code" : "awa",
	  "calcValue" : function(){
			return (this.humours.melancolia.value + this.humours.sanguis.value) / 2 ;
		},
		"value" : null
	},
	"athleticism" : {
	  "name" : "Athleticism",
	  "code" : "ath",
	  "calcValue" : function(){
			return (this.humours.phlegma.value + this.humours.sanguis.value) / 2 ;
		},
		"value" : null
	},
	"acuity" : {
	  "name" : "Acuity",
	  "code" : "acu",
	  "calcValue" : function(){
			return (this.humours.melancolia.value + this.humours.phlegma.value) / 2 ;
		},
		"value" : null
	},
	
}

character.combatTraits = {
	"accuracy" : {
	  "name" : "Accuracy",
	  "code" : "acu",
	  "calcValue" : function(){
			return (this.traits.confidence.value + this.traits.athleticism.value + this.traits.insight.value)/3 ;
		},
		"value" : null
	},
	"evasion" : {
	  "name" : "Evasion",
	  "code" : "acu",
	  "calcValue" : function(){
			return (this.traits.awareness.value + this.traits.balance.value + this.traits.acuity.value) / 3 ;
		},
		"value" : null
	},
	
	
}

character.resistence = {
	"fire" : {
	  "name" : "Fire",
	  "code" : "fir",
	  "calcValue" : function(){
			return ( (0.01 * this.humours.cholera.value) / ((0.01 * this.humours.cholera.value) + 1)) / 2 ;
		},
		"value" : null
	},
	"air" : {
	  "name" : "Air",
	  "code" : "air",
	  "calcValue" : function(){
			return ( (0.01 * this.humours.sanguis.value) / ((0.01 * this.humours.sanguis.value) + 1)) / 2 ;
		},
		"value" : null
	},
	"water" : {
	  "name" : "Water",
	  "code" : "wat",
	  "calcValue" : function(){
			return ( (0.01 * this.humours.phlegma.value) / ((0.01 * this.humours.phlegma.value) + 1)) / 2 ;
		},
		"value" : null
	},
	"earth" : {
	  "name" : "Earth",
	  "code" : "ert",
	  "calcValue" : function(melancolia){
			return ( (0.01 * this.humours.melancolia.value) / ((0.01 * this.humours.melancolia.value) + 1)) / 2 ;
		},
		"value" : null
	},
}

character.skills = {
	
	martialSkills : [],
	magicSkills : [],
	passiveSkills : []
	
}


	
	


module.exports = character;
	

	
	
	