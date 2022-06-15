import mongoose from "mongoose";

const Schema = mongoose.Schema;

const skillsSchema = new Schema ({
  skill: String,
  rating: Number
});

const Skill = mongoose.model('Skill',skillsSchema);

export {
  Skill
}