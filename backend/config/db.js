import mongoose from 'mongoose'

const connectDB = async () => {
  
  try {
    console.log('Inside Db COnention', process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/prodstore', {
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
