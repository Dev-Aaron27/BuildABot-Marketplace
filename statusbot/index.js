import { Client, GatewayIntentBits, ActivityType } from "discord.js";
import { AppDataSource } from "./utils/database.js";  // Adjust if needed
import readyEvent from "./modules/status/events/ready.js";

const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

// Initialize your database connection before login
(async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database initialized!");

    // Register the ready event
    client.once(readyEvent.name, () => readyEvent.execute(client));

    // Login to Discord
    await client.login(TOKEN);
    console.log("Bot logged in!");
  } catch (error) {
    console.error("Error during bot startup:", error);
  }
})();
