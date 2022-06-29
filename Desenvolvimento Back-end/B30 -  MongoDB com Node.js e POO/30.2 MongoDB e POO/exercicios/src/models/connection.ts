import mongoose from "mongoose";

const DEFAULT_MONGO_URL = 'mongodb://root:example@localhost:27017/TrybeStore?authSource=admin'

function createDbConnection(dbBaseURL: string = process.env.MONGO_URI || DEFAULT_MONGO_URL) {
  return mongoose.connect(dbBaseURL)
}
export default createDbConnection