import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ParseUUIDPipe,
} from '@nestjs/common';
import { StudantService } from './studant.service';
import {
  CreateStudantDto,
  studantCreateSchema,
} from './dto/create-studant.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import ZodPipeValidation from './global/pipes/zodTransform.pipe';

@Controller('studant')
export class StudantController {
  constructor(private readonly studantService: StudantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  @ApiResponse({ status: 201, description: 'Successful student' })
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
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.studantService.findOne(id);
  }
}
