/* Inserta tu código aqui */
function aleatorio(min,max){
   	var num_aleatorio=parseInt(min) + Math.round(Math.random() * (max-min));
   	return num_aleatorio;
}
function aparecer_imagen(){
	img=document.createElement('img');
	alea=aleatorio(0, (pais.length)-1);
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
	img=document.createElement('img');
	// if (num_almacenados.length<1) {
	// 	alea=aleatorio(0, (pais.length)-1);
	// 	num_almacenados.push(alea);
	// }else if (num_almacenados.length===pais.length) {
	// 	alea=pais.length+1;
	// }else{
	// 	for (var i = 0; i < num_almacenados.length; i++) {
	// 		alea=aleatorio(0, (pais.length)-1);
	// 		if (num_almacenados[i]===alea) {
				
	// 		}
	// 	}
	// }


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
}
var name_coder, name_pais, pais, alea, respuesta, puntaje, i, j, foto_coder, img, peru, mexico, num_almacenados;
puntaje=0;
i=0;
j=0;
num_almacenados=[];
var sede_seleccionada = document.getElementById('sede_seleccionada');
sede_seleccionada.addEventListener('change', seleccionar_pais);
var boton=document.getElementById('boton');
boton.addEventListener('click', comprobacion);






var alea=aleatorio(0, (pais.length)-1);
for (var i = 0; i < num_almacenados.length; i++) {
	if (num_almacenados[i]===alea) {
		for (var i = 0; i < num_almacenados.length; i++) {
			num_almacenados[i];
		}
	}
}