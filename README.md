# Welcome to the BuildABot marketplace developer documentation!
----
This documentation is designed to help you understand how to create and manage your own marketplace modules for BuildABot.

# Getting Started
----
To get started, you will need to familiarize yourself with the following key concepts:
- **Folder Structure**: Understand the folder structure of a marketplace module.
- **env.json**: The env.json file includes your bot's TOKEN and the DATABASE name that you're using.
- **Commands**: Understand how to create and manage commands within your module.
- **Other Modules' API**: Learn how to interact with other modules' APIs to enhance your module's functionality.
- **Database**: Understand how to create and manage database tables for your module.

# Folder Structure
----
The folder structure of a marketplace module is crucial for organization and functionality. Here’s a basic overview:

```
Module/
├── buttons/
│   └── button.js
├── commands/
│   └── myCommand.js
├── contextMenus/
│   └── myContextMenu.js
├── events/
│   └── ready.js
├── selectMenus/
│   └── myMenu.js
├── slashCommands/
│   └── mySlashCommand.js
├── tables/
│   └── schema.js
└── utils/
    └── myFunction.js
```

# env.json
----
The `env.json` file is essential for your module to function correctly. It should contain the following structure:
```json
{
    "TOKEN": "my_token",
    "DATABASE": "my_database"
}

```
Make sure to replace `my_token` and `my_database` with your actual bot token and database name.


## Note: You need to put your module folder name in `modules.json` file so that the bot can recognize your module.

# Commands
----
Commands are the core of your module. They allow users to interact with your bot. Here’s a simple example of how to create a command:
```javascript
// commands/myCommand.js
import Command from "../classes/Command.js";
export default new Command({
    name: "test",
    description: "testing",
    aliases: [],
    cooldown: 0,
    permissions: ["Administrator"],
    requiredRoles: [{ role: "123456789012345678", required: true }],
    func: async ({ message, args }) => {
        if (!args[0]) {
            const msg = await message.reply({ content: "you didn't say anything!" });
            message.delete();
            return setTimeout(() => msg.delete(), 5000);
        }
        const msg = await message.reply({ content: `you said: ${args.join(" ")}` });
        message.delete();
        setTimeout(() => msg.delete(), 5000);
    }
});
```

Note that slash commands are separate from regular commands. You can create slash commands in the `slashCommands` folder, and they will be registered automatically when the bot starts, here's an example:
```javascript
// slashCommands/mySlashCommand.js
import Slashcommand from "../../../classes/Slashcommand.js";
import { ApplicationCommandOptionType } from "discord.js";
export default new Slashcommand({
    name: "test",
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
```

### Note: There are example files for each type of command in the `commands`, `slashCommands`, `contextMenus`, `selectMenus`, and `buttons` folders. You can use these as templates to create your own commands.

# Other Modules' API
----
BuildABot allows you to interact with other modules' APIs. This is useful for creating complex functionalities that require data or actions from other modules. If support a module will include a `utils/api.js` file, you can import it like this:
```javascript
import { exampleAPI } from "../moduleName/utils/api.js";

const data = await exampleAPI.someFunction();
console.log(data);
```

# Database
----
To manage data, you can create and interact with database tables. The `tables` folder is where you define your database schema, since the bot uses TypeORM, you can create a schema like this:
```javascript
// tables/schema.js
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export default class MyTable {
    @PrimaryGeneratedColumn()
    id;

    @Column({ type: "varchar", length: 255 })
    name;

    @Column({ type: "int" })
    value;
}
```

The databases tables are automatically synced on bot startup, if you need to reset the database, you can use the `resetDatabase` option provided in the config file to reset the database on startup.

# Conclusion
----
This documentation provides a basic overview of how to create and manage your own marketplace modules for BuildABot.
If you need any further assistance, feel free to reach out to the BuildABot staff team (`@adley.`, `@mx1d`) or check the [BuildABot Discord server](https://discord.gg/Cs2a3qZDFg) for more resources and support.