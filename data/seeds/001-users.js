exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { name: "Jon Snow", email: "jonsnow@wall.com", username: "jonsnow", password: "password" },
    { name: "Arya Stark", email: "aryastark@winterfell.com", username: "aryastark", password: "password" },
    { name: "Samwell Tarley", email: "samwell@maester.com", username: "samwell", password: "password" }
  ]);
};
