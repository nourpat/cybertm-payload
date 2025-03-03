import { BLOG_CATEGORIES } from '../types/blog';

export const articles = [
  {
    id: 'best-practices-2024',
    title: 'Les meilleures pratiques en cybersécurité pour 2024',
    description: 'Découvrez les dernières tendances et recommandations pour protéger votre entreprise.',
    date: '2024-01-15',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['Cybersécurité', 'Bonnes pratiques', '2024'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    author: {
      name: 'Jean Dupont',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    content: `# Les meilleures pratiques en cybersécurité pour 2024

La cybersécurité évolue rapidement, et 2024 apporte son lot de nouveaux défis.

## 1. Authentification Multi-Facteurs (MFA)

L'authentification multi-facteurs n'est plus une option mais une nécessité :
- Utilisation systématique pour tous les accès critiques
- Adoption de solutions biométriques
- Intégration de tokens physiques

## 2. Zero Trust Architecture

Le principe de "Ne faire confiance à personne" s'impose :
- Vérification continue de chaque accès
- Segmentation du réseau
- Contrôle granulaire des permissions

## 3. Intelligence Artificielle et Machine Learning

L'IA révolutionne la détection des menaces :
- Analyse comportementale
- Détection d'anomalies en temps réel
- Réponse automatisée aux incidents

## 4. Protection des données dans le cloud

Le cloud nécessite une attention particulière :
- Chiffrement de bout en bout
- Gestion des accès basée sur les rôles
- Sauvegarde régulière et sécurisée`
  },
  {
    id: 'social-engineering-threats',
    title: 'L\'ingénierie sociale : La menace invisible',
    description: 'Comment se protéger contre les techniques de manipulation en cybersécurité.',
    date: '2024-01-20',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['Ingénierie sociale', 'Sécurité', 'Formation'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7',
    author: {
      name: 'Marie Laurent',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2'
    },
    content: `# L'ingénierie sociale : La menace invisible

L'ingénierie sociale reste l'une des principales menaces en cybersécurité.

## Techniques courantes

### 1. Phishing
- Emails frauduleux
- SMS malveillants (Smishing)
- Appels téléphoniques suspects (Vishing)

### 2. Manipulation psychologique
- Urgence
- Autorité
- Peur

## Mesures de protection

### 1. Formation continue
- Sensibilisation régulière
- Exercices pratiques
- Mises en situation

### 2. Procédures de vérification
- Double validation
- Canaux de communication sécurisés
- Protocoles d'escalade`
  },
  {
    id: 'ai-cybersecurity',
    title: 'L\'IA dans la cybersécurité : Opportunités et Risques',
    description: 'Comment l\'intelligence artificielle transforme la sécurité informatique et crée de nouveaux défis.',
    date: '2024-01-25',
    category: BLOG_CATEGORIES.AI,
    tags: ['Intelligence Artificielle', 'Cybersécurité', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    author: {
      name: 'Alexandre Chen',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
    },
    content: `# L'IA dans la cybersécurité : Opportunités et Risques

## Applications de l'IA en cybersécurité

### 1. Détection des menaces
- Analyse comportementale
- Détection d'anomalies
- Prédiction des attaques

### 2. Automatisation de la réponse
- Réponse automatisée aux incidents
- Quarantaine automatique
- Remédiation intelligente

### 3. Analyse prédictive
- Anticipation des menaces
- Évaluation des risques
- Recommandations proactives`
  },
  {
    id: 'zero-trust-security',
    title: 'Sécurité Zero Trust : Le Nouveau Standard',
    description: 'Pourquoi adopter une approche "Ne faire confiance à personne" est crucial en 2024.',
    date: '2024-01-28',
    category: BLOG_CATEGORIES.BEST_PRACTICES,
    tags: ['Zero Trust', 'Architecture', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    author: {
      name: 'Thomas Bernard',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    content: `# Sécurité Zero Trust : Le Nouveau Standard

## Principes fondamentaux

### 1. Vérification continue
- Authentification permanente
- Autorisation contextuelle
- Évaluation des risques en temps réel

### 2. Moindre privilège
- Accès minimal requis
- Segmentation fine
- Révocation automatique

### 3. Microsegmentation
- Isolation des workloads
- Contrôle granulaire
- Politique par défaut restrictive`
  },
  {
    id: 'gdpr-telemarketing',
    title: 'RGPD et Télémarketing B2B',
    description: 'Guide pratique pour respecter le RGPD dans vos campagnes de télémarketing.',
    date: '2024-02-01',
    category: BLOG_CATEGORIES.COMPLIANCE,
    tags: ['RGPD', 'Conformité', 'Télémarketing'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    author: {
      name: 'Claire Dubois',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
    },
    content: `# RGPD et Télémarketing B2B

## Obligations légales

### 1. Consentement
- Base légale
- Traçabilité
- Droit de retrait

### 2. Protection des données
- Minimisation
- Sécurisation
- Conservation limitée

### 3. Droits des personnes
- Information
- Accès
- Rectification
- Effacement`
  },
  {
    id: 'cloud-security',
    title: 'Sécurité Cloud : Enjeux et Solutions',
    description: 'Protégez vos données dans le cloud avec les meilleures pratiques de sécurité.',
    date: '2024-02-05',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['Cloud', 'Infrastructure', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    author: {
      name: 'Marc Lambert',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    content: `# Sécurité Cloud : Enjeux et Solutions

## Sécurisation du cloud

### 1. Configuration
- Hardening
- Monitoring
- Backup

### 2. Accès
- IAM
- MFA
- SSO

### 3. Données
- Chiffrement
- DLP
- Classification`
  },
  {
    id: 'ransomware-protection',
    title: 'Protection contre les Ransomwares en 2024',
    description: 'Stratégies avancées pour prévenir et gérer les attaques par rançongiciel.',
    date: '2024-02-08',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['Ransomware', 'Protection', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7',
    author: {
      name: 'Emma Rousseau',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    content: `# Protection contre les Ransomwares en 2024

## Stratégies de protection

### 1. Prévention
- Sensibilisation
- Patches
- Sauvegardes

### 2. Détection
- EDR
- SIEM
- SOC

### 3. Réponse
- Plan d'incident
- Communication
- Restauration`
  },
  {
    id: 'remote-work-security',
    title: 'Sécurité du Travail à Distance',
    description: 'Comment sécuriser efficacement le travail à distance de vos équipes.',
    date: '2024-02-10',
    category: BLOG_CATEGORIES.BEST_PRACTICES,
    tags: ['Télétravail', 'Sécurité', 'Bonnes pratiques'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    author: {
      name: 'Julie Moreau',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    },
    content: `# Sécurité du Travail à Distance

## Mesures essentielles

### 1. Accès sécurisé
- VPN
- MFA
- Chiffrement

### 2. Équipements
- Hardening
- MDM
- Backup

### 3. Formation
- Bonnes pratiques
- Vigilance
- Support`
  },
  {
    id: 'quantum-computing-threats',
    title: 'L\'Informatique Quantique : Menace pour la Cybersécurité',
    description: 'Impact de l\'informatique quantique sur la sécurité des données et solutions.',
    date: '2024-02-12',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['Quantique', 'Cryptographie', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    author: {
      name: 'Sarah Cohen',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
    },
    content: `# L'Informatique Quantique : Menace pour la Cybersécurité

## Impacts et solutions

### 1. Menaces
- Cryptographie classique
- Infrastructure PKI
- Protocoles actuels

### 2. Solutions
- Cryptographie post-quantique
- Nouveaux algorithmes
- Migration progressive

### 3. Préparation
- Évaluation
- Planification
- Adaptation`
  },
  {
    id: 'email-security',
    title: 'Sécurité des Emails en Entreprise',
    description: 'Guide complet pour sécuriser vos communications par email.',
    date: '2024-02-15',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['Email', 'Communication', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    author: {
      name: 'Emma Dubois',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
    },
    content: `# Sécurité des Emails en Entreprise

## Protection des communications

### 1. Filtrage
- Anti-spam
- Anti-malware
- DLP

### 2. Authentification
- SPF
- DKIM
- DMARC

### 3. Chiffrement
- TLS
- S/MIME
- PGP`
  },
  {
    id: 'siem-technology',
    title: 'SIEM : L\'Intelligence de la Sécurité',
    description: 'Comprendre et exploiter les systèmes de gestion des informations de sécurité.',
    date: '2024-02-18',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['SIEM', 'Monitoring', 'SOC'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    author: {
      name: 'Marc Lambert',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    content: `# SIEM : L'Intelligence de la Sécurité

## Fonctionnalités clés

### 1. Collecte
- Sources multiples
- Normalisation
- Stockage

### 2. Analyse
- Corrélation
- Détection
- Alertes

### 3. Réponse
- Automatisation
- Investigation
- Reporting`
  },
  {
    id: 'mssp-services',
    title: 'MSSP : Externaliser sa Sécurité',
    description: 'Avantages et considérations pour le choix d\'un fournisseur de services de sécurité managés.',
    date: '2024-02-20',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['MSSP', 'Services managés', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    author: {
      name: 'Sarah Martin',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2'
    },
    content: `# MSSP : Externaliser sa Sécurité

## Services proposés

### 1. Surveillance
- SOC
- Monitoring
- Incident Response

### 2. Solutions
- Firewall
- EDR/XDR
- SIEM

### 3. Expertise
- Conseil
- Support
- Formation`
  },
  {
    id: 'gdpr-update',
    title: 'RGPD 2024 : Nouvelles Exigences et Conformité',
    description: 'Mise à jour sur les dernières exigences RGPD et stratégies de mise en conformité.',
    date: '2024-03-08',
    category: BLOG_CATEGORIES.COMPLIANCE,
    tags: ['RGPD', 'Conformité', 'Protection des données'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    author: {
      name: 'Emma Rousseau',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    content: `# RGPD 2024 : Nouvelles Exigences et Conformité

## Évolutions réglementaires

### 1. Nouvelles obligations
- Registre des traitements
- Analyse d'impact
- DPO

### 2. Transferts internationaux
- Mécanismes de transfert
- Garanties appropriées
- Évaluation des risques

### 3. Sanctions renforcées
- Amendes administratives
- Actions correctives
- Responsabilité civile`
  },
  {
    id: 'devsecops-implementation',
    title: 'Implémentation DevSecOps : Guide Complet',
    description: 'Méthodologie détaillée pour intégrer la sécurité dans votre pipeline DevOps.',
    date: '2024-03-12',
    category: BLOG_CATEGORIES.BEST_PRACTICES,
    tags: ['DevSecOps', 'CI/CD', 'Sécurité', 'Automatisation'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    author: {
      name: 'Thomas Bernard',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    content: `# Implémentation DevSecOps : Guide Complet

## Intégration de la sécurité

### 1. Pipeline CI/CD
- Tests de sécurité
- Analyse statique
- Scan de dépendances

### 2. Infrastructure as Code
- Sécurité par défaut
- Templates sécurisés
- Validation automatique

### 3. Monitoring continu
- Observabilité
- Alerting
- Métriques de sécurité`
  },
  {
    id: 'threat-hunting-ai',
    title: 'Threat Hunting avec l\'IA : Techniques Avancées',
    description: 'Utilisation de l\'intelligence artificielle pour la détection proactive des menaces.',
    date: '2024-03-15',
    category: BLOG_CATEGORIES.AI,
    tags: ['Threat Hunting', 'IA', 'Sécurité', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    author: {
      name: 'Alexandre Chen',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
    },
    content: `# Threat Hunting avec l'IA : Techniques Avancées

## Intelligence artificielle et détection

### 1. Machine Learning
- Modèles supervisés
- Apprentissage profond
- Classification des menaces

### 2. Analyse comportementale
- Profilage utilisateur
- Détection d'anomalies
- Patterns d'attaque

### 3. Automatisation
- Workflows intelligents
- Enrichissement des alertes
- Priorisation des menaces`
  },
  {
    id: 'container-security',
    title: 'Sécurité des Conteneurs et Kubernetes',
    description: 'Meilleures pratiques pour sécuriser vos environnements conteneurisés.',
    date: '2024-03-18',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['Conteneurs', 'Kubernetes', 'Docker', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
    author: {
      name: 'Marc Lambert',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    },
    content: `# Sécurité des Conteneurs et Kubernetes

## Protection des environnements conteneurisés

### 1. Images
- Scan de vulnérabilités
- Base minimale
- Signature

### 2. Runtime
- Isolation
- Contrôle d'accès
- Monitoring

### 3. Orchestration
- RBAC
- Network Policies
- Pod Security`
  },
  {
    id: 'blockchain-security',
    title: 'Sécurité des Applications Blockchain',
    description: 'Protection des smart contracts et des applications décentralisées.',
    date: '2024-03-21',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['Blockchain', 'Smart Contracts', 'DApps', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    author: {
      name: 'Sophie Martin',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2'
    },
    content: `# Sécurité des Applications Blockchain

## Protection des applications décentralisées

### 1. Smart Contracts
- Audit de code
- Tests de sécurité
- Bonnes pratiques

### 2. Wallets
- Gestion des clés
- Authentification
- Backup

### 3. DApps
- Frontend sécurisé
- API sécurisée
- Intégrité des données`
  },
  {
    id: 'api-security-best-practices',
    title: 'Sécurisation des APIs : Guide Approfondi',
    description: 'Stratégies et implémentations pour la sécurité des APIs REST et GraphQL.',
    date: '2024-03-24',
    category: BLOG_CATEGORIES.BEST_PRACTICES,
    tags: ['API', 'REST', 'GraphQL', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    author: {
      name: 'Claire Dubois',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
    },
    content: `# Sécurisation des APIs : Guide Approfondi

## Protection des APIs

### 1. Authentification
- OAuth 2.0
- JWT
- API Keys

### 2. Autorisation
- RBAC
- Scopes
- Rate Limiting

### 3. Validation
- Input Validation
- Schema Validation
- Output Encoding`
  },
  {
    id: 'iot-security-architecture',
    title: 'Architecture de Sécurité IoT',
    description: 'Conception et implémentation d\'une architecture de sécurité pour l\'IoT.',
    date: '2024-03-27',
    category: BLOG_CATEGORIES.CYBERSECURITY,
    tags: ['IoT', 'Architecture', 'Sécurité', 'Edge Computing'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    author: {
      name: 'Emma Rousseau',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    content: `# Architecture de Sécurité IoT

## Sécurisation des objets connectés

### 1. Dispositifs
- Firmware sécurisé
- Boot sécurisé
- Mise à jour OTA

### 2. Communication
- Chiffrement
- Authentification
- Protocoles sécurisés

### 3. Infrastructure
- Edge Security
- Cloud Security
- Monitoring`
  }
];