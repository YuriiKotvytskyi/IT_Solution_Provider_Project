    //for counter
    $('.counter').counterUp({
    delay: 10,
    time: 1000
	
  });
	//for menu-bg
	$(window).on('scroll',function()
	{
	if($(window).scrollTop()>560)
	{
	 $('#menu').addClass('menu_bg');
	}
	else $('#menu').removeClass('menu_bg');
	});
	//
	$(document).on('click','ul li',function()
	{
		$(this).addClass('active').siblings().removeClass('active');
	});
	$("#log").click( function() 
	{
		$('.hm').addClass('active').siblings().removeClass('active');
	});
	$("#pbtn1,#pbtn2,#pbtn3,#pbtn4").click( function() 
	{
		alert("Please Contact us");
	});
	//
	$("#submit").click( function() 
	{
		var fm =document.getElementById("form_submit");
		var name=document.getElementById("nm").value;
		var email=document.getElementById("ml").value;
	   var pattern=/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;
	   var phone=document.getElementById("phn").value;
	   var message=document.getElementById("msg").value;
		if(name.trim()=="" ||email.trim()==""|| phone.trim()=="" || message.trim()=="")
		{
			alert('OOps.Please Fill All Fields!');
        }
		else
		{
		  if(email.match(pattern))
		  {
			  alert("Message successfully send");
		  }
		  else
		  {
			  alert("OOps.Please enter a valid mail");

		  }
        }
    });
	
	
	
	
	
	
	
	
	
	
	
	