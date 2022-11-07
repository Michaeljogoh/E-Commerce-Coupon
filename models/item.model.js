// Cart items

module.exports = (sequelize, DataTypes) => {
  const Items = sequelize.define("cart", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Items;
};
