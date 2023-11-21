import mongoose from "mongoose";

// database connection
const ConnectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.CONN_DB)
        console.log(`Database Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
}

export default ConnectDB;