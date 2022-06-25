import { connect } from "mongoose";
export const createConnection = (url: string = 'mongodb://localhost:27017/world_cups') => connect(url)

export default createConnection