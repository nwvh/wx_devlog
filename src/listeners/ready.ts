import { Client } from "discord.js";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        console.log(`WX DevLogs Started`)
        console.log(`Logged in as ${client.user.username}!`);
    });
};