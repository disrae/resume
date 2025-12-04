const puppeteer = require('puppeteer');
const path = require('path');
const { exec } = require('child_process');

async function generateResumePDF() {
  console.log('🚀 Starting PDF generation...');

  const htmlPath = path.join(__dirname, 'index.html');
  const pdfPath = path.join(__dirname, 'Daniel Israel - PolicyMe AI Engineer.pdf');

  let browser;
  try {
    console.log('🌐 Launching browser...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    console.log('📄 Loading HTML file...');
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0'
    });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    
    console.log('📝 Converting to PDF...');
    await page.pdf({
      path: pdfPath,
      format: 'Letter', // US Letter format (8.5" x 11")
      printBackground: true,
      margin: {
        top: '0.4in',
        right: '0.4in',
        bottom: '0.4in',
        left: '0.4in'
      },
      scale: 1.0, // Full scale for better readability
      preferCSSPageSize: false
    });

    console.log(`✅ PDF generated successfully: ${pdfPath}`);
    console.log('📄 Your resume is now ATS-ready!');

    await browser.close();

    // Optional: Open the PDF for preview
    if (process.platform === 'darwin') {
      exec(`open "${pdfPath}"`);
    } else if (process.platform === 'linux') {
      exec(`xdg-open "${pdfPath}"`);
    } else if (process.platform === 'win32') {
      exec(`start "${pdfPath}"`);
    }

  } catch (err) {
    console.error('❌ Error generating PDF:', err);
    if (browser) {
      await browser.close();
    }
    process.exit(1);
  }
}

// Run the generator
generateResumePDF();
