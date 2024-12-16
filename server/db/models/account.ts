import mongoose, { Document } from "mongoose";

enum UserRole {
  Admin = "Admin",
  Standard = "Standard",
}

interface Account extends Document {
  username: string;
  password: string;
  email: string;
  role: UserRole;
  secret: string;
}

const schema = new mongoose.Schema<Account>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.Standard,
    },
    secret: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model<Account>("Account", schema);
export default Account;
