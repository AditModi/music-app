
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Login</title>
	<meta charset="UTF-8">
        <meta name="google-signin-client_id" content="577019509568-ob2fp8huc66fvuddfs9qdh1gebg0tmat.apps.googleusercontent.com">
	<meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://apis.google.com/js/platform.js" async defer></script>
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->
</head>
<body>
    <form method="post" action="email.php">
	<div class="limiter">
		<div class="container-login100" style="background-image: url('images/bg-01.jpg');">
			<div class="wrap-login100 p-l-20 p-r-20 p-t-20 p-b-20">
				<div class="login100-form validate-form">
					<span class="login100-form-title p-b-30">
						Reset password
					</span>

					</div>
					<div class="txt1 text-center p-t-20 p-b-10">
						<span>
							enter Username & E-mail Address to verify 
						</span>
					</div>
                                         <div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Username</span>
						<input class="input100" type="text" name="username" placeholder="Type your username">
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>
					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">E-mail</span>
						<input class="input100" type="text" name="mail" placeholder="Type your email-id">
						<span class="focus-input100" data-symbol="&#9993;"></span>
					</div>
                                        
                                    <div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
                                                        <button type="submit" name="reset" class="login100-form-btn">Resetpassword
                                                        </button>
						</div>
					</div>
                            
                          
		
		
</body>
</html>