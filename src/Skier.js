exports.mod = () => {
    
    logger.logInfo("[mod] NoRepairPenalty by TheBlackAngelx");
    let config = require("../config.json");
    let quality = config.gameplay.repairPenaltySkier
    
    if (config.gameplay.repairPenaltySkier !== false) {

        data = fileIO.readParsed(db.cacheBase.traders["58330581ace78e27b8b10cee"].base)
        data.repair.quality = quality
        fileIO.write(db.cacheBase.traders["58330581ace78e27b8b10cee"].base, data)
        logger.logSuccess("[MOD NRP] Skier repair quality(actually the penalty) set to " + quality);
    }
}