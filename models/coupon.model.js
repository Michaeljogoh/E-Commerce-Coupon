// coupon schema

module.exports = (sequelize, Sequelize) => {
  const Coupon = sequelize.define("coupon", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    published: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Coupon;
};
