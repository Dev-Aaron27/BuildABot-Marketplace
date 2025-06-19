import Slashcommand from "../../../classes/Slashcommand.js";
import { ApplicationCommandOptionType } from "discord.js";
export default new Slashcommand({
    name: "example",
    description: "testing",
    cooldown: 0,
    permissions: ["Administrator"],
    requiredRoles: [],
    options: [
        {
            name: "input",
            description: "The input to echo back",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    func: async ({ interaction }) => {
        const input = interaction.options.getString("input");
        await interaction.reply({ content: `You said: ${input}` });
    }
});
