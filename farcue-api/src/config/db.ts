import mongoose from 'mongoose';

const connectDb = async(): Promise<void> => {
    try{
        if(!process.env.MONGO_URI){
            throw new Error('MONGO_URI is not defined in environment variables');
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    }catch(error: unknown){
        if(error instanceof Error){
            console.error('MongoDB connection failed', error.message);
        }else{
            console.error('Unknown MongoDB connection error', error)
        }

        process.exit(1);
    }
}

export default connectDb;