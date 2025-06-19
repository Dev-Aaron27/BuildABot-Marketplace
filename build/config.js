export default {
    prefix: "-",
    debugMode: true,
    resetDatabase: false,
    database: {
        type: "mysql",
        host: "",
        port: 3306,
        username: "",
        password: ""
    },
    status: [
        {
            type: "Watching",
            message: "the bots"
        }
    ],
    owners: ["1234567890123456789"],
    googleTranslateKey: "",
    levelling: {
        difficultyMultiplier: 2.5
    },
    embeds: {
        presets: {
            success: {
                thumbnail: "https://img.icons8.com/bubbles/200/checkmark.png",
            },
            error: {
                thumbnail: "https://img.icons8.com/bubbles/200/error.png",
            },
            loading: {
                thumbnail: "https://img.icons8.com/bubbles/200/loading-bar.png",
            },
            info: {
                thumbnail: "https://img.icons8.com/bubbles/200/info--v1.png",
            },
            default: {
                title: null,
                description: null,
                color: "#00ffff",
                author: {
                    name: null,
                    iconURL: null
                },
                footer: {
                    text: null,
                    iconURL: null
                },
                thumbnail: null,
                image: null,
                timestamp: true,
                fields: []
            }
        },
        example: {
            title: "Example Embed",
            description: "This is an example embed.",
            color: "#ff0000"
        }
    },
    buttons: {
        example: {
            label: "Example Button",
            style: "Primary",
            emoji: "🔗"
        }
    }
};
