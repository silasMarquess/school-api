import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ParseUUIDPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { StudantService } from '../prisma/studant.service';
import {
  CreateStudantDto,
  studantCreateSchema,
  studentUpdateSchema,
} from './dto/create-studant.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import ZodPipeValidation from '../global/pipes/zodTransform.pipe';
import { UpdateStudantDto } from './dto/update-studant.dto';

@Controller('studant')
export class StudantController {
  constructor(private readonly studantService: StudantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  @ApiResponse({ status: 201, description: 'Successful student' })
  @ApiBody({ type: CreateStudantDto })
  @UsePipes(new ZodPipeValidation(studantCreateSchema))
  async create(@Body() createStudantDto: CreateStudantDto) {
    return await this.studantService.create(createStudantDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all students' })
  @ApiResponse({
    status: 200,
    description: 'List of students successfully returned',
  })
  async findAll() {
    return await this.studantService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Search a student for id' })
  @ApiResponse({ status: 200, description: 'Student found successfully' })
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.studantService.findOne(id);
  }

  @Put(':studantId')
  @ApiOperation({ summary: 'Update a student' })
  @ApiResponse({
    status: 200,
    description: 'Student updated successfully',
  })
  @ApiBody({ type: UpdateStudantDto })
  @UsePipes(new ZodPipeValidation(studentUpdateSchema))
  async update(
    @Param('studantId', ParseUUIDPipe) studantId: string,
    @Body() updateStudantDto: UpdateStudantDto,
  ) {
    const studentUpdated = await this.studantService.update(
      studantId,
      updateStudantDto,
    );
    return studentUpdated;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a student' })
  @ApiResponse({
    status: 200,
    description: 'Student deleted successfully',
  })
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.studantService.delete(id);
  }
}
