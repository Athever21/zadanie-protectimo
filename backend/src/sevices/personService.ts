import {Request, Response} from "express";
import Person from "../sequalize";

export const getAllPersons = async(_: Request, res: Response) => {
  const persons = await Person.findAll({order: [['id', 'DESC']]});
  return res.json(persons);
}

export const createPerson = async(req: Request, res: Response) => {
  const {name, surname, address} = req.body;

  if (!name || !surname) {
    return res.status(400).json({error: "Name and surname must be provided"});
  }

  try {
    const person = await Person.create({
      first_name: name,
      last_name: surname,
      address
    });
  
    return res.json(person);
  } catch {
    return res.status(400).json({error: "Something went wrong"});
  }
}