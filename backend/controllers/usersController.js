const express = require("express");
const bcrypt = require("bcrypt");
const Users = require("../models/UsersModel");
const router = express.Router();
const auth = require("../middleware/auth");

const usernameOrPasswordError = {
  status: "error",
  message: "username or password error",
};

router.post("/new", async (req, res) => {
  try {
    console.log(req.body);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    console.log(req.body.password);
    const createdUser = new Users(req.body);
    const savedUser = await createdUser.save();
    console.log(savedUser);

    // console.log("created user is:", createdUser);
    res.json({ status: "ok", message: "user created" });
  } catch (error) {
    console.log(error);
    res.status(401).json(usernameOrPasswordError);
  }
});

router.delete("/remove", async (req, res) => {
  const { username } = req.body;
  const message = await Users.deleteOne({ username });

  if (message.deletedCount === 1) {
    res.json({ status: "ok", message: "user deleted" });
  } else {
    res.json({ status: "error", message: "problem with deleting user" });
  }
});

router.get("/seed", async (req, res) => {
  const newUsers = [
    { username: "Anti-Mage", password: "Anti-Mage" },
    { username: "Axe", password: "Axe" },
    { username: "Bane", password: "Bane" },
    { username: "Bloodseeker", password: "Bloodseeker" },
    { username: "Crystal Maiden", password: "Crystal Maiden" },
    { username: "Drow Ranger", password: "Drow Ranger" },
    { username: "Earthshaker", password: "Earthshaker" },
    { username: "Juggernaut", password: "Juggernaut" },
    { username: "Mirana", password: "Mirana" },
    { username: "Morphling", password: "Morphling" },
    { username: "Shadow Fiend", password: "Shadow Fiend" },
    { username: "Phantom Lancer", password: "Phantom Lancer" },
    { username: "Puck", password: "Puck" },
    { username: "Pudge", password: "Pudge" },
    { username: "Razor", password: "Razor" },
    { username: "Sand King", password: "Sand King" },
    { username: "Storm Spirit", password: "Storm Spirit" },
    { username: "Sven", password: "Sven" },
    { username: "Tiny", password: "Tiny" },
    { username: "Vengeful Spirit", password: "Vengeful Spirit" },
    { username: "Windranger", password: "Windranger" },
    { username: "Zeus", password: "Zeus" },
    { username: "Kunkka", password: "Kunkka" },
    { username: "Lina", password: "Lina" },
    { username: "Lion", password: "Lion" },
    { username: "Shadow Shaman", password: "Shadow Shaman" },
    { username: "Slardar", password: "Slardar" },
    { username: "Tidehunter", password: "Tidehunter" },
    { username: "Witch Doctor", password: "Witch Doctor" },
    { username: "Lich", password: "Lich" },
    { username: "Riki", password: "Riki" },
    { username: "Enigma", password: "Enigma" },
    { username: "Tinker", password: "Tinker" },
    { username: "Sniper", password: "Sniper" },
    { username: "Necrophos", password: "Necrophos" },
    { username: "Warlock", password: "Warlock" },
    { username: "Beastmaster", password: "Beastmaster" },
    { username: "Queen of Pain", password: "Queen of Pain" },
    { username: "Venomancer", password: "Venomancer" },
    { username: "Faceless Void", password: "Faceless Void" },
    { username: "Wraith King", password: "Wraith King" },
    { username: "Death Prophet", password: "Death Prophet" },
    { username: "Phantom Assassin", password: "Phantom Assassin" },
    { username: "Pugna", password: "Pugna" },
    { username: "Templar Assassin", password: "Templar Assassin" },
    { username: "Viper", password: "Viper" },
    { username: "Luna", password: "Luna" },
    { username: "Dragon Knight", password: "Dragon Knight" },
    { username: "Dazzle", password: "Dazzle" },
    { username: "Clockwerk", password: "Clockwerk" },
    { username: "Leshrac", password: "Leshrac" },
    { username: "Nature's Prophet", password: "Nature's Prophet" },
    { username: "Lifestealer", password: "Lifestealer" },
    { username: "Dark Seer", password: "Dark Seer" },
    { username: "Clinkz", password: "Clinkz" },
    { username: "Omniknight", password: "Omniknight" },
    { username: "Enchantress", password: "Enchantress" },
    { username: "Huskar", password: "Huskar" },
    { username: "Night Stalker", password: "Night Stalker" },
    { username: "Broodmother", password: "Broodmother" },
    { username: "Bounty Hunter", password: "Bounty Hunter" },
    { username: "Weaver", password: "Weaver" },
    { username: "Jakiro", password: "Jakiro" },
    { username: "Batrider", password: "Batrider" },
    { username: "Chen", password: "Chen" },
    { username: "Spectre", password: "Spectre" },
    { username: "Ancient Apparition", password: "Ancient Apparition" },
    { username: "Doom", password: "Doom" },
    { username: "Ursa", password: "Ursa" },
    { username: "Spirit Breaker", password: "Spirit Breaker" },
    { username: "Gyrocopter", password: "Gyrocopter" },
    { username: "Alchemist", password: "Alchemist" },
    { username: "Invoker", password: "Invoker" },
    { username: "Silencer", password: "Silencer" },
    { username: "Outworld Devourer", password: "Outworld Devourer" },
    { username: "Lycan", password: "Lycan" },
    { username: "Brewmaster", password: "Brewmaster" },
    { username: "Shadow Demon", password: "Shadow Demon" },
    { username: "Lone Druid", password: "Lone Druid" },
    { username: "Chaos Knight", password: "Chaos Knight" },
    { username: "Meepo", password: "Meepo" },
    { username: "Treant Protector", password: "Treant Protector" },
    { username: "Ogre Magi", password: "Ogre Magi" },
    { username: "Undying", password: "Undying" },
    { username: "Rubick", password: "Rubick" },
    { username: "Disruptor", password: "Disruptor" },
    { username: "Nyx Assassin", password: "Nyx Assassin" },
    { username: "Naga Siren", password: "Naga Siren" },
    { username: "Keeper of the Light", password: "Keeper of the Light" },
    { username: "Io", password: "Io" },
    { username: "Visage", password: "Visage" },
    { username: "Slark", password: "Slark" },
    { username: "Medusa", password: "Medusa" },
    { username: "Troll Warlord", password: "Troll Warlord" },
    { username: "Centaur Warrunner", password: "Centaur Warrunner" },
    { username: "Magnus", password: "Magnus" },
    { username: "Timbersaw", password: "Timbersaw" },
    { username: "Bristleback", password: "Bristleback" },
    { username: "Tusk", password: "Tusk" },
    { username: "Skywrath Mage", password: "Skywrath Mage" },
    { username: "Abaddon", password: "Abaddon" },
    { username: "Elder Titan", password: "Elder Titan" },
    { username: "Legion Commander", password: "Legion Commander" },
    { username: "Techies", password: "Techies" },
    { username: "Ember Spirit", password: "Ember Spirit" },
    { username: "Earth Spirit", password: "Earth Spirit" },
    { username: "Underlord", password: "Underlord" },
    { username: "Terrorblade", password: "Terrorblade" },
    { username: "Phoenix", password: "Phoenix" },
    { username: "Oracle", password: "Oracle" },
    { username: "Winter Wyvern", password: "Winter Wyvern" },
    { username: "Arc Warden", password: "Arc Warden" },
    { username: "Monkey King", password: "Monkey King" },
    { username: "Dark Willow", password: "Dark Willow" },
    { username: "Pangolier", password: "Pangolier" },
    { username: "Grimstroke", password: "Grimstroke" },
    { username: "Hoodwink", password: "Hoodwink" },
    { username: "Void Spirit", password: "Void Spirit" },
    { username: "Snapfire", password: "Snapfire" },
    { username: "Mars", password: "Mars" },
    { username: "Dawnbreaker", password: "Dawnbreaker" },
    { username: "Marci", password: "Marci" },
    { username: "Primal Beast", password: "Primal Beast" },
  ];

  try {
    const seedUsers = await Users.create(newUsers);
    res.send(seedUsers);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
