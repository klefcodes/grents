module.exports.up = (queryInterface, DataTypes) => {
  // Create a table
  return queryInterface.createTable(
    "chefs",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    { charset: "utf8" }
  );
};

module.exports.down = (queryInterface) => queryInterface.dropTable("chefs");
