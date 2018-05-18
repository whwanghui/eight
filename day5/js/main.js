require(['index','details','login','register','cart'],function(pro,car,log,reg,det){
	pro.lunbo();
	pro.bannertab();
	pro.recomend();
	pro.gundonghead();
	pro.classifylunbo($('#one'));
	pro.classifylunbo($('#two'));
	pro.classifylunbo($('#three'));
	pro.classifylunbo($('#four'));
	pro.classifylunbo($('#five'));
	pro.classifylunbo($('#six'));
	pro.classifylunbo($('#seven'));
	pro.classifylunbo($('#eight'));
	pro.classifylunbo($('#nine'));
	pro.classifylunbo($('#ten'));
	pro.classifylunbo($('#eleven'));
	pro.sanjinav();

	car.cartajax();
	car.cookie();
	
	log.dr();
	
	reg.yanz();
	det.shop();
})
