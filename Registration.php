


<!DOCTYPE html>
<html lang="en">
<head>
	<title>Login</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
        <form method="post">
  
           <?php
                                                            if(isset($_POST['signup']))
                                                            {
                                                                $servername="localhost";
                                                                $username="root";
                                                                $password="Adit@2401";
                                                                $dbname="ce79";
                                                                try 
                                                                {
                                                                    $database=new PDO('mysql:host=localhost;dbname=ce79','root','Adit@2401');
                                                                    //echo "Connected...<br/>";
                                                                  
                                                                    $uname=$_POST['username'];
                                                                   
                                                                    $mail=$_POST['mail'];
                                                                    $mno=$_POST['mobileno'];
                                                                    $password=$_POST['password'];
                                                                    $repassword=$_POST['repassword'];
                                                                    if($password==$repassword)
                                                                    {
                                                                          $database->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION); 
                                                                        $sql="insert into hearme (username,password,Email,Mobile) 
                                                                            values ('$uname','$password','$mail','$mno')";

                                                                        $query=$database->query($sql);
                                                                        setcookie("registered","successfully registered");
                                                                        //echo "Data is inserted successfully";
                                                                         header('Location:Login.php ');
                                                                    }
                                                                    else
                                                                    {
                                                                        setcookie("notvalid","reenter");
                                                                    }
                                                                } 
                                                                catch (Exception $ex) 
                                                                {
                                                                        echo $ex->getMessage();
                                                                }
                                                            }
                                                        ?>
    </form>
</body>
</html>
