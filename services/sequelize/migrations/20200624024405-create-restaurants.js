module.exports.up = (queryInterface, DataTypes) => {
  // Create a table
  return queryInterface.createTable(
    "restaurants",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      chef_id: {
        allowNull: false,
        references: {
          key: "id",
          model: "chefs",
        },
        type: DataTypes.INTEGER.UNSIGNED,
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

module.exports.down = (queryInterface) => {
  // Drop a table
  queryInterface.dropTable("restaurants");
};
