import { Injectable } from '@angular/core';

@Injectable()
export class AdathieService {

  attackSpell = [
    {
      'category': 'attack',
      'level': 1,
      'name': 'Coup de fourchette',
      'castingTime': 1,
      'cost': '3 PA',
      'material': null,
      'damage': '1D6 - 1 (min 1)',
      'note': 'Ignore l\'armure naturelle',
      'test': 'Magie Physique',
      'critFail': null,
      'critSuccess': 'dégats x2'
    },
    {
      'category': 'attack',
      'level': 2,
      'name': 'Merguez de combat',
      'castingTime': 3,
      'cost': '4 PA/Merguez',
      'material': null,
      'damage': '1D6 (8 AT) feu',
      'note': 'Une seul épreuve de contrôle, parade impossible',
      'test': 'Magie Psychique',
      'testControl': 'Magie Psychique + 2D6 vs 2D6 +7',
      'critFail': 'Implosion 2BL directs dans 5M',
      'critSuccess': 'Ignore l\'armure'
    },
    {
      'category': 'attack',
      'level': 3,
      'name': 'Glaive de la justice',
      'castingTime': 3,
      'cost': '5 PA',
      'material': null,
      'damage': '2D6 +2',
      'note': 'L\'armure compte',
      'test': 'Magie Physique (niveau 9-)',
      'testControl': null,
      'critFail': null,
      'critSuccess': '+1D6'
    },
    {
      'category': 'attack',
      'level': 4,
      'name': 'Charbons ardents d\'Adathie',
      'castingTime': 1,
      'cost': '7 PA',
      'material': null,
      'damage': '2D6 +2',
      'note': 'Attaque en cone, 1 jet par cible, ignore la moitié des PR. Pas de bonus INT',
      'test': 'Magie Physique',
      'testControl': null,
      'critFail': null,
      'critSuccess': null
    },
    {
      'category': 'attack',
      'level': 5,
      'name': 'Gerbille justicière',
      'castingTime': null,
      'cost': '10 PA',
      'material': '1 bougie verte, 1 plume de coq',
      'damage': '1D6 +4 tranchants/magique',
      'note': '30 PV, 10 AT 8 PRD 15 COU, 2 PR 9 RM',
      'test': 'Magie Psychique -1',
      'testControl': 'Magie Psychique +2D6 vs 2D6 +9',
      'critFail': 'Sort entropique',
      'critSuccess': 'Pas de contrôle, ignore l\'armure (AT)'
    }
  ];

  supportSpell =
  [
    {
      'level': 1,
      'category': 'support',
      'name': 'Guérison équitable',
      'cost': '1PA par PV',
      'material': '1 dose de sang par cible',
      'note': 'Même nombre PV par cible'
    },
    {
      'level': 1,
      'category': 'support',
      'name': 'Clairvoyance divine',
      'castingTime': 3,
      'cost': '4 PA',
      'material': null,
      'damage': '+4 INT',
      'note': 'Pas d\'épreuve après le niveau 6',
      'test': 'Magie Psychique + 2',
      'critFail': '1D6 de blessure',
      'critSuccess': 'Aucun PA nécessaire'
    },
    {
      'level': 2,
      'category': 'support',
      'name': 'Garde à vue de Labahk',
      'castingTime': 2,
      'cost': '4 PA',
      'material': null,
      'damage': '-1 AT/PRD, -2 INT, -3 COU',
      'note': 'Uniquement humain sans tête vide',
      'test': 'Magie Psychique',
      'critFail': 'Cible un allié ou prêtre',
      'critSuccess': 'Réddition'
    },
    {
      'level': 2,
      'category': 'support',
      'name': 'Assistance juridique',
      'castingTime': 2,
      'cost': '3 PA',
      'material': null,
      'damage': '+1 PR et RM (+2 si niveau 6+)',
      'note': 'La valeur des PR Naturelles <= 3',
      'test': 'Magie Psychique +2',
      'critFail': 'Perte d\'une armure au hasard',
      'critSuccess': 'PR et RM x2'
    },
    {
      'level': 3,
      'category': 'support',
      'name': 'Armure de graisse',
      'castingTime': 2,
      'cost': '2 PA par PR',
      'material': null,
      'damage': '-1 CHA / PA/2 PR',
      'note': 'Max PR déterminé par le niveau',
      'test': 'Magie Psychique +1',
      'testControl': null,
      'critFail': 'Perte d\'une armure au hasard',
      'critSuccess': '+1 PR'
    },
    {
      'level': 4,
      'category': 'support',
      'name': 'Force des justes',
      'castingTime': 3,
      'cost': '8 PA',
      'material': null,
      'damage': 'Dégâts +2 / COU +2',
      'note': 'Affecte les alliés dans un rayon de 5m',
      'test': 'Magie Psychique (niveau 7-)',
      'testControl': null,
      'critFail': 'Bonus sont des malus',
      'critSuccess': '4 PA au lieu de 8'
    },
    {
      'level': 6,
      'category': 'support',
      'name': 'Bouclier de Régis',
      'castingTime': 3,
      'cost': '10 PA',
      'material': null,
      'damage': 'Immunité contre les sorts nécessitant un test RM, PR Magique +Niveau/2',
      'note': '5m',
      'test': 'Magie Psychique -2 (niveau 9-)',
      'testControl': null,
      'critFail': 'Sort entropique',
      'critSuccess': 'PA/2'
    },
    {
      'level': 7,
      'category': 'support',
      'name': 'Sanctuaire d\'Adathie',
      'castingTime': 2,
      'cost': '10 PA',
      'material': null,
      'damage': 'Armure totale sauf malédiction',
      'note': 'Uniquement sur le prètre',
      'test': 'Magie Psychique -1',
      'testControl': null,
      'critFail': 'Sort entropique',
      'critSuccess': 'PA/2'
    }
  ];

  utilitySpell = [
    {
      'level': 1,
      'category': 'utility',
      'name': 'Fumet du barbecue',
      'castingTime': 2,
      'cost': '4 PA',
      'material': null,
      'test': 'CHA +1D6 vs INT +1D6',
      'note': '100m de portée à partir d\'un point visible',
      'critFail': null,
      'critSuccess': null
    },
    {
      'level': 3,
      'category': 'utility',
      'name': 'Sainte Béarnaise / Harissa',
      'castingTime': null,
      'cost': '1 PA pour 2 cibles',
      'material': '1 dose d\'huile / 1 bol',
      'damage': '+1 PV par repas (niveau 6+ +2, niveau 10+ +3)',
      'note': 'Peut servir à impressionner',
      'test': null,
      'testControl': null,
      'critFail': null,
      'critSuccess': null
    },
    {
      'level': 5,
      'category': 'utility',
      'name': 'Altération charcutière',
      'castingTime': 2,
      'cost': '6 PA',
      'material': null,
      'damage': 'L\'arme est une merguez, COU -2',
      'note': '10m',
      'test': 'Magie Psychique -1',
      'testControl': null,
      'critFail': 'Arme d\'allié au hasard transformé',
      'critSuccess': 'Pas de test RM et l\'équipement est aussi en merguez, INT raté -> réddition'
    },
    {
      'level': 8,
      'category': 'utility',
      'name': 'Réparation exécutoire',
      'castingTime': null,
      'cost': '10 PA',
      'material': null,
      'damage': 'Récupération tous les PV',
      'note': 'Soigne blessure, saignement et infections. 1 fois par jour.',
      'test': 'Magie Psychique (niveau 9-)',
      'testControl': null,
      'critFail': '2D6 BL directs (ne tue pas)',
      'critSuccess': 'cible 1PV max de plus (définitif)'
    },
    {
      'level': 9,
      'category': 'utility',
      'name': 'Justice aveugle',
      'castingTime': 4,
      'cost': '13 PA',
      'material': null,
      'damage': 'la cible pert la vue, AD, COU, CHA -6 / AT-5 / PRD -8',
      'note': '15m, test RM',
      'test': 'Magie Psychique -3',
      'testControl': null,
      'critFail': '3D6 sur prètre',
      'critSuccess': 'PA/2'
    },
    {
      'level': 10,
      'category': 'utility',
      'name': 'Triomphe de la raison',
      'castingTime': 5,
      'cost': '15 PA',
      'material': null,
      'damage': 'Les cibles changent de camp',
      'note': 'Effet 1h, test INT de résistance, 15m',
      'test': 'Magie Psychique -2',
      'testControl': null,
      'critFail': 'Sort entropique',
      'critSuccess': 'Pas de test de résistance'
    }
  ];

  categories = [ 'attack', 'support', 'utility' ];

  constructor() { }

  GetAttack(): any[] {
    return this.attackSpell;
  }

  GetSupport(): any[] {
    return this.supportSpell;
  }

  GetUtility(): any[] {
    return this.utilitySpell;
  }

  GetCategory(): any[] {
    return this.categories;
  }
}
