import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneradorXmlService {

  constructor() { }

  generateSitemapXml(): string {
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" >

  <!-- Página principal -->
  <url>
    <loc>http://localhost:4200/</loc>
    <lastmod>2024-09-13</lastmod>
    <priority>1.0</priority>
  </url>

  <!-- Página de Catálogo -->
  <url>
    <loc>http://localhost:4200/catalogo</loc>
    <lastmod>2024-09-13</lastmod>
    <priority>0.9</priority>
  </url>

  <!-- Página de Nosotros -->
  <url>
    <loc>http://localhost:4200/nosotros</loc>
    <lastmod>2024-09-13</lastmod>
    <priority>0.8</priority>
  </url>

  <!-- Página de Promociones -->
  <url>
    <loc>http://localhost:4200/promociones</loc>
    <lastmod>2024-09-13</lastmod>
    <priority>0.7</priority>
  </url>

  <!-- Página de Contacto -->
  <url>
    <loc>http://localhost:4200/contacto</loc>
    <lastmod>2024-09-13</lastmod>
    <priority>0.7</priority>
  </url>

  <!-- Página de Descargar XML -->
  <url>
    <loc>http://localhost:4200/descargar-xml</loc>
    <lastmod>2024-09-13</lastmod>
    <priority>0.6</priority>
  </url>
</urlset>`;
    return xmlContent;
  }
}
