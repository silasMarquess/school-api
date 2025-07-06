import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StudantService } from './studant.service';
import { CreateStudantDto } from './dto/create-studant.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('studant')
export class StudantController {
  constructor(private readonly studantService: StudantService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo aluno' })
  @ApiResponse({ status: 201, description: 'Aluno criado com sucesso' })
  create(@Body() createStudantDto: CreateStudantDto) {
    return this.studantService.create(createStudantDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os alunos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de alunos retornada com sucesso',
  })
  findAll() {
    return this.studantService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um aluno por ID' })
  @ApiResponse({ status: 200, description: 'Aluno encontrado com sucesso' })
  findOne(@Param('id') id: string) {
    return this.studantService.findOne(+id);
  }
}
