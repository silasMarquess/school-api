import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { classZodSchema, CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import ZodPipeValidation from 'src/global/pipes/zodTransform.pipe';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  @UsePipes(new ZodPipeValidation(classZodSchema))
  @ApiOperation({ summary: 'Create a new class' })
  @ApiBody({ type: CreateClassDto })
  @ApiResponse({ status: 201, description: 'Successful class' })
  async create(@Body() createClassDto: CreateClassDto) {
    return await this.classService.create(createClassDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all classes' })
  @ApiResponse({
    status: 200,
    description: 'List of classes successfully returned',
  })
  findAll() {
    return this.classService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Search a class for id' })
  @ApiResponse({ status: 200, description: 'Class found successfully' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.classService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a class' })
  @ApiResponse({
    status: 200,
    description: 'Class updated successfully',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateClassDto: UpdateClassDto,
  ) {
    return this.classService.update(id, updateClassDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a class' })
  @ApiResponse({
    status: 200,
    description: 'Class deleted successfully',
  })
  remove(@Param('id') id: string) {
    return this.classService.remove(id);
  }

  @Get(':OrganizationId')
  @ApiOperation({ summary: 'Search a class for OrganizationId' })
  @ApiResponse({
    status: 200,
    description: 'Class found successfully',
  })
  async findClassByOrganizationId(
    @Param('OrganizationId', ParseUUIDPipe) organizationId: string,
  ) {
    return await this.classService.findClassByOrganizationId(organizationId);
  }
}
