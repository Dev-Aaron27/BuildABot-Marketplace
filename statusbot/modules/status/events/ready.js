export default {
    name: "ready",
    once: true,
    async execute(client) {
        const { AppDataSource } = await import("../../../utils/database.js");
        const StatusConfig = (await import("../tables/StatusConfig.js")).default;

        const repo = AppDataSource.getRepository(StatusConfig);
        const config = await repo.findOneBy({ id: 1 });

        if (config) {
            client.user.setActivity(config.text, { type: config.type });
            console.log(`[Status Module] Status restored: ${config.type} ${config.text}`);
        } else {
            console.log("[Status Module] No saved status found.");
        }
    }
};
