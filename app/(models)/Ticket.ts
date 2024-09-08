import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URL as string)
mongoose.Promise = global.Promise

export interface Ticket extends Document {
    title : string,
    description : string,
    category : string,
    priority : number,
    status : string,
    active : boolean
}

const ticketSchema : Schema<Ticket> = new Schema(
{
    title : String,
    description : String,
    category : String,
    priority : Number,
    status : String,
    active : Boolean
},
{
    timestamps : true
}
);

export const Ticket = mongoose.models.Ticket as mongoose.Model<Ticket> || mongoose.model<Ticket>("Ticket", ticketSchema)
