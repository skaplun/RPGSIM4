const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


/*
{
	baseDmg : Number text,
	dmgType : effect type text,
	fightText : effect text,
	multipliesFrom : {
		stat : calculation,
		stat : calculation,
		stat : calculation
	},
	statusEffects : {
		effect : {
			success-ratio : x%,
			effect-name : name,
			effect : effect,
		}
	}
}

*/

const skillSchema = new Schema({
  baseDmg: {
    type: String,
    required: true
  },
  persistent: {
    type: String,
    required: true
  },
  skillType: {
    type: String,
    required: true
  },
  cost: {
    type: String,
    required: true
  },
  dmgType: {
    type: String,
    required: false
  },
  fightText : {
    type: String,
    required: true
  },
  multipliesFrom : {
	type : Map,
	of : string
  },
  effects : {
	type : Map,
	of : string
  }
  
});

const ChatModel = mongoose.model('skill', skillSchema);

module.exports = skillSchema;