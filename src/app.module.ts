import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { BoutiqueModule } from './boutique/boutique.module';
import { ProduitModule } from './produit/produit.module';
import { AbonnementModule } from './abonnement/abonnement.module';
import { CommandeModule } from './commande/commande.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { ListefavorisModule } from './listefavoris/listefavoris.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'zero-gaspii',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UtilisateurModule,
    BoutiqueModule,
    ProduitModule,
    AbonnementModule,
    CommandeModule,
    CommentaireModule,
    ListefavorisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
