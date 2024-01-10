import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({timestamps:true})
export class User {
    @Prop()
    name:string
    @Prop()
    age:number
    @Prop()
    city:string

}

export const userSchema=SchemaFactory.createForClass(User);
