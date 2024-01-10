import { Injectable ,NotFoundException } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Createuserdto } from 'src/dto/create-user.dto';


@Injectable()
export class UsersService {

      constructor(@InjectModel(User.name) private userModel:mongoose.Model<User>){}
      
      async getAllUser():Promise<User[]>{
        const users =await this.userModel.find()
        return users;
      }

      async getSingleUser(id:string):Promise<User>{
        const user =this.userModel.findById(id);
        if (!user) {
            throw new NotFoundException('user not found.');
          }
      
          return user;
       
      }

      async createUser(user:User):Promise<User>{
        console.log(user);
        
        const us = await this.userModel.create(user);
        return us;
      }

      async updateUser(id:string,user:User):Promise<User>{
        return await this.userModel.findByIdAndUpdate(id, user ,{
            new: true,
            runValidators: true,
          });
      }

      async deleteUser(id:string):Promise<User>{
        const us = await this.userModel.findByIdAndDelete(id);
        return us;
      }

}
