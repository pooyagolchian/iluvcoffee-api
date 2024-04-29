import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/api/coffees')
export class CoffeesController {
  @Get('/flavors')
  findAll() {
    return 'This action returns all the coffees!';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns ${id} coffees!`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
