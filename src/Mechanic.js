exports.mod = () => {

    logger.logInfo("[mod] NoRepairPenalty by TheBlackAngelx");
    let config = require("../config.json");
    let quality = config.gameplay.repairPenaltyMechanic;
    
    if (config.gameplay.repairPenaltyMechanic !== false) {
        
        data = fileIO.readParsed(db.cacheBase.traders["5a7c2eca46aef81a7ca2145d"].base)
        data.repair.quality = quality
        fileIO.write(db.cacheBase.traders["5a7c2eca46aef81a7ca2145d"].base, data)
        logger.logSuccess("[MOD NRP] Mechanic repair quality(actually the penalty) set to " + quality);
    }
}