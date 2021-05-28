import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  paises: Country[] = [];
  regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  getClaseCSS( region: string ): string{
    return (this.regionActiva === region) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }
  activarRegion( region: string ){
    
    if(this.regionActiva === region) { return; }

    this.regionActiva = region;
    this.paises = [];
    
    this.paisService.buscarRegion( region )
    .subscribe ( paises => this.paises = paises);
  }

}
