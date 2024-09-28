import { Component } from '@angular/core';
import { GeneradorXmlService } from 'src/app/services/generador-xml.service';

@Component({
  selector: 'app-descargar-xml',
  templateUrl: './descargar-xml.component.html',
  styleUrls: ['./descargar-xml.component.css']
})
export class DescargarXmlComponent {
  constructor(private xmlService: GeneradorXmlService) {}

  downloadXML() {
    const xmlContent = this.xmlService.generateSitemapXml();
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
