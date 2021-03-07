import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BoutiqueEntity } from '../../boutique/entities/boutique.entity';
import { CommentaireEntity } from '../../commentaire/entities/commentaire.entity';
import { CommandeEntity } from '../../commande/entities/commande.entity';
import { ListefavorisEntity } from '../../listefavoris/entities/listefavoris.entity';
import { TimestampEntities } from '../../Generics/Timestamp.entities';
import { UserTypeEnum } from '../../enums/user.type.enum';

@Entity('user')
export class UserEntity extends TimestampEntities {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nom: string;
  @Column()
  prenom: string;
  @Column()
  numtel: number;
  @Column()
  adresse: string;
  @Column({ type: 'enum', enum: UserTypeEnum, default: UserTypeEnum.USER })
  type: string;
  @Column()
  salt: string;
  @PrimaryColumn()
  @Column({
    unique: true,
  })
  mail: string;
  @Column({
    name: 'mot de passe',
  })
  password: string;
  @OneToMany((type) => BoutiqueEntity, (boutique) => boutique.user, {
    cascade: true,
    nullable: true,
  })
  boutiques: BoutiqueEntity[];
  @OneToMany((type) => CommentaireEntity, (commentaire) => commentaire.user, {
    cascade: true,
    nullable: true,
  })
  commentaires: CommentaireEntity[];
  @OneToMany((type) => CommandeEntity, (commande) => commande.user, {
    cascade: true,
    nullable: true,
  })
  commandes: CommandeEntity[];
  @OneToOne((type) => ListefavorisEntity, (listefavoris) => listefavoris.user, {
    cascade: true,
    nullable: true,
  })
  listefavoris: ListefavorisEntity[];
}
