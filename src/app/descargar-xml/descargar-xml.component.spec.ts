import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarXmlComponent } from './descargar-xml.component';

describe('DescargarXmlComponent', () => {
  let component: DescargarXmlComponent;
  let fixture: ComponentFixture<DescargarXmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescargarXmlComponent]
    });
    fixture = TestBed.createComponent(DescargarXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
