import { Component, OnInit } from '@angular/core';
import { MapaArgentinaSVG, MapaObjeto } from '../../class/mapaArgentina.model';

//import * as $ from "jquery";
import { BuenosAiresComponent } from '../../component/buenos-aires/buenos-aires.component';
import { SantaCruzComponent } from '../../component/santa-cruz/santa-cruz.component';
import { ChubutComponent } from '../../component/chubut/chubut.component';
import { NeuquenComponent } from '../../component/neuquen/neuquen.component';
import { RioNegroComponent } from '../../component/rio-negro/rio-negro.component';
import { LaPampaComponent } from '../../component/la-pampa/la-pampa.component';
import { MendozaComponent } from '../../component/mendoza/mendoza.component';
import { SantiagoComponent } from '../../component/santiago/santiago.component';
import { SaltaComponent } from '../../component/salta/salta.component';
import { JujuyComponent } from '../../component/jujuy/jujuy.component';
import { FormosaComponent } from '../../component/formosa/formosa.component';
import { ChacoComponent } from '../../component/chaco/chaco.component';
import { MisionesComponent } from '../../component/misiones/misiones.component';
import { CabaComponent } from '../../component/caba/caba.component';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-mapa-argentina',
  templateUrl: './mapa-argentina.component.html',
  styleUrls: ['./mapa-argentina.component.css']
})
export class MapaArgentinaComponent implements OnInit {

	elementos:MapaArgentinaSVG;
	provincias:MapaObjeto[]=[];
	template:any;
	templates:any[]=[ BuenosAiresComponent,
		JujuyComponent,
		SaltaComponent,
		FormosaComponent,
		ChacoComponent,
		MisionesComponent,
		SantiagoComponent,
		LaPampaComponent,
		MendozaComponent,
		NeuquenComponent,
		RioNegroComponent,
		ChubutComponent,
		SantaCruzComponent,
		CabaComponent];


  constructor() {

	this.elementos=new MapaArgentinaSVG();
	this.provincias = this.getMapa();
	console.log(this.provincias);
   }

  ngOnInit() {


	
  }

  getMapa(){


	let obj:MapaObjeto[]=[{
	'provincia_id': '23',
 	'nombreProvincia': 'Tierra del fuego',
 	'provinciaPath':this.elementos.tierradelfuego,
 	'component':'',
 	'fill':'#4d646b'
	},{
		'provincia_id': '20',
	 'nombreProvincia': 'Santa Cruz',
	 'provinciaPath':this.elementos.santacruz,
	 'component':SantaCruzComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '5',
	 'nombreProvincia': 'Chubut',
	 'provinciaPath':this.elementos.chubut,
	 'component':ChubutComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '19',
	 'nombreProvincia': 'San Luis',
	 'provinciaPath':this.elementos.sanluis,
	 'component':'',
	 'fill':'#4d646b'
	},{
		'provincia_id': '15',
	 'nombreProvincia': 'Neuquen',
	 'provinciaPath':this.elementos.neuquen,
	 'component':NeuquenComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '16',
	 'nombreProvincia': 'Rio Negro',
	 'provinciaPath':this.elementos.rionegro,
	 'component':RioNegroComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '11',
	 'nombreProvincia': 'La Pampa',
	 'provinciaPath':this.elementos.lapampa,
	 'component':LaPampaComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '13',
	 'nombreProvincia': 'Mendoza',
	 'provinciaPath':this.elementos.mendoza,
	 'component':MendozaComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '18',
	 'nombreProvincia': 'San Juan',
	 'provinciaPath':this.elementos.sanjuan,
	 'component':'',
	 'fill':'#4d646b'
	},{
		'provincia_id': '2',
	 'nombreProvincia': 'Buenos Aires',
	 'provinciaPath':this.elementos.bsas,
	 'component':BuenosAiresComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '12',
	 'nombreProvincia': 'La rioja',
	 'provinciaPath':this.elementos.larioja,
	 'component':'',
	 'fill':'#4d646b'
	},{
		'provincia_id': '3',
	 'nombreProvincia': 'Catamarca',
	 'provinciaPath':this.elementos.catamarca,
	 'component':'',
	 'fill':'#4d646b'
	},{
		'provincia_id': '24',
	 'nombreProvincia': 'Tucuman',
	 'provinciaPath':this.elementos.tucuman,
	 'component':'',
	 'fill':'#4d646b'
	},{
		'provincia_id': '22',
	 'nombreProvincia': 'Santiago del Estero',
	 'provinciaPath':this.elementos.santiago,
	 'component':SantiagoComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '17',
	 'nombreProvincia': 'Salta',
	 'provinciaPath':this.elementos.salta,
	 'component':SaltaComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '10',
	 'nombreProvincia': 'Jujuy',
	 'provinciaPath':this.elementos.jujuy,
	 'component':JujuyComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '9',
	 'nombreProvincia': 'Formosa',
	 'provinciaPath':this.elementos.formosa,
	 'component':FormosaComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '8',
	 'nombreProvincia': 'Entre Rios',
	 'provinciaPath':this.elementos.entrerios,
	 'component':'',
	 'fill':'#4d646b'
	},{
		'provincia_id': '4',
	 'nombreProvincia': 'Chaco',
	 'provinciaPath':this.elementos.chaco,
	 'component':ChacoComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '7',
	 'nombreProvincia': 'Corrientes',
	 'provinciaPath':this.elementos.corrientes,
	 'component':'',
	 'fill':'#4d646b'
	},{
		'provincia_id': '14',
	 'nombreProvincia': 'Misiones',
	 'provinciaPath':this.elementos.misiones,
	 'component':MisionesComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '6',
	 'nombreProvincia': 'Cordoba',
	 'provinciaPath':this.elementos.cordoba,
	 'component':'',
	 'fill':'#4d646b'
	},{
		'provincia_id': '21',
	 'nombreProvincia': 'Santa Fe',
	 'provinciaPath':this.elementos.santafe,
	 'component':'',
	 'fill':'#4d646b'
	},{
		'provincia_id': '1',
	 'nombreProvincia': 'Ciudad Autonoma de Buenos Aires',
	 'provinciaPath':this.elementos.CABA,
	 'component':CabaComponent,
	 'fill':'#5DC1B9'
	},{
		'provincia_id': '25',
	 'nombreProvincia': 'Isla Gran Malvinas',
	 'provinciaPath':this.elementos.granMalvinas,
	 'component':'',
	 'fill':'#4d646b'
	},{
		'provincia_id': '26',
	 'nombreProvincia': 'Isla Soledad',
	 'provinciaPath':this.elementos.soledad,
	 'component':'',
	 'fill':'#4d646b'
	}];
	return obj;
   
}




click(component:any){

	
	let temp=this.templates.find(x=>x==component);
	
	console.log(component);
	if(temp){
		this.template=temp;
	}

}




  hover(i){


console.log(i);
			$("path[data-index='"+i+"']").css('fill','#1c90ce');
			$("path[data-index='"+i+"']").css('cursor','pointer'); 
   }	

	out(i){
	 		$("path[data-index='"+i+"']").css('fill','');
	 	
 	}



 	
   
  

}
