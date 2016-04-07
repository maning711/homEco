/**
 * created by maning
 */
angular.module('homEco').directive('bsDatepicker', function(){
    return {
        restrict : 'EA',
        scope:{
        model:"=ngModel"
    },
        link : function(scope,element,attrs,ctrl){
            var datepicker1 = $(element).datepicker()
                .on('changeDate',function (ev){
                    var newDate = new Date(ev.date)                
                    datepicker1.hide()

                    alert(newDate)
                })
                .data('datepicker')
        }
    }
});