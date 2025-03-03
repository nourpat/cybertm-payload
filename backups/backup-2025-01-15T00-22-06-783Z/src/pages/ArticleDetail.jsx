import React from 'react';
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const articles = {
  'best-practices-2024': {
    title: 'Les meilleures pratiques en cybersécurité pour 2024',
    author: 'Jean Dupont',
    date: '2024-01-15',
    tags: ['Cybersécurité', 'Bonnes pratiques', '2024'],
    content: `
# Les meilleures pratiques en cybersécurité pour 2024

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
- Sauvegarde régulière et sécurisée
    `
  },
  'social-engineering-threats': {
    title: 'L\'ingénierie sociale : La menace invisible',
    author: 'Marie Laurent',
    date: '2024-01-20',
    tags: ['Ingénierie sociale', 'Sécurité', 'Formation'],
    content: `
# L'ingénierie sociale : La menace invisible

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
- Protocoles d'escalade
    `
  },
  'email-security': {
    title: 'Sécurité des Emails en Entreprise',
    author: 'Emma Dubois',
    date: '2024-02-15',
    tags: ['Email', 'Sécurité', 'Communication'],
    content: `
# Sécurité des Emails en Entreprise

La sécurité des emails reste un enjeu majeur pour les entreprises.

## Menaces courantes

### 1. Phishing ciblé
- Usurpation d'identité
- Ingénierie sociale
- Attaques BEC (Business Email Compromise)

### 2. Malwares par email
- Pièces jointes malveillantes
- Liens frauduleux
- Scripts malveillants

## Solutions de protection

### 1. Filtrage avancé
- Antispam nouvelle génération
- Analyse des pièces jointes
- Détection des URLs malveillantes

### 2. Authentification
- SPF (Sender Policy Framework)
- DKIM (DomainKeys Identified Mail)
- DMARC (Domain-based Message Authentication)

### 3. Formation des utilisateurs
- Reconnaissance des menaces
- Bonnes pratiques
- Procédures de signalement
    `
  },
  'siem-technology': {
    title: 'SIEM : L\'Intelligence de la Sécurité',
    author: 'Marc Lambert',
    date: '2024-02-18',
    tags: ['SIEM', 'Monitoring', 'SOC'],
    content: `
# SIEM : L'Intelligence de la Sécurité

Les systèmes SIEM sont devenus indispensables pour la sécurité moderne.

## Fonctionnalités clés

### 1. Collecte de logs
- Sources multiples
- Normalisation
- Stockage sécurisé

### 2. Analyse en temps réel
- Corrélation d'événements
- Détection d'anomalies
- Alertes automatisées

### 3. Investigation
- Forensics
- Timeline des incidents
- Reporting détaillé

## Bénéfices

### 1. Détection améliorée
- Visibilité complète
- Réponse rapide
- Conformité simplifiée

### 2. Automatisation
- Workflows prédéfinis
- Playbooks
- Orchestration
    `
  },
  'mssp-services': {
    title: 'MSSP : Externaliser sa Sécurité',
    author: 'Sarah Martin',
    date: '2024-02-20',
    tags: ['MSSP', 'Services managés', 'Sécurité'],
    content: `
# MSSP : Externaliser sa Sécurité

Les fournisseurs de services de sécurité managés (MSSP) offrent une alternative intéressante.

## Services proposés

### 1. Surveillance 24/7
- SOC externalisé
- Monitoring continu
- Réponse aux incidents

### 2. Solutions de sécurité
- Pare-feu managé
- EDR/XDR
- SIEM as a Service

### 3. Expertise
- Équipe dédiée
- Veille technologique
- Conseil stratégique

## Avantages

### 1. Coûts optimisés
- Pas d'investissement initial
- Coûts prévisibles
- Économies d'échelle

### 2. Expertise immédiate
- Équipes qualifiées
- Technologies avancées
- Meilleures pratiques
    `
  }
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Article non trouvé</h2>
            <p className="mt-4 text-xl text-gray-600">
              L'article que vous recherchez n'existe pas.
            </p>
            <Link
              to="/blog"
              className="mt-8 inline-block text-blue-600 hover:text-blue-700"
            >
              ← Retour au blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/blog"
            className="inline-block mb-8 text-blue-600 hover:text-blue-700"
          >
            ← Retour au blog
          </Link>

          <article className="bg-white rounded-lg shadow-lg p-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>Par {article.author}</span>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <div className="prose prose-blue max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
}