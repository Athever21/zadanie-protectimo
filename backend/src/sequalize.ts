import { Sequelize } from "sequelize";
import PersonModel from "./models/Person";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db.sqlite"
});

const Person = PersonModel(sequelize, Sequelize)

sequelize.sync()
  .then(() => console.log(`Persons db and person table have been created`))

export default Person;