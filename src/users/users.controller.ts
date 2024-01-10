import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/schemas/user.schema';
import { Createuserdto } from 'src/dto/create-user.dto';

@Controller('user')
export class UsersController {
constructor (private userService:UsersService){}

@Get()
async getAllUser(){
    return this.userService.getAllUser();
}

@Post('create')
async CreateUser(@Body() user:Createuserdto)
{
    return this.userService.createUser(user);
}

@Get(':id')
async GetSingleUser(@Param('id') id:any)
:Promise<User>{
    return this.userService.getSingleUser(id);
}

@Patch(':id')
async UpdateUser(@Param('id') id:string ,@Body() user:User):Promise<User>{
    return this.userService.updateUser(id,user);
}
@Delete(':id')
async DeleteUser(@Param('id')id :string):Promise<User>{
return this.userService.deleteUser(id);
}

}
