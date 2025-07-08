import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new organization' })
  @ApiResponse({ status: 201, description: 'Successful organization' })
  @ApiBody({ type: CreateOrganizationDto })
  async create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return await this.organizationsService.create(createOrganizationDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all organizations' })
  @ApiResponse({
    status: 200,
    description: 'List of organizations successfully returned',
  })
  async findAll() {
    return await this.organizationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Search a organization for id' })
  @ApiResponse({ status: 200, description: 'Organization found successfully' })
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.organizationsService.findOne(id);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Search a organization for userId' })
  @ApiResponse({ description: 'find all organizations by UserId' })
  async findOrganizationByUserId(
    @Param('userId', ParseUUIDPipe) userId: string,
  ) {
    const organizations =
      await this.organizationsService.findOrganizationByUserId(userId);
    return organizations;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a organization' })
  @ApiResponse({
    status: 200,
    description: 'Organization updated successfully',
  })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    return await this.organizationsService.update(id, updateOrganizationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a organization' })
  @ApiResponse({
    status: 200,
    description: 'Organization deleted successfully',
  })
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.organizationsService.remove(id);
  }
}
