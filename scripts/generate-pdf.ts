import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // You might need to start the dev server first or use a static HTML file
    await page.goto('http://localhost:4321/pdf', {
        waitUntil: 'networkidle0'
    });

    await page.pdf({
        path: 'public/resume.pdf',
        format: 'A4',
        printBackground: true,
        tagged: true
    });

    await browser.close();

    // Ensure directory exists
    const dir = path.join(process.cwd(), 'public', 'static');
    await fs.promises.mkdir(dir, { recursive: true });
}

generatePDF().catch(console.error);
