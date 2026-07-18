const mongoose = require("mongoose");
const config = require("config");
const Tag = require("./models/Tag");

const db = config.get("mongoURI");

const tags = ["Work", "Personal", "Urgent", "Shopping", "Health"];

const seed = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected...");

    for (const name of tags) {
      const exists = await Tag.findOne({ name });
      if (!exists) {
        await Tag.create({ name });
        console.log(`Added tag: ${name}`);
      } else {
        console.log(`Tag already exists: ${name}`);
      }
    }

    console.log("Done seeding tags.");
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

seed();