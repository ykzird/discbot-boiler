const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('titty')
        .setDescription("Titties"),
    async execute(interaction) {
        await interaction.reply('Titty');
    },
};