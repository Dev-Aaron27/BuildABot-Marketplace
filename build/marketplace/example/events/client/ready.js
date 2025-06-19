export default {
    name: "ready",
    once: false,
    function: async function (client) {
        console.log(`Logged in as ${client.user.tag}`);
    }
};
