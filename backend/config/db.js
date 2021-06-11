import mongoose from 'mongoose'

const connectDB = async () => {
  
  try {
    const conn = await mongoose.connect('mongodb+srv://dante:5Fo6g7obGDoVy7B0@cluster0.piudi.mongodb.net/test'||'mongodb://localhost:27017/prodstore', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
