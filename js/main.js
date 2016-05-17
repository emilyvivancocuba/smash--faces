/* Inserta tu código aqui */
function aparecer_imagen(){
	img=document.createElement('img');
	indice = Math.floor(Math.random()*num.length);
	number = num[indice];
	num.splice(indice, 1);
	alea=number;
	foto_coder=pais[alea].image;
	name_coder=pais[alea].name;
    img.setAttribute('src', 'fotos/'+name_pais+'/'+foto_coder);
    img.setAttribute('alt', name_coder);
    img.setAttribute('class', 'foto_chicacoder');
    document.getElementById('foto-box').appendChild(img);
}
function seleccionar_pais(){

	var sede_valor=sede_seleccionada.options[sede_seleccionada.selectedIndex].textContent;
	if (sede_valor==='Perú-Lima') {
		pais=peru;
		name_pais='peru'
	}else if (sede_valor==='México') {
		pais=mexico;
		name_pais='mexico';
	}
	for (j=0; j<=pais.length; j++) {
		num.push(j);
	}
	img=document.createElement('img');
	indice = Math.floor(Math.random()*num.length);
	number = num[indice];
	num.splice(indice, 1);
	alea=number;
	foto_coder=pais[alea].image;
	name_coder=pais[alea].name;
    img.setAttribute('src', 'fotos/'+name_pais+'/'+foto_coder);
    img.setAttribute('alt', name_coder);
    img.setAttribute('class', 'foto_chicacoder');
    document.getElementById('foto-box').appendChild(img);
}
function comprobacion(){
	respuesta=document.getElementById('respuesta');
	var nombre_coder_ingresado=document.getElementById('name_coder_ingresado').value;
	if (nombre_coder_ingresado.toLowerCase()===name_coder.toLowerCase()) {
		i=0;
		puntaje+=5;
		respuesta.innerHTML='Bien hecho, ganaste 5 puntos.\nAhora tienes '+puntaje+' puntos';
		$(".foto_chicacoder").remove();
		aparecer_imagen();
	}else{
		if(nombre_coder_ingresado.toLowerCase()!==name_coder.toLowerCase()){
			respuesta.innerHTML='No es correcto. Perdiste un punto\nTe quedan '+(4-i)+' intentos\nAhora tienes '+puntaje+' puntos';
			i++;
			if (i===5) {
				puntaje-=1;
				i=0;
				$(".foto_chicacoder").remove();
				aparecer_imagen();
			}
		}else{
			$(".foto_chicacoder").remove();
			aparecer_imagen();
		}
	}
	console.log(num);
	console.log(indice);
	console.log(number);
}
var name_coder, name_pais, pais, alea, respuesta, puntaje, i, j, foto_coder, img, peru, mexico, num_almacenados, indice, number;
puntaje=0;
i=0;
j=0;
num_almacenados=[];
var num=[];

var sede_seleccionada = document.getElementById('sede_seleccionada');
sede_seleccionada.addEventListener('change', seleccionar_pais);
var boton=document.getElementById('boton');
boton.addEventListener('click', comprobacion);
if (num===[]) {
		$(".foto_chicacoder").remove();
		respuesta.innerHTML='Tus puntos totales son: '+puntaje;
		boton.setAttribute('disabled', false);
	}