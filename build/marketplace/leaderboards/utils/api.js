import { buildEmbed } from "../../../utils/configBuilders.js";
export async function generateLeaderboardEmbed(leaderboard, title, amount) {
    leaderboard = leaderboard.sort((a, b) => b.amount - a.amount);
    const embed = buildEmbed({ preset: "default" })
        .setTitle(`🏆 ${title} Leaderboard`)
        .setDescription(leaderboard.map((user, index) => `**${index + 1}.** ${user.user} - **${user.amount}**`).slice(0, amount).join("\n"))
        .setFooter({ text: `Top ${amount} users` });
    return embed;
}
