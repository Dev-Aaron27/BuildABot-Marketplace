import Level from "../tables/Level.js";
import { xpNeeded } from "./levels.js";
export async function getLevel(user) {
    const level = await Level.findOne({ where: { userId: user } });
    return level;
}
export async function getLeaderboard(guild) {
    const leaderboard = await Level.find({ where: { guildId: guild }, order: { level: "DESC" }, take: 10 });
    return leaderboard;
}
export async function getLeaderboardPosition(user, guild) {
    const leaderboard = await Level.find({ where: { guildId: guild }, order: { level: "DESC" } });
    const position = leaderboard.findIndex((entry) => entry.userId === user) + 1;
    return position;
}
export async function getTotalXP(user) {
    const level = await getLevel(user);
    if (!level)
        return 0;
    let total = 0;
    for (let i = 2; i < level.level; i++) {
        total += xpNeeded(i);
    }
    total += level.xp;
    return total;
}
