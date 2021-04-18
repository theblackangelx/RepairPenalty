exports.mod = () => {

    logger.logInfo("[mod] NoRepairPenalty by TheBlackAngelx");
    let config = require("../config.json");
    let quality = config.gameplay.repairPenaltyPrapor;
    
    if (config.gameplay.repairPenaltyPrapor != false) {
        
        data = fileIO.readParsed(db.cacheBase.traders["54cb50c76803fa8b248b4571"].base)
        data.repair.quality = quality
        fileIO.write(db.cacheBase.traders["54cb50c76803fa8b248b4571"].base, data)

        logger.logSuccess("[MOD NRP] Prapor repair quality set to " + quality);
    }
}
