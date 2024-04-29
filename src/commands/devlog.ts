import { CommandInteraction, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from "discord.js";
export const data = new SlashCommandBuilder()
  .setName("devlog")
  .setDescription("Writes down a simple Dev Log")
  .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers) // Change this if you want
  .setDMPermission(false)
  .addStringOption(option =>
    option.setName('type')
      .setDescription('Type of Change')
      .setRequired(true)
      .addChoices(
        { name: 'Add', value: 'add' },
        { name: 'Remove', value: 'rm' },
        { name: 'Edit', value: 'edit' },
      ))
  .addStringOption(option =>
    option.setName('devlog')
      .setRequired(true)
      .setDescription("DevLog Content - Write a brief description of the changes"));


export async function execute(interaction: CommandInteraction) {
  const devlog = interaction.options.get('devlog')?.value
  const type = interaction.options.get('type')?.value

  switch (type) {
    case "add":
      const embedAdd = new EmbedBuilder()
        .setColor("Green")
        .setDescription(`${devlog}`)
      await interaction.reply({
        embeds: [embedAdd]
      });
      break
    case "rm":
      const embedRm = new EmbedBuilder()
        .setColor("Red")
        .setDescription(`${devlog}`)
      await interaction.reply({
        embeds: [embedRm]
      });
      break
    case "edit":
      const embedEdit = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`${devlog}`)
      await interaction.reply({
        embeds: [embedEdit]
      });
      break
  }

}