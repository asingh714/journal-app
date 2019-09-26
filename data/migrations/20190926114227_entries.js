
exports.up = function(knex) {
  return knex.schema.createTable("entries", table => {
    table.increments();

    // Morning 
    table.date("date").notNullable();

    table.string("grateful_one")
    table.string("grateful_two")
    table.string("grateful_three")

    table.string("great_one")
    table.string("great_two")
    table.string("great_three")

    table.string("daily_affirmation")

    table.integer("feel_one")

    // Evening
    table.string("amazing_one")
    table.string("amazing_two")
    table.string("amazing_three")

    table.string("better")

    table.integer("feel_two")

    table.integer("user_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("users")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("entries")
};
