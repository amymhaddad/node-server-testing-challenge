
exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", function(table) {
        table.increments();
        table.string("firstname").notNullable();
        table.string("lastname").notNullable();
        table.string("password").notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
};
