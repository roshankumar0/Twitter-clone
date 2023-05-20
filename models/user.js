import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categories: { type: String, required: true },
  price: { type: Number, required: true },
});

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserModel;
