import Sequelize from 'sequelize'

const sequelize = new Sequelize(`postgres://salt:salt@postgres:5432/graphql`)

const User = sequelize.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


sequelize.sync({ force: true }).then(() => {
  return User.create({
    firstName: 'Roey'
  })
})


export default sequelize;
