$(document).ready(function(){

var indexes = "January";
var col = 5;

	$('table#2').each(function(i){
  	var value = $(this);
  	if(value.find('thead > tr > th:contains('+ indexes +')')!== -1){ //true
    	$(value.find('thead > tr > th:contains('+ indexes +')')).attr("colspan", col);
      if(col === 4) {
            $(value.find('thead > tr > th:eq(7)')).remove();
            $(value.find('tbody > tr > td:eq(5)')).remove();
            $(value.find('tbody > tr > td:eq(11)')).remove();
            $(value.find('tbody > tr > td:eq(17)')).remove();
            $(value.find('tbody > tr > td:eq(23)')).remove();
            $(value.find('tbody > tr > td:eq(29)')).remove();
            $(value.find('tbody > tr > td:eq(35)')).remove();
            $(value.find('tbody > tr > td:eq(41)')).remove();
            $(value.find('tbody > tr > td:eq(47)')).remove();
      }
    }
  });
});
