import { ApplicationCommandType } from "discord.js";
export default {
    name: "test",
    type: ApplicationCommandType.Message,
    function: async function ({ interaction }) {
        interaction.reply("test");
    },
};
