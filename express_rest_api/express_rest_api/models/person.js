"use strict";

module.exports = function (sequelize, DataTypes) {
    var Person = sequelize.define("person", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        personal_number: DataTypes.STRING
    }, {
            timestamps: false,
            tableName: 'person'
        });
    return Person;
};