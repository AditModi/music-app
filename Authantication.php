<!DOCTYPE html>
<html lang="en">
<head>
	<title>Login</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
        <form method="post">
  
            <?php
              $url=$_SERVER['REQUEST_URI'];
                                echo $url;
                                 //header('Location:'.$url);
                              
                   try
                   {
                       $servername="localhost";
                       $username="root";
                       $password="Adit@2401";                                              
                       $dbname="ce79";                                        
                        $connection=new PDO('mysql:host=localhost;dbname=ce79','root','Adit@2401');
                       echo 'connected';
                       
                       
                       $query=$connection->query('select * from hearme');
                        $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                           
                        while($r=$query->fetch())
                        {
                       
                            if($r['username']==$_POST['username'] && $r['password']==$_POST['password'])
                            {
                                session_start();
                                setcookie("Id",$_POST['username']+$_POST['password'],time()+(86400*60));
                               
                                //$url=$_SERVER['REQUEST_URI'];
                                header('Location:index.html');
                            }
                            else
                            {
                                
                                //setcookie("valid","notvalid");
                                //header('Location:Login.php');
                            
                            }

                    
                    }

                   }
                   catch(Exception $xe)
                   {
                        echo $xe;
                   }

            ?>
    </form>
</body>
</html>
