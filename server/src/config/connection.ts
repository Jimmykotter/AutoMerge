import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techquiz');

export default mongoose.connection;

// mongodb+srv://jimmykotter:n3uLqumcvvaorrjh@cluster0.agmqava.mongodb.net/Automerge?retryWrites=true&w=majority&appName=Cluster0