const statusEffects = {
    "winded" : {
        "name" : "Winded",
        "id" : "sts1",
        "effects" : function(){
        this.ticksModifier = this.ticksModifier*1.1;
    },
        "duration" : function(){
        return this.overcome *((0.05*this.athleticism)/(0.05*this.athleticism+1));
    },
    // Every effect that would cause winded has a 50% chance to cause Exhausted instead. For Shai.
    }
    
    "offbalance" : {
        "name" : "Off Balance"
        "id" : "sts2"
        "effects" : function(){
        this.evasion = this.evasion*0.9;
        this.accuracy = this.accuracy*0.9;
        this.damage = this.damage*0.9;
    },
        "duration" : function(){
            return this.overcome *((0.05*this.balance)/(0.05*this.balance+1));
        },
    //  Every effect that would cause Off-Balance has a 10% chance to cause Prone instead of prolonging Off-Balance. For Shai.
    }
 
    "stunned" : {
        "name" : "Stunned",
        "id" : "sts3",
        "effects" : []
        "duration" : function(){
            return this.overcome *((0.05*this.acuity)/(0.05*this.acuity+1));
            },
    //-50 ticks added at the start of every round. For Shai
    }               
    
    "prone" : {
        "name" : "Prone",
        "id" : "sts4",
        "effects" : function(){
                this.evasion = this.evasion*0.5;
    },
         "duration" : function()[]
     //No attack skills possible. Can't move tiles. After round 50% chance to return to Off-Balance, 50% to fully overcome. For Shai.
    }
    
    "exhausted" : {
        "name" : "Exhausted",
        "id" : "sts5",
        "effects" : function(){
            this.ticksModifier = this.ticksModifier*1.2;
    },
        "duration" : function(){
            return this.overcome *((0.05*this.athleticism)/(0.05*this.athleticism+1));
        },
    //On overcome 50% chance to fully overcome, 50% chance to become winded. For Shai.
    }
    "intimidated" : {
        "name" : "Intimidated",
        "id" : "sts6",
        "effects" : function(){
        this.attackTicksModifier = this.attackTicksModifier*1.2;
        },
        "duration" : function(){
            return this.overcome *((0.05*this.confidence)/(0.05*this.confidence+1));
    },
    //Every effect that would cause intimidated has a 30% chance to cause Terrified instead. For Shai.
    }
    
    "burnt" : {
        "name" : "Burnt",
        "id" : "sts7",
        "effects" : function(){
            this.fire = this.fire*0.75;
        },
         "duration" : function(){
             return this.overcome *((0.05*this.confidence)/(0.05*this.confidence+1));
         },
}

    "frozen" : {
        "name" : "Frozen",
        "id" : "sts8",
        "effects" : function(){
            this.ice = this.ice*0.5;
            this.ticksModifier = this.ticksModifier*1.2;
        },
         "duration" : function(){
             return this.overcome *((0.05*this.phlegma)/(0.05*this.phlegma+1));
         },
    //On expire 50% to return to Chilled. Take 10-200 ice damage a round. For Shai.
}

"drenched" : {
        "name" : "Drenched",
        "id" : "sts9",
        "effects" : function(){
            this.ice = this.ice*0.9;
            this.galvanic = this.galvanic*0.9;
        },
         "duration" : function(){
             return this.overcome *((0.05*this.phlegma)/(0.05*this.phlegma+1));
         },
}

"electrocuted" : {
        "name" : "Electrocuted",
        "id" : "sts10",
        "effects" : function(){
            this.galvanic = this.galvanic*0.9;
        },
         "duration" : function(){
             return this.overcome *((0.05*this.awareness)/(0.05*this.awareness+1));
         },
         }

"blinded" : {
        "name" : "Blinded",
        "id" : "sts11",
        "effects" : function(){
            this.accuracy = this.accuracy*0.5;
            this.evasion = this.evasion*0.80;
        },
         "duration" : function(){
             return this.overcome *((0.05*this.awareness)/(0.05*this.awareness+1));
         },
}

"confused" : {
        "name" : "Confused",
        "id" : "sts12",
        "effects" : function(){
            this.accuracy = this.accuracy*0.8;
        },
         "duration" : function(){
             return this.overcome *((0.05*this.insight)/(0.05*this.insight+1));
         },
    //-50% to cast ability. For discussion.
}

"onfire" : {
        "name" : "On Fire",
        "id" : "sts13",
        "effects" : function(){
            this.fire = this.fire*0.5;
        },
         "duration" : function(){
              return this.overcome *((0.05*this.cholera)/(0.05*this.cholera+1));
         },
    //50-200 fire damage at the end of each round. For Shai.
}

"chilled" : {
        "name" : "Chilled",
        "id" : "sts14",
        "effects" : function(){
            this.ice = this.ice*0.9;
            this.ticksModifier = this.ticksModifier*1.1;
        },
         "duration" : function(){
             return this.overcome *((0.05*this.phlegma)/(0.05*this.phlegma+1));
         },
}

"bleeding" : {
        "name" : "Bleeding",
        "id" : "sts15",
        "effects" : function()[]
         "duration" : function(){
             return this.overcome *((0.05*this.sanguis)/(0.05*this.sanguis+1));
         },
    //Take 10-100 damage to Sanguis a turn. For Shai.
}

"terrified" : {
        "name" : "Terrified",
        "id" : "sts16",
        "effects" : function(){
            this.attackTicksModifier = this.attackTicksModifier*1.2;
        },
         "duration" : function(){           return this.overcome *((0.05*this.confidence)/(0.05*this.confidence+1));
         },
    //On overcome 50% chance to return to intimidated.
}
}

"" : {
        "name" : ""
        "id" : ""
        "effects" : function()[]
         "duration" : function()[] 