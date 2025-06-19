import Balance from "../tables/Balance.js";
import database from "../../../handlers/databaseHandler.js";
export async function addBalance(userId, guildId, amount) {
    const tableExists = await database.query(`SHOW TABLES LIKE 'balance'`);
    if (tableExists.length === 0)
        return;
    const balance = await Balance.findOne({ where: { userId, guildId } });
    if (!balance) {
        return await Balance.create({ userId, guildId, balance: amount }).save();
    }
    balance.balance += Number(amount);
    return await balance.save();
}
export async function subtractBalance(userId, guildId, amount) {
    const tableExists = await database.query(`SHOW TABLES LIKE 'balance'`);
    if (tableExists.length === 0)
        return;
    const balance = await Balance.findOne({ where: { userId, guildId } });
    if (!balance) {
        return await Balance.create({ userId, guildId, balance: -amount }).save();
    }
    balance.balance -= Number(amount);
    return await balance.save();
}
export async function getBalance(userId, guildId) {
    const tableExists = await database.query(`SHOW TABLES LIKE 'balance'`);
    if (tableExists.length === 0)
        return;
    const balance = await Balance.findOne({ where: { userId, guildId } });
    if (!balance) {
        return 0;
    }
    return balance.balance;
}
export async function setBalance(userId, guildId, amount) {
    const tableExists = await database.query(`SHOW TABLES LIKE 'balance'`);
    if (tableExists.length === 0)
        return;
    const balance = await Balance.findOne({ where: { userId, guildId } });
    if (!balance) {
        return await Balance.create({ userId, guildId, balance: amount }).save();
    }
    balance.balance = Number(amount);
    return await balance.save();
}
export async function resetBalance(userId, guildId) {
    const tableExists = await database.query(`SHOW TABLES LIKE 'balance'`);
    if (tableExists.length === 0)
        return;
    const balance = await Balance.findOne({ where: { userId, guildId } });
    if (!balance) {
        return await Balance.create({ userId, guildId, balance: 0 }).save();
    }
    balance.balance = 0;
    return await balance.save();
}
