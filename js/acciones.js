// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
 $('#btnvibrar').on('tap',function(){
 navigator. vibrar(1000);
});//tap a btnvibrar
$('#btnbeep').on('tap',function (){
	navegador.beep(1)
	
});//tap vtnbeep
$('#izquierda').on ('swipeleft',function(){
		alert('barrio a la izquierda');
	});
	document.addEventListener("pause",function(){
		$('#listado').append("<p> la aplicasion se pausa </p>");
	});
	document.addEventListener("resume",function(){
		$('#listado').append("<p>se reinicio </p>");
	}); 
	$(window).on('orientationchange',function(e){
		$('#listado').append("<p>orientacion:" + e.arientation +"</p>");
	});
}); 
});

