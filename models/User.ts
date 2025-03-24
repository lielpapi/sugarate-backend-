// models/User.ts
import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  profileImage?: string;
  coverImage?: string;
  createdAt: Date;
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IUser>('User', userSchema);