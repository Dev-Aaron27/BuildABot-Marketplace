import Slashcommand from "../../../classes/Slashcommand.js";
import { ApplicationCommandOptionType, ActivityType } from "discord.js";
import { AppDataSource } from "../../../utils/database.js";
import StatusConfig from "../tables/StatusConfig.js";

export default new Slashcommand({
    name: "setstatus",
    description: "Set the bot's custom status",
    cooldown: 5,
    permissions: ["Administrator"],
    requiredRoles: [],
    options: [
        {
            name: "type",
            description: "Status type",
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                { name: "Playing", value: "PLAYING" },
                { name: "Watching", value: "WATCHING" },
                { name: "Listening", value: "LISTENING" },
                { name: "Competing", value: "COMPETING" }
            ]
        },
        {
            name: "text",
            description: "Status text (e.g. 'commands', 'your server')",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    func: async ({ interaction, client }) => {
        const type = interaction.options.getString("type");
        const text = interaction.options.getString("text");

        const repo = AppDataSource.getRepository(StatusConfig);
        let config = await repo.findOneBy({ id: 1 });

        if (!config) {
            config = repo.create({ id: 1, type, text });
        } else {
            config.type = type;
            config.text = text;
        }

        await repo.save(config);
        client.user.setActivity(text, { type: ActivityType[type] });

        await interaction.reply({ content: `✅ Status updated to **${type.toLowerCase()} ${text}**`, ephemeral: true });
    }
});
