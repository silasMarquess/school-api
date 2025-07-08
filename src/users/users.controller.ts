import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UsePipes,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, userZodSchema } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import ZodPipeValidation from 'src/global/pipes/zodTransform.pipe';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'Successful user' })
  @ApiBody({ type: CreateUserDto })
  @UsePipes(new ZodPipeValidation(userZodSchema))
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all users' })
  @ApiResponse({
    status: 200,
    description: 'List of users successfully returned',
  })
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Search a user for id' })
  @ApiResponse({ status: 200, description: 'User found successfully' })
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
  })
  @ApiBody({ type: UpdateUserDto })
  @UsePipes(new ZodPipeValidation(userZodSchema))
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({
    status: 200,
    description: 'User deleted successfully',
  })
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.usersService.delete(id);
  }
}
