const pdf = require('html-pdf');
const fs = require('fs');
const path = require('path');

function generateResumePDF() {
  console.log('🚀 Starting PDF generation...');

  const htmlPath = path.join(__dirname, 'index.html');
  const pdfPath = path.join(__dirname, 'README.pdf');

  // Read the HTML file
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // ATS-friendly PDF options
  const options = {
    format: 'A4',
    orientation: 'portrait',
    border: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    },
    type: 'pdf',
    quality: '100',
    // ATS-friendly settings
    renderDelay: 2000, // Wait for fonts to load
    // Ensure text is rendered as text, not paths
    base: `file://${path.dirname(htmlPath)}/`,
    // Additional options for better ATS compatibility
    "phantomArgs": [
      "--web-security=no",
      "--ignore-ssl-errors=yes",
      "--load-images=yes",
      "--local-url-access=no"
    ]
  };

  console.log('📄 Converting HTML to PDF...');

  pdf.create(htmlContent, options).toFile(pdfPath, (err, res) => {
    if (err) {
      console.error('❌ Error generating PDF:', err);
      process.exit(1);
    }

    console.log(`✅ PDF generated successfully: ${pdfPath}`);
    console.log('📄 Your resume is now ATS-ready!');

    // Optional: Open the PDF for preview
    const { exec } = require('child_process');
    if (process.platform === 'darwin') {
      exec(`open "${pdfPath}"`);
    } else if (process.platform === 'linux') {
      exec(`xdg-open "${pdfPath}"`);
    } else if (process.platform === 'win32') {
      exec(`start "${pdfPath}"`);
    }
  });
}

// Run the generator
generateResumePDF();
