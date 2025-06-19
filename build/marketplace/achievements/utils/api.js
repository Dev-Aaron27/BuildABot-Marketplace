import Achievement from "../tables/Achievement.js";
import AchievementRequirement from "../tables/AchievementRequirement.js";
export async function getAchievements(userId) {
    const achivements = await Achievement.find({ where: { user: userId } });
    return achivements;
}
export async function addAchievement(userId, achievementId, name, description, type, value, role) {
    const achievement = new Achievement();
    achievement.user = userId;
    achievement.achievementId = achievementId;
    achievement.name = name;
    achievement.description = description;
    achievement.type = type;
    achievement.value = value;
    achievement.role = role;
    await achievement.save();
    return achievement;
}
export async function deleteAchievement(achievementId) {
    const achievement = await Achievement.findOne({ where: { id: achievementId } });
    if (achievement) {
        await achievement.remove();
    }
}
export async function addAchievementRequirement(name, description, type, value, role) {
    const requirement = new AchievementRequirement();
    requirement.name = name;
    requirement.description = description;
    requirement.type = type;
    requirement.value = value;
    requirement.role = role;
    await requirement.save();
}
