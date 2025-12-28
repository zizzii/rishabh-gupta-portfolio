import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas, ImageData } from 'canvas';

// Make ImageData available globally for pdfjs-dist legacy build
if (typeof globalThis.ImageData === 'undefined') {
  globalThis.ImageData = ImageData;
}

// Use legacy build for Node.js compatibility
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Set up pdfjs worker - use legacy worker for Node.js
try {
  const workerPath = path.join(projectRoot, 'node_modules', 'pdfjs-dist', 'legacy', 'build', 'pdf.worker.min.mjs');
  if (fs.existsSync(workerPath)) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `file://${workerPath}`;
  } else {
    // Disable worker for Node.js (may be slower but should work)
    pdfjsLib.GlobalWorkerOptions.workerSrc = '';
  }
} catch (e) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = '';
}

// Project slugs in order (adjust based on PDF structure)
const PROJECT_SLUGS = [
  'nirvaan',
  'svara',
  'stories-pavilion',
  'tattva',
  'lake-house',
  'earth-and-aether'
];

// Get PDF path from command line or use default
const pdfPath = process.argv[2] || path.join(projectRoot, 'portfolio_Rishabh Gupta_Nov2025.pdf');
const outputBaseDir = path.join(projectRoot, 'src', 'assets', 'images');

// Ensure output directories exist
PROJECT_SLUGS.forEach(slug => {
  const dir = path.join(outputBaseDir, slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function extractImagesFromPDF() {
  try {
    console.log(`Reading PDF from: ${pdfPath}`);
    
    if (!fs.existsSync(pdfPath)) {
      throw new Error(`PDF file not found: ${pdfPath}`);
    }

    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    
    console.log(`PDF loaded. Total pages: ${pdf.numPages}`);
    
    let currentProjectIndex = 0;
    let imageCountPerProject = {};
    
    // Initialize image counts
    PROJECT_SLUGS.forEach(slug => {
      imageCountPerProject[slug] = 0;
    });

    // Process each page
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 2.0 }); // Higher scale for better quality
      
      // Render page to canvas
      const canvas = createCanvas(viewport.width, viewport.height);
      const context = canvas.getContext('2d');
      
      // Ensure canvas is properly set up for pdfjs-dist legacy build
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
        // Add transform to ensure proper rendering
        transform: null,
        // Disable text layer and annotation layer for image extraction
        textLayer: null,
        annotationLayer: null
      };
      
      await page.render(renderContext).promise;

      // Get current project (you may need to adjust this logic based on PDF structure)
      // For now, we'll distribute pages evenly or you can manually map
      const projectSlug = PROJECT_SLUGS[currentProjectIndex];
      const projectDir = path.join(outputBaseDir, projectSlug);
      
      imageCountPerProject[projectSlug]++;
      const imageNum = imageCountPerProject[projectSlug];
      
      // Save as image
      let filename;
      if (imageNum === 1) {
        filename = 'thumbnail.jpg';
      } else {
        filename = `image-${imageNum - 1}.jpg`;
      }
      
      const outputPath = path.join(projectDir, filename);
      const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
      fs.writeFileSync(outputPath, buffer);
      
      console.log(`Extracted page ${pageNum} -> ${projectSlug}/${filename}`);
      
      // Move to next project after every N pages (adjust based on your PDF structure)
      // For now, we'll use a simple distribution
      if (pageNum % Math.ceil(pdf.numPages / PROJECT_SLUGS.length) === 0 && currentProjectIndex < PROJECT_SLUGS.length - 1) {
        currentProjectIndex++;
      }
    }
    
    console.log('\nExtraction complete!');
    console.log('Image counts per project:');
    Object.entries(imageCountPerProject).forEach(([slug, count]) => {
      console.log(`  ${slug}: ${count} images`);
    });
    
    console.log('\nNote: You may need to manually reorganize images if the automatic distribution');
    console.log('does not match your PDF structure. Check the extracted images and move them');
    console.log('to the correct project folders as needed.');
    
  } catch (error) {
    console.error('Error extracting images:', error);
    process.exit(1);
  }
}

extractImagesFromPDF();

