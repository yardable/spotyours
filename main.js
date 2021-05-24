//<!-- envoyer un mail avec ajax tiré de https://gist.github.com/AntoninMarchardDev/3c93080160b6b502f3c13e8717567608 -->
$('#send_email').click(function(e){
		e.preventDefault();// <!-- éviter le refresh -->
		var data = {
			email: $('#E-mail').val(),
			name: $('#First name').val(),
			objet: $('#Last name').val(),
			message: $('#Your message').val()
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
					$('#E-mail').val("");//vider les champs
					$('#First name').val("");
					$('#Last name').val("");
					$('#Your message').val("")
				}, 3000);
			},
			error: function(data) {//callback cas2
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#E-mail').val("");
					$('#First name').val("");
					$('#Last name').val("");
					$('#Your message').val("")
				}, 3000);
			}
		});
	});

