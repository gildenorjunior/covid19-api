import { CovidapiService } from './services/covidapi.service';
import { Pais } from './models/pais.model';
import { Mundo } from './models/mundo.model';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19-api';

  mundo!: Mundo;
  pais!: Pais;

  constructor(private apiService: CovidapiService) { }

  async ngOnInit() {
    this.mundo = await this.apiService.getInfoMundo();
    this.pais = await this.apiService.getInfoPais();
  }

  async trocaPais() {
    const { value: inputPais } = await Swal.fire({
      title: "Informe um País: ",
      input: "text",
      inputPlaceholder: "País"
    })

    if (inputPais) {
      this.pais = await this.apiService.getInfoPais(inputPais)
    }
  }
}
