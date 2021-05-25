//<!-- envoyer un mail avec ajax tiré de https://gist.github.com/AntoninMarchardDev/3c93080160b6b502f3c13e8717567608 -->
$('#send_email').click(function(e){
		e.preventDefault();// <!-- éviter le refresh -->
		var data = {
			email: $('#Email').val(),
			name: $('#Firstname').val(),
			objet: $('#Lastname').val(),
			message: $('#Yourmessage').val()
		};
        //ajax méthode de jquery
		$.ajax({
			url: "mail.php",
			type: 'POST', //post envoie des données
			data: data, //ce qu'on envoie à la ligne 4
			success: function(data) {//callback cas1
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'});//ça cache après le message de succès
					$('#Email').val("");//vider les champs
					$('#Firstname').val("");
					$('#Lastname').val("");
					$('#Yourmessage').val("")
				}, 3000);
			},
			error: function(data) {//callback cas2
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#Email').val("");
					$('#Firstname').val("");
					$('#Lastname').val("");
					$('#Yourmessage').val("")
				}, 3000);
			}
		});
	});

