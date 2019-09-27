exports.up = function(knex) {
  return knex.schema.createTable("quotes", table => {
    table.increments();

    table.string("quote");

    table.string("author");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("quotes");
};
