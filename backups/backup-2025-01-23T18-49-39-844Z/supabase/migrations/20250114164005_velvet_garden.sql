/*
  # Création de la table des activités

  1. Nouvelle Table
    - `activities`
      - `id` (uuid, clé primaire)
      - `user_id` (uuid, référence vers la table users)
      - `type` (text, type d'activité)
      - `message` (text, description de l'activité)
      - `metadata` (jsonb, données supplémentaires)
      - `created_at` (timestamp avec fuseau horaire)

  2. Sécurité
    - Activation de RLS
    - Politique pour la lecture des activités par l'utilisateur
*/

CREATE TABLE IF NOT EXISTS activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  type text NOT NULL,
  message text NOT NULL,
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Activer RLS
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- Politique de lecture
CREATE POLICY "Users can read their own activities"
  ON activities
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS activities_user_id_created_at_idx 
  ON activities(user_id, created_at DESC);