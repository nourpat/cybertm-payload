import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BACKUP_DIR = path.join(__dirname, '../backups');
const PROJECT_ROOT = path.join(__dirname, '..');

// Liste des dossiers et fichiers à sauvegarder
const ITEMS_TO_BACKUP = [
  'src',
  'public',
  'supabase',
  'package.json',
  'package-lock.json',
  'vite.config.js',
  'tailwind.config.js',
  'postcss.config.js',
  '.env'
];

function getCurrentDateTime() {
  const now = new Date();
  return now.toISOString().replace(/[:.]/g, '-');
}

function createBackupDir() {
  const backupDateTime = getCurrentDateTime();
  const backupPath = path.join(BACKUP_DIR, `backup-${backupDateTime}`);
  
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR);
  }
  
  fs.mkdirSync(backupPath);
  return backupPath;
}

function copyDirectory(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  const items = fs.readdirSync(source);

  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);

    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}

function copyFile(source, destination) {
  const destDir = path.dirname(destination);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, destination);
  }
}

function createBackup() {
  try {
    const backupPath = createBackupDir();
    console.log(`Création de la sauvegarde dans: ${backupPath}`);

    ITEMS_TO_BACKUP.forEach(item => {
      const sourcePath = path.join(PROJECT_ROOT, item);
      const destPath = path.join(backupPath, item);

      if (fs.existsSync(sourcePath)) {
        if (fs.statSync(sourcePath).isDirectory()) {
          copyDirectory(sourcePath, destPath);
        } else {
          copyFile(sourcePath, destPath);
        }
      }
    });

    // Créer un fichier manifest avec les métadonnées de la sauvegarde
    const manifest = {
      createdAt: new Date().toISOString(),
      items: ITEMS_TO_BACKUP,
      version: '1.4.0'
    };

    fs.writeFileSync(
      path.join(backupPath, 'backup-manifest.json'),
      JSON.stringify(manifest, null, 2)
    );

    console.log('Sauvegarde terminée avec succès!');
    return backupPath;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error);
    throw error;
  }
}

createBackup();