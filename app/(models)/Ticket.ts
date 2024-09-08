import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URL as string)
mongoose.Promise = global.Promise

export interface TicketType extends Document {
    title : string,
    description : string,
    category : string,
    priority : number,
    progress: number,
    status : string,
    active : boolean
}

const ticketSchema : Schema<TicketType> = new Schema(
{
    title : String,
    description : String,
    category : String,
    priority : Number,
    progress: Number,
    status : String,
    active : Boolean
},
{
    timestamps : true
}
);

export const Ticket = mongoose.models.Ticket as mongoose.Model<TicketType> || mongoose.model<TicketType>("Ticket", ticketSchema)
