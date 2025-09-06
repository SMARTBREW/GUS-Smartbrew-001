const fs = require('fs');
const path = require('path');
const publicDir = path.join(__dirname, '../public');
const imgDir = path.join(publicDir, 'img');

function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  const largeFiles = [];
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      largeFiles.push(...scanDirectory(filePath));
    } else if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
      const sizeInMB = parseFloat(getFileSizeInMB(filePath));
      if (sizeInMB > 0.5) {
        largeFiles.push({
          path: filePath.replace(publicDir, ''),
          size: sizeInMB,
          name: file
        });
      }
    }
  });
  
  return largeFiles;
}

console.log('🔍 Scanning for large images...\n');

const largeFiles = scanDirectory(publicDir);

if (largeFiles.length === 0) {
  console.log('✅ All images are optimized!');
} else {
  console.log(`⚠️  Found ${largeFiles.length} large images that need optimization:\n`);
  
  largeFiles
    .sort((a, b) => b.size - a.size)
    .forEach(file => {
      console.log(`📁 ${file.path}`);
      console.log(`   Size: ${file.size} MB`);
      console.log(`   Recommendation: Compress to under 200KB\n`);
    });
  
  console.log('\n💡 Optimization recommendations:');
  console.log('1. Use online tools like TinyPNG, Squoosh, or ImageOptim');
  console.log('2. Convert JPEG to WebP format for better compression');
  console.log('3. Resize images to appropriate dimensions (max 1200px width)');
  console.log('4. Use different sizes for different screen sizes');
  console.log('\n🛠️  Tools to use:');
  console.log('- TinyPNG: https://tinypng.com/');
  console.log('- Squoosh: https://squoosh.app/');
  console.log('- ImageOptim: https://imageoptim.com/');
}
