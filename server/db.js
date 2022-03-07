const { sequelize } = require('./models');

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({force : true})
    console.log('PSQL connected!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
