import { Module } from '@nestjs/common';
import { BoutiqueController } from './boutique.controller';
import { BoutiqueService } from './boutique.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoutiqueEntity } from './entities/boutique.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoutiqueEntity])],
  controllers: [BoutiqueController],
  providers: [BoutiqueService],
})
export class BoutiqueModule {}
