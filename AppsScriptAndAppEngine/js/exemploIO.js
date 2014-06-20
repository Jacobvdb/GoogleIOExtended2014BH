  
 	 
 	 
    
    
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
  		 	 
  		 	 
!function ($) {
  		$(function(){
  	
  			
  		 	 
  			$("#googleioform").submit(function(e){
        	 	  e.preventDefault();
        	 	  $("#startIO").attr("disabled", true)
        	      $.ajax({

        	           //dev dashboard contactform
        	           url: "https://script.google.com/macros/s/AKfycbxvyojDfHaT0dTvSJVCzJS2e4CrKstkrw62FVWRBbHrdBZ9sw/exec",
        	           type: "POST",
        	           data: $(this).serializeObject(),

        	           success: function(data){
        	        	   obj = JSON.stringify(data);
        	        	   $("#startIO").attr("disabled", false)
        	    	       //$("#inscricao26").modal("hide");
        	        	   alert("Lan&ccedil;ado!")

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
  		