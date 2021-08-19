export default (sequelize: any, type: any) => {
  return sequelize.define('person', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: type.STRING,
    last_name: type.STRING,
    address: type.STRING
  });
};