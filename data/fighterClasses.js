const fighterClasses = {
	
	scyther : {
		"name" : "brett",
		"age" : "2",
		"gender" : "male",
		"origin" : "",
		"humours" : {
			"cholera" : 100,	
			"sanguis" : 100,	
			"phlegma" : 100,	
			"melancolia" : 100	
		},
		"origin" : "The land with no healthcare",
		"weapons" : ["warScythe"],
		"martialSkills" : ['batt0' /* strike */, 'mart1'  /* shove */,  
							'blad1' /* hew */, 'blad0' /* slash */,  
							'haft2' /* sweep */,  'haft3' /* shaft block */,  
							'mart2' /* rest */,  'mart3' /* recoup */,  
							'mart4' /* concentrate */, 'batt3' /* parry */,
							],
		"passiveSkills" : ['haft4' /* hafted Weapon Skills */, 'blad2' /* bladed weapon skills */,
							'mart5' /* basic skills */, 'batt4' /* basic weapon skills */],
		"magicSkills" : [ 'magi0' /* rocs cry */, 'magi1' /* invigorate */, 'magi2' /* galvanic flash */],
	},

	hammerer : {
		"name" : "shai",
		"age" : "33",
		"gender" : "male",
		"humours" : {
			"cholera" : 260,	
			"sanguis" : 380,	
			"phlegma" : 260,	
			"melancolia" : 200	
		},
		"weapons" : ["warHammer", "warHammer"],
		"martialSkills" : [
			'batt1' /* Feint */, 'dual1' /* Flurry */,
			'heav2' /* Heavy Blow */, 'blun0' /* Armor Crack */,
			'heav1' /* Rattle */, 'batt3' /* Parry */,
			'mart2' /* Rest */, 'mart0' /* Wind-up */,
			'dual0' /* Cross-Block */, 'mart3'/* Recoup */
			
		],
		"passiveSkills" : ['dual2' /* Dual Weapon Skills */, 'blun1' /* Blunt Weapon Skills */,
			'heav0' /* Heavy Weapon Skills	 */],
		"magicSkills" : [
			'magi3' /* Ice Spike */, 'magi4' /* Boreas' Breath */, 'magi5' /* Squall */
		],
		
	}
}

module.exports = fighterClasses;