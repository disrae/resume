/*
 * ╔═══════════════════════════════════════════════════════════════════════╗
 * ║           RESUME PDF GENERATOR - VERSION MANAGEMENT SYSTEM            ║
 * ╚═══════════════════════════════════════════════════════════════════════╝
 * 
 * 📋 USAGE:
 * 
 * Generate baseline resume:
 *   node generate-pdf.js
 *   → Reads: index.html
 *   → Creates: Daniel Israel Resume.pdf
 * 
 * Generate company-specific resume:
 *   node generate-pdf.js PolicyMe
 *   → Reads: index-PolicyMe.html
 *   → Creates: Daniel Israel - PolicyMe Resume.pdf
 * 
 * 🎯 FOR AI ASSISTANTS:
 * When user asks to customize resume for a company:
 *   1. Copy index.html to index-{CompanyName}.html
 *   2. Modify the copy (NOT index.html)
 *   3. User runs: node generate-pdf.js CompanyName
 * 
 * This keeps the baseline resume (index.html) clean!
 */

const puppeteer = require('puppeteer');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

async function generateResumePDF() {
  // Get company name from command line argument
  const companyName = process.argv[2];
  
  console.log('🚀 Starting PDF generation...');
  
  // Determine which HTML file to use
  let htmlFile, pdfFile;
  
  if (companyName) {
    htmlFile = `index-${companyName}.html`;
    pdfFile = `Daniel Israel - ${companyName} Resume.pdf`;
    
    // Check if the company-specific file exists
    const htmlPath = path.join(__dirname, htmlFile);
    if (!fs.existsSync(htmlPath)) {
      console.error(`❌ Error: ${htmlFile} does not exist!`);
      console.log(`💡 Tip: Create ${htmlFile} by copying index.html first.`);
      process.exit(1);
    }
    
    console.log(`📄 Generating custom resume for: ${companyName}`);
  } else {
    htmlFile = 'index.html';
    pdfFile = 'Daniel Israel Resume.pdf';
    console.log('📄 Generating baseline resume');
  }

  const htmlPath = path.join(__dirname, htmlFile);
  const pdfPath = path.join(__dirname, pdfFile);

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

    console.log(`✅ PDF generated successfully: ${pdfFile}`);
    console.log(`📍 Location: ${pdfPath}`);
    if (companyName) {
      console.log(`🎯 Custom version for: ${companyName}`);
    } else {
      console.log('📄 Baseline resume - ATS-ready!');
    }

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
