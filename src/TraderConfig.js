exports.mod = () => {

    logger.logInfo("[mod] NoRepairPenalty by TheBlackAngelx");
    let config = require("../config.json");
    let mech = config.gameplay.repairPenaltyMechanic;
    let prap = config.gameplay.repairPenaltyPrapor
    let skier = config.gameplay.repairPenaltySkier
    if (config.gameplay.repairPenaltyMechanic !== false) {
        
        data = fileIO.readParsed(db.cacheBase.traders["5a7c2eca46aef81a7ca2145d"].base)
        data.repair.quality = mech
        fileIO.write(db.cacheBase.traders["5a7c2eca46aef81a7ca2145d"].base, data)
        
        
        if (mech == 0.7){

            logger.logSuccess("[MOD NRP] Mechanic repair quality(actually the penalty) set to default value ");
        }
        else{

            logger.logSuccess("[MOD NRP] Mechanic repair quality(actually the penalty) set to " + quality);
    	}
    }
    
    if (config.gameplay.repairPenaltyPrapor !== false){
        
        data = fileIO.readParsed(db.cacheBase.traders["54cb50c76803fa8b248b4571"].base)
        data.repair.quality = prap
        fileIO.write(db.cacheBase.traders["54cb50c76803fa8b248b4571"].base, data)
        
        if(prap == 1.2){
            
            logger.logSuccess("[MOD NRP] Prapor repair quality(actually the penalty) set to: Default Value")
        }
        else{
        
            logger.logSuccess("[MOD NRP] Prapor repair quality(actually the penalty) set to " + quality);
        }
    }
    if (config.gameplay.repairPenaltySkier !== false) {

        data = fileIO.readParsed(db.cacheBase.traders["58330581ace78e27b8b10cee"].base)
        data.repair.quality = skier
        fileIO.write(db.cacheBase.traders["58330581ace78e27b8b10cee"].base, data)
        
        if(skier == 1){

            logger.logSuccess("[MOD NRP] Skier repair quality(actually the penalty) set to default value");
        }
        else{

            logger.logSuccess("[MOD NRP] Skier repair quality(actually the penalty) set to " + quality);
        }
    
    }
    
}