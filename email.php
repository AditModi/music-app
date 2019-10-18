<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->


<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
                 if(isset($_POST['reset']))
             {                                           
                   try
                   {
                       $servername="localhost";
                       $username="root";
                       $password="Adit@2401";                                              
                       $dbname="ce79";                                        
                        $connect=new PDO('mysql:host=localhost;dbname=ce79','root','Adit@2401');
                       echo 'connected';
                       
                       
                       $query=$connect->query('select * from hearme');
                        $connect->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                           
                        while($r=$query->fetch())
                        {
                       
                            if($r['username']==$_POST['username'] && $r['Email']==$_POST['mail'])
                            {
                                session_start();
                                setcookie("Id",$_POST['mail'],time()+(86400*60));
                                
                                
                                
                                /*$to = $r['Email'];
                                $subject = "Your Recovered Password";
 
                                $message = "Please use this password to login " ;
                                $headers =  'MIME-Version: 1.0' . "\r\n"; 
                                $headers .= 'From: department <adit.modi24@gmail.com>' . "\r\n";
                                $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 
                                
                                if(mail($to, $subject, $message, $headers)){
	                            header('Location:msg.php');
                                }
                                else{
	                           echo "Failed to Recover your password, try again";
                                }
                                //$url=$_SERVER['REQUEST_URI'];
                                */
                                header('Location:msg.php');
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

             }
        ?>
    </body>
</html>
