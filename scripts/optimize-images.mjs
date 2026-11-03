import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

const getFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else {
      results.push(filePath);
    }
  });
  
  return results;
};

const optimizeImages = async () => {
  console.log('Iniciando compresión masiva de imágenes a WebP...');
  const files = getFiles(publicDir);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  
  let totalSaved = 0;

  for (const file of imageFiles) {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const dir = path.dirname(file);
    const webpPath = path.join(dir, `${basename}.webp`);
    
    // Saltamos favicon.ico o iconos si es necesario, pero los procesaremos igual para usarlos
    if (basename.includes('favicon') || basename.includes('apple-touch')) continue;

    try {
      const originalSize = fs.statSync(file).size;
      await sharp(file)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      const newSize = fs.statSync(webpPath).size;
      const savedBytes = originalSize - newSize;
      
      if (savedBytes > 0) {
        totalSaved += savedBytes;
        const savedMb = (savedBytes / (1024 * 1024)).toFixed(2);
        console.log(`✅ Optimizado: ${basename}${ext} -> .webp (Ahorro: ${savedMb} MB)`);
      } else {
        // Si la compresión resultó en un archivo más pesado (poco común), lo reportamos
        console.log(`⚠️ ${basename}${ext}: El original ya estaba altamente optimizado.`);
      }
      
    } catch (error) {
      console.error(`❌ Error procesando ${file}:`, error.message);
    }
  }

  const totalSavedMb = (totalSaved / (1024 * 1024)).toFixed(2);
  console.log(`\n🚀 Proceso completado. Ahorro total: ${totalSavedMb} MB de ancho de banda.`);
};

optimizeImages();
