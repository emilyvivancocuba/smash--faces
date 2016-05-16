/* Inserta tu código aqui */
function aleatorio(min,max){
   	var num_aleatorio=parseInt(min) + Math.round(Math.random() * (max-min));
   	return num_aleatorio;
}
var sede_seleccionada = document.getElementById('sede_seleccionada');
sede_seleccionada.onchange=function(){
	var sede_valor=sede_seleccionada.options[sede_seleccionada.selectedIndex].textContent;
	var pais;
	var name_pais;
	if (sede_valor==='Perú-Lima') {
		pais=peru;
		name_pais='peru'
	}else if (sede_valor==='México') {
		pais=mexico;
		name_pais='mexico';
	}
	var img=document.createElement('img');
	var alea=aleatorio(0, (pais.length)-1);
	var foto_coder=pais[alea].image;
	var name_coder=pais[alea].name;
    img.setAttribute('src', 'fotos/'+name_pais+'/'+foto_coder);
    img.setAttribute('class', 'foto_chicacoder');
    document.getElementById('foto-box').appendChild(img);
    return name_coder;
}
var nombre_coder_ingresado=document.getElementById('name_coder_ingresado').value;
if (nombre_coder_ingresado===name_coder) {
	alert("Es correcto");
}












// resetear.onclick=reset();
// var contar=0;
// var suma=0;
// for (var i=0; i<9; i++) {
// 	boton_jugar[i].onclick=function(){
// 		contar++;
// 		suma++;
// 		if (contar%2===0) {
// 			this.textContent = 'o';
// 		}else{
// 			this.textContent = 'x';
// 		}
// 		this.setAttribute('disabled', false);
// 		if (suma>=5) {
// 			if (($('#1').text()==$('#2').text()&&$('#1').text()==$('#3').text())||($('#1').text()==$('#4').text()&&$('#1').text()==$('#7').text())||($('#1').text()==$('#5').text()&&$('#1').text()==$('#9').text())) {
// 				if ($('#1').text()=='x') {
// 					alert('El ganador es x');
// 					reset();
// 				}
// 				if ($('#1').text()=='o') {
// 					alert('El ganador es o');
// 					reset();
// 				}
// 			}else if (($('#2').text()==$('#5').text()&&$('#5').text()==$('#8').text())||($('#3').text()==$('#5').text()&&$('#5').text()==$('#7').text())||($('#4').text()==$('#5').text()&&$('#5').text()==$('#6').text())) {
// 				if ($('#5').text()=='x') {
// 					alert('El ganador es x');
// 					reset();
// 				}
// 				if ($('#5').text()=='o') {
// 					alert('El ganador es o');
// 					reset();
// 				}
// 			}else if (($('#3').text()==$('#6').text()&&$('#6').text()==$('#9').text())||($('#7').text()==$('#8').text()&&$('#8').text()==$('#9').text())) {
// 				if ($('#9').text()=='x') {
// 					alert('El ganador es x');
// 					reset();
// 				}
// 				if ($('#9').text()=='o') {
// 					alert('El ganador es o');
// 					reset();
// 				}
// 			}else if (suma===9) {
// 				alert('JUEGO EMPATADO');
// 				reset();
// 			}
// 		}
// 	}
// }