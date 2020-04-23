
const body =  {
			
		"head": {
		"name" : "head",
		"hp" : 50,
		"organs" : {
			"skull" : {
				"effect" : ["bleed"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.6
				},
				"organs" : {
					"brain" : {
						"effect" : ["daze"],
						"death" : {
							"canDie" : true,
							"chanceToDie" : 0.9,
							"chanceToHit" : 0.05,
						}
					}
				}
			},
			
			"eye-left" : {
				"effect" : ["blind"],
				"death" : {
							"canDie" : true,
							"chanceToDie" : 0.6,
							"chanceToHit" : 0.2
						}
			},
			"eye-right" : {
				"effect" : ["blind"],
				"death" : {
							"canDie" : true,
							"chanceToDie" : 0.6,
							"chanceToHit" : 0.2
						}
			},
			"ear-left" : {
				"effect" : ["minor-daze"],
				"death" : false
			},
			"ear-right" : {
				"effect" : ["minor-daze"],
				"death" : false
			},
			
			"nose" : {
				"effect" : ["minor-daze"],
				"death" : false
			}
			
			
		}
	},
	
	"chest": {
		"name" : "chest",
		"hp" : 50,
		"organs" : {
			"ribcage" : {
				"effect" : ["slow", "daze"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				},
				"organs" : {
					
					"heart" : {
						"effect" : ["stun"],
						"death" : {
							"canDie" : true,
							"chanceToDie" : 1
						},
					},
					"lungs" : {
						"effect" : ["stun", "daze"],
						"death" : {
							"canDie" : true,
							"chanceToDie" : 0.8
						},
					},
				}
			},
			
			"spine" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
		}
	},
	
	"stomach": {
		"name" : "abdomen",
		"hp" : 50,
		"organs" : {
			
			"spine" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			},
			"gut" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			},
			"intenstines" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			},
			"liver" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			},
			"kidney-right" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			},
			"kidney-left" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
		}
	},
	
	"left-shoulder": {
		"name" : "thighs",
		"hp" : 50,
		"organs" : {
			
			"arteries" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
			
		}
	},
	
	"right-shoulder": {
		"name" : "knees",
		"hp" : 50,
		"organs" : {
			
			"arteries" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
			
		}
	},
	
	"left-arm": {
		"name" : "left arm",
		"hp" : 50,
		"organs" : {
			
			"arteries" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
			
		}
	},
	
	"right-arm": {
		"name" : "right arm",
		"hp" : 50,
		"organs" : {
			
			"arteries" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
			
		}
	},
	
	"left-leg": {
		"name" : "left leg",
		"hp" : 50,
		"organs" : {
			
			"arteries" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
			
		}
	},

	"right-leg": {
		"name" : "right leg",
		"hp" : 50,
		"organs" : {
			
			"arteries" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
			
		}
	},
	
	"left-hand": {
		"name" : "left hand",
		"hp" : 50,
		"organs" : {
			
			"fingers" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
			
		}
	},
	
	"right-hand": {
		"name" : "right hand",
		"hp" : 50,
		"organs" : {
			
			"fingers" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
			
		}
	},

	"left-foot": {
		"name" : "left foot",
		"hp" : 50,
		"organs" : {
			
			"toes" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
			
		}
	},
	
	"right-foot": {
		"name" : "right foot",
		"hp" : 50,
		"organs" : {
			
			"toes" : {
				"effect" : ["slow"],
				"death" : {
					"canDie" : true,
					"chanceToDie" : 0.4
				}
			}
			
			
		}
	},
			
}
		
		
module.exports = body;