"use strict";

module.exports = (mongoose) => {
  const userSchema = new mongoose.Schema(
    {
      username: { type: String },
      password: { type: String },
      email: { type: String },
      mobile: { type: String },
      role: { type: String, enum: ["vendor", "rider", "customer"] },
    },
    {
      collection: "users",
      timestamps: true,
    },
  );

  const model = mongoose.model("users", userSchema);
  return model;
};
