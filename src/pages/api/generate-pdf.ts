import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async () => {
    try {
        // Read the pre-generated PDF from the public directory
        const pdfPath = path.join(process.cwd(), 'public', 'static', 'resume.pdf');
        const pdf = await fs.promises.readFile(pdfPath);

        return new Response(pdf, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=resume.pdf'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'PDF not found' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
