
      $.fn.serializeObject = function()
 	 {
 	     var o = {};

 	     var a = this.serializeArray();
 	     $.each(a, function() {
 	         if (o[this.name] !== undefined) {
 	             if (!o[this.name].push) {

 	                 o[this.name] = [o[this.name]];
 	             }
 	             o[this.name].push(this.value || '');

 	         } else {
 	             o[this.name] = this.value || '';
 	         }
 	     });

 	     return o;
 	 };

	 function addMessage(message, context) {

		 console.log('taqta' + message)

			 //html +='<button type="button" class="close" data-dismiss="alert">'

		     if (context =="success"){
		    	 var html = '<div class="alert bg-success">'
		     }

	 	     if (context =="info"){
	    	    var html = '<div class="alert bg-info">'
	         }

		     if (context =="warning"){
		    	 var html = '<div class="alert bg-warning">'
		     }


		     html += message + '</div>'
		    $('#messagetext').html( html);
		    $("#messageboard").modal("show");

		}


      	!function ($) {
      		$(function(){

      			$("img[rel='popover']").popover({
      				placement: "top",
      				trigger: "hover"
      			});

             //tooltips
             $("a[rel='tooltip']").tooltip();

             // carousel demo
             //$('#myCarousel').carousel()

             $('#tabProgramacao a:first').tab('show');

             $('#tabProgramacao a').click(function (e) {
             	e.preventDefault();
             	$(this).tab('show');
             })



      	   $("#_inscricao25form").submit(function(e){
     	 	  e.preventDefault();
     	 	$("#start25").attr("disabled", true)

     	      $.ajax({

     	           //dev dashboard contactform
     	           url: "https://script.google.com/macros/s/AKfycbyFc5JJiu-D9hhoU8Cgxipl79o7bcMtkOl94VG38LY2uygFX6TG/exec",
     	           type: "POST",
     	           data: $(this).serializeObject(),

     	           success: function(data){
     	        	   obj = JSON.stringify(data);

     	    	       $("#inscricao25").modal("hide");
     	    	      $("#start25").attr("disabled", false)
     	    	      alert("Obrigado! Você receberá um e-mail de retorno.")
     	        	   if(data.status != '0'){

     	        	      // if (document.documentElement.lang=="pt-BR"){var alertText = 'Ixxx deu um pau aqui, n&atilde;o esquente n&atilde;o j&aacute; ficamos sabendo para arrumar. Tenta de novo um pouco mais pa frente. O n&uacute;mero de contato &eacute;: '}
     	        	       //alert(alertText + data.ticketid)
     	        	       //addMessage(alertText + data.ticketid,'warning' );
     	        		   console.log('status: ' + obj)
     	        	   } else {
     	        		  console.log('status: ' + obj)
     	        	       //if (document.documentElement.lang=="pt-BR"){var alertText = 'Obrigado pelo seu interesse! O n&uacute;mero de contato &eacute;:'}
     	        	       //addMessage(alertText + data.ticketid,'success');
     	        		   //alert(alertText + data.ticketid)
     	        	       //$("#login-error").show();

     	        		   //$("#messageboard").modal("show");
     	        	   }
     	           }
     	       });
     	       //$("#contact").modal("hide");
     	       //console.log('status: ' + obj.status)
     	   });

        	   $("#_inscricao26form").submit(function(e){
          	 	  e.preventDefault();
          	 	  //$("#start26").attr("disabled", true)
          	      $.ajax({

          	           //dev dashboard contactform
          	           url: "https://script.google.com/macros/s/AKfycbyVj2rh8M-OO2mzws27Sy8Ibnk4ADg59Mz4sgKFcnxL_NCRhmk/exec",
          	           type: "POST",
          	           data: $(this).serializeObject(),

          	           success: function(data){
          	        	   obj = JSON.stringify(data);
          	        /	   $("#start26").attr("disabled", false)
          	    	       $("#inscricao26").modal("hide");
          	        	   alert("Obrigado! Você receberá um e-mail de retorno.")

          	        	   if(data.status != '0'){

          	        	      // if (document.documentElement.lang=="pt-BR"){var alertText = 'Ixxx deu um pau aqui, n&atilde;o esquente n&atilde;o j&aacute; ficamos sabendo para arrumar. Tenta de novo um pouco mais pa frente. O n&uacute;mero de contato &eacute;: '}
          	        	       //alert(alertText + data.ticketid)
          	        	       //addMessage(alertText + data.ticketid,'warning' );
          	        		   console.log('status: ' + obj)
          	        	   } else {
          	        		  console.log('status: ' + obj)

          	        	       //if (document.documentElement.lang=="pt-BR"){var alertText = 'Obrigado pelo seu interesse! O n&uacute;mero de contato &eacute;:'}
          	        	       //addMessage(alertText + data.ticketid,'success');

          	        	       //$("#login-error").show();

          	        		   //$("#messageboard").modal("show");
          	        	   }
          	           }
          	       });
          	       //$("#contact").modal("hide");
          	       //console.log('status: ' + obj.status)
          	   });



         })
      	}(window.jQuery)
