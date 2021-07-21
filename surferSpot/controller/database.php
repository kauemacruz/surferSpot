<?php 
class crudClass{
    private $conn;
    public function __construct(){
     
        $this->conn = new PDO('mysql:host=localhost;dbname=surfspot_db', 'root','');
       
    }

    //validations
    public function not_name($name){
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
            return true;
       }
    }

    public function not_password($pass){
        if (preg_match("/^[a-zA-Z ]*$/",$pass)) {
            return true;
        }
    }

    public function inputFilter($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
    
        return $data;
    }

    public function register($email, $name, $surname, $pass, $conPass){
        if(empty($email) || empty($name) || empty($surname) ||  empty($pass)){
            $msg = Array('msg' => 'Please, no empty values');   
            echo json_encode($msg);   
        } 
        else{
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $msg = Array('msg'=>'email not valid'); 
                echo json_encode($msg); 
            }
            else{
                //check if email exists
                $sql = $this->conn->prepare("SELECT email FROM users WHERE email = ?");
                $sql->execute(array($email));
                if($sql->fetch()){
                    $msg = Array('msg'=>'email already exists'); 
                    echo json_encode($msg);       
                }
                else{
                    if($this->not_name($name)){
                        $msg = Array('msg'=>'Only letters in name'); 
                        echo json_encode($msg); 
                    }
                    else{
                        if($this->not_name($surname)){
                            $msg = Array('msg'=>'Only letters in surname'); 
                            echo json_encode($msg); 
                        }
                        else{
                            //validade password 
                            if(strlen($pass) < 6){
                                $msg = Array('msg' => 'Password must have at least 6 carachters'); 
                                echo json_encode($msg);   
                            }
                            else{
                                if($this -> not_password($pass)){
                                    $msg = Array('msg' => 'Password must contain number or symbol'); 
                                    echo json_encode($msg);
                                }
                                else{
                                    //compare password with password confirmation
                                    if($pass != $conPass){
                                        $msg = Array('msg' => 'Password does not match');  
                                        echo json_encode($msg);
                                    }
                                    else{
                                    // Prepare an insert statement
                                        if($stmt = $this->conn->prepare("INSERT INTO users (email, name, surname, password) VALUES (?, ?, ?, ?)")){
                                        // Bind variables to the prepared statement as parameters
                                        $stmt->bindValue(1, $this->inputFilter($email), PDO::PARAM_STR);
                                        $stmt->bindValue(2, $this->inputFilter($name), PDO::PARAM_STR);
                                        $stmt->bindValue(3, $this->inputFilter($surname), PDO::PARAM_STR);
                                        $param_password = password_hash($pass, PASSWORD_DEFAULT);
                                        $stmt->bindValue(4, $param_password, PDO::PARAM_STR);

                                            // Attempt to execute the prepared statement
                                            if($stmt->execute()){
                                                $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
                                                $msg = Array('msg' => 'addOK');  
                                                echo json_encode($msg);
                                            }
                                            else{
                                                $msg = Array('msg' => 'something went wrong');  
                                                echo json_encode($msg);
                                            } 
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    public function login($logEmail, $logPass){
            // Check if username is empty
        if(empty($logEmail)){
            $msg = Array('msg' => 'enter username');  
            echo json_encode($msg);
        } else{
            // Check if password is empty
            if(empty(htmlspecialchars($logPass))){
                $msg = Array('msg' => 'enter password');  
                echo json_encode($msg);

            } else{
                $sql = $this->conn->prepare("SELECT email FROM users WHERE email = ?");
                $sql->execute(array($logEmail));
                if($sql->fetch()){
                    $sql2 = $this->conn->query("SELECT password FROM users WHERE email = '$logEmail'");
                    while($password = $sql2->fetch(PDO::FETCH_OBJ)){
                    $hash = $password->password;
                    }
                    if(password_verify($logPass, $hash)){

                        //crete a role variable to find admins or users trough session
                        $sql3 = $this->conn->query("SELECT role, name, surname FROM users WHERE email = '$logEmail'");
                        while($credential = $sql3->fetch(PDO::FETCH_OBJ)){
                            $role = $credential->role;
                            $name = $credential->name;
                            $surname = $credential->surname;
                        }
                        $sql4 = $this->conn->query("SELECT userID FROM users WHERE email = '$logEmail'");
                        while($userId = $sql4->fetch(PDO::FETCH_OBJ)){
                            $id = $userId->userID;
                        }

                        $msg = Array('msg' => 'logOK', 'msg2' => $name, 'msg3' => $role, 'msg4' => $surname);  
                        echo json_encode($msg);
                        //return id to be used as a session
                        return $id;
                    } else{
                        // Display an error message if password is not valid
                        
                        $msg = Array('msg' => 'Invalid Password');  
                        echo json_encode($msg);
                    }
                    
                } else{
                    // Display an error message if username doesn't exist
                    $msg = Array('msg' => 'No user with this email exists');  
                    echo json_encode($msg);
                }             
            }
        }
    }

    public function logout(){

        $msg = Array('msg' => 'logout');  
        echo json_encode($msg);
        
    }

    public function update($updEmail, $updName, $updSurname, $updPass, $updConPass, $updMobile){
         //use session to get id
         $id = $_SESSION['obj']->id;

        if(empty($updEmail) || empty($updName) || empty($updSurname) ||  empty($updPass)){
            $msg = Array('msg' => 'Please, no empty values');   
            echo json_encode($msg);   
            }
        else{
            if (!filter_var($updEmail, FILTER_VALIDATE_EMAIL)) {
                $msg = Array('msg'=>'email not valid'); 
                echo json_encode($msg); 
            }else{
                //check if email exists
                $sql = $this->conn->query("SELECT email FROM users WHERE userID = $id");
                while($row = $sql->fetch(PDO::FETCH_OBJ)){
                $confEmail = $row->email;
                }
                $sql2 = $this->conn->prepare("SELECT email FROM users WHERE email = ?");
                $sql2->execute(array($updEmail));
                if($sql2->fetch() && $confEmail !== $updEmail){
                    $msg = Array('msg'=>'email already exists'); 
                    echo json_encode($msg);       
                }
                else{
                    if($this->not_name($updName)){
                        $msg = Array('msg'=>'Only letters in name'); 
                        echo json_encode($msg); 
                    }
                    else{
                        if($this->not_name($updSurname)){
                            $msg = Array('msg'=>'Only letters in surname'); 
                            echo json_encode($msg); 
                        }
                        else{         
                            if(strlen($updPass) < 6){
                                $msg = Array('msg' => 'Password must have at least 6 carachters'); 
                                echo json_encode($msg);   
                            }
                            else{
                                if($this -> not_password($updPass)){
                                    $msg = Array('msg' => 'Password must contain number or symbol'); 
                                    echo json_encode($msg);
                                }
                                else{
                                    if($updPass != $updConPass){
                                        $msg = Array('msg' => 'Password dont match');  
                                        echo json_encode($msg);
                                    }
                                    else{
                                        if(empty($updMobile)) {
                                            $updMobile="NULL";
                                        } 
                                        $param_password = password_hash($updPass, PASSWORD_DEFAULT);
                                        // update row
                                        $email = $this->inputFilter($updEmail);
                                        $name = $this->inputFilter($updName);
                                        $surname = $this->inputFilter($updSurname);
                                        $stmt = $this->conn->query("UPDATE users SET email = '$email', name = '$name', surname = '$surname', password = '$param_password', mobile = $updMobile WHERE userID = '$id'");
                                        // Attempt to execute the prepared statement
                                        if($stmt->execute()){
                                            $msg = Array('msg' => 'updOK');  
                                            echo json_encode($msg);
                                        }
                                    } 
                                }
                            }
                        }
                    }
                }
            }
        } 
    }
    
    public function populateForm(){
        //use session to get id
        $id = $_SESSION['obj']->id;
        
        $sql = $this->conn->query("SELECT name, surname, email, password, mobile FROM users WHERE userID = '$id'");
        while($row = $sql->fetch(PDO::FETCH_OBJ)){
            $name = $row->name;
            $surname = $row->surname;
            $email = $row->email;
            $mobile = $row->mobile;
        }
        $msg = Array('name' => $name, 'surname' =>$surname, 'email' => $email, 'mobile' => $mobile);  
        echo json_encode($msg);
    }

    public function populateComments(){
        // use session to get id
        $id = $_SESSION['obj']->id;
        //create result to display comments and null values will have a message "no answers yet"
        $stmt = $this->conn->query("SELECT comments.comment, COALESCE(replies.reply,'no answer yet') as reply 
        FROM comments 
        LEFT OUTER JOIN replies 
        ON replies.commentID = comments.commentID 
        WHERE comments.userID = '$id'
        order by comments.commentID");
      
        $num = $stmt->rowCount();
        if($num == 0){
            $msg = Array('msg' => 'No messages');
            echo json_encode($msg);
        }
        else{
            $i = 0;
            if ($i < $num){
                while($row = $stmt->fetch(PDO::FETCH_OBJ)) {
                $comment[$i] = $row->comment;
                $reply[$i] = $row->reply;
                //it wil add arrays until it get to the number of rows
                $i++;  
                }
                //pass values as json to be used
                $msg =  Array('comment' => $comment, 'reply'=> $reply);
                echo json_encode($msg);
            }
        }   
    }

    public function sendComment($comment){

        $id = $_SESSION['obj']->id;
        $stmt = $this->conn->query("INSERT INTO comments (commentID, userID, comment) VALUES (0, $id, '$comment')");
            
        $msg = Array('msg' => 'commentAdded');  
        echo json_encode($msg);
    }

    public function searchComments($searchUserID){
        if(empty($searchUserID)){
            $msg = Array('msg' => 'enter username ID');  
            echo json_encode($msg);
        }
        else{
            $stmt = $this->conn->query("SELECT comments.commentID, comments.comment, COALESCE(replies.reply,'no answer yet') as reply 
            FROM comments 
            LEFT OUTER JOIN replies 
            ON replies.commentID = comments.commentID 
            WHERE comments.userID = '$searchUserID'
            order by comments.commentID");
        
            $num = $stmt->rowCount();
            if($num == 0){
                $msg = Array('msg' => 'No messages');
                echo json_encode($msg);
            }
            else{
                $i = 0;
                if ($i < $num){
                    while($row = $stmt->fetch(PDO::FETCH_OBJ)) {
                    $comment[$i] = $row->comment;
                    $reply[$i] = $row->reply;
                    $commentID[$i] = $row->commentID;
                    //it wil add arrays auntil it get to the number of rows
                    $i++;  
                    }
                    
                    $msg =  Array('comment' => $comment, 'reply' => $reply, 'commentID' => $commentID);
                    echo json_encode($msg);
                }
            }
        }
    }

    public function deleteComment($delete){
        $stmt2 = $this->conn->query("DELETE FROM replies WHERE commentID='$delete'");
        $stmt = $this->conn->query("DELETE FROM comments WHERE commentID='$delete'");
        $msg =  Array('msg' => 'comment deleted' );
        echo json_encode($msg);
    }

    public function replyComment($comID, $reply){
        $id = $_SESSION['obj']->id;
        $stmt = $this->conn->query("INSERT INTO replies (replyID, repliedBy, reply, commentID) VALUES (0, $id, '$reply', '$comID')");
            
        $msg = Array('msg' => 'commentAdded');  
        echo json_encode($msg);
    }

    public function viewAllComments(){
        $stmt = $this->conn->query("SELECT comments.commentID, comments.comment, COALESCE(replies.reply,'no answer yet') as reply 
        FROM comments 
        LEFT OUTER JOIN replies 
        ON replies.commentID = comments.commentID 
        order by comments.commentID");
    
        $num = $stmt->rowCount();
        if($num == 0){
            $msg = Array('msg' => 'No messages');
            echo json_encode($msg);
        }
        else{
            $i = 0;
            if ($i < $num){
                while($row = $stmt->fetch(PDO::FETCH_OBJ)) {
                $comment[$i] = $row->comment;
                $reply[$i] = $row->reply;
                $commentID[$i] = $row->commentID;
                //it wil add arrays auntil it get to the number of rows
                $i++;  
                }
                
                $msg =  Array('comment' => $comment, 'reply' => $reply, 'commentID' => $commentID);
                echo json_encode($msg);
            }
        }
    }

    public function adminRegister($email, $name, $surname, $pass, $conPass, $role){
        if(empty($email) || empty($name) || empty($surname) ||  empty($pass)){
            $msg = Array('msg' => 'Please, no empty values');   
            echo json_encode($msg);   
        } 
        else{
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $msg = Array('msg'=>'email not valid'); 
                echo json_encode($msg); 
            }
            else{
                //check if email exists
                $sql = $this->conn->prepare("SELECT email FROM users WHERE email = ?");
                $sql->execute(array($email));
                if($sql->fetch()){
                    $msg = Array('msg'=>'email already exists'); 
                    echo json_encode($msg);       
                }
                else{
                    if($this->not_name($name)){
                        $msg = Array('msg'=>'Only letters in name'); 
                        echo json_encode($msg); 
                    }
                    else{
                        if($this->not_name($surname)){
                            $msg = Array('msg'=>'Only letters in surname'); 
                            echo json_encode($msg); 
                        }
                        else{
                            //validade password 
                            if(strlen($pass) < 6){
                                $msg = Array('msg' => 'Password must have at least 6 carachters'); 
                                echo json_encode($msg);   
                            }
                            else{
                                if($this -> not_password($pass)){
                                    $msg = Array('msg' => 'Password must contain number or symbol'); 
                                    echo json_encode($msg);
                                }
                                else{
                                    //compare password with password confirmation
                                    if($pass != $conPass){
                                        $msg = Array('msg' => 'Password does not match');  
                                        echo json_encode($msg);
                                    }
                                    else{
                                    // Prepare an insert statement
                                        if($stmt = $this->conn->prepare("INSERT INTO users (email, name, surname, password, role) VALUES (?, ?, ?, ?, ?)")){
                                        // Bind variables to the prepared statement as parameters
                                        $stmt->bindValue(1, $this->inputFilter($email), PDO::PARAM_STR);
                                        $stmt->bindValue(2, $this->inputFilter($name), PDO::PARAM_STR);
                                        $stmt->bindValue(3, $this->inputFilter($surname), PDO::PARAM_STR);
                                        $param_password = password_hash($pass, PASSWORD_DEFAULT);
                                        $stmt->bindValue(4, $param_password, PDO::PARAM_STR);
                                        $stmt->bindValue(5, $role, PDO::PARAM_STR);

                                            // Attempt to execute the prepared statement
                                            if($stmt->execute()){
                                                $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
                                                $msg = Array('msg' => 'addOK');  
                                                echo json_encode($msg);
                                            } 
                                        }
                                    }
                                }
                            }
                        }
                    } 
                }
            } 
        }       
    }

    public function registerSpots($name, $region, $windDir, $swellDir, $minSwell, $tide){
        //check if email exists
        $sql = $this->conn->prepare("SELECT spotName FROM users WHERE spotName = ?");
        $sql->execute(array($name));
        if($sql->fetch()){
            $msg = Array('msg'=>'spot already exists'); 
            echo json_encode($msg);       
        }
        else{
            //make sure there are no empty values 
            if(empty($name) || empty($region) || empty($windDir) || empty($swellDir) || empty($minSwell) || empty($tide)){
                $msg = Array('msg' => 'Please, no empty values');   
                echo json_encode($msg);   
            } 
            else{
                $id = $_SESSION['obj']->id;
                $stmt = $this->conn->query("INSERT INTO surfspot (spotID, spotName, region, windDirection, swellDirection, swellSize, bestTide, createdBy, dateCreated) 
                VALUES (0, '$name', '$region', $windDir, $swellDir, $minSwell, $tide, $id, now())");
            
                $msg = Array('msg' => 'addOK');  
                echo json_encode($msg);
            } 
        }       
    }

    public function populateSpots($region){
    
        $stmt = $this->conn->query("SELECT surfSpot.spotID, surfSpot.spotName, surfSpot.windDirection, surfSpot.swellDirection, surfSpot.swellSize, surfSpot.bestTide, surfSpot.dateCreated, users.surname
        FROM surfSpot 
        INNER JOIN users
        ON surfspot.createdBy = users.userID
        WHERE region = '$region';");
      
        $num = $stmt->rowCount();
        $i = 0;
        if ($i < $num){
            while($row = $stmt->fetch(PDO::FETCH_OBJ)) {
            $spotID[$i] = $row->spotID;
            $spotName[$i] = $row->spotName;
            $windDir[$i] = $row->windDirection;
            $swellDir[$i] = $row->swellDirection;
            $swellSize[$i] = $row->swellSize;
            $bestTide[$i] = $row->bestTide;
            $createdBy[$i] = $row->surname;
            $date[$i] = $row->dateCreated;
            //it wil add arrays until it get to the number of rows
            $i++;  
            }
            //pass values as json to be used
            $msg =  Array('spotID' => $spotID, 'spotName'=> $spotName, 'wind'=> $windDir, 'swellDir'=> $swellDir, 
            'swellSize'=> $swellSize, 'tide'=> $bestTide, 'createdBy'=> $createdBy, 'date'=> $date);
            echo json_encode($msg);
        } 
    }

    public function deleteSpot($delete){
        $stmt2 = $this->conn->query("DELETE FROM surfSpot WHERE spotID='$delete'");
        $msg =  Array('msg' => 'spot deleted' );
        echo json_encode($msg);
    }

    public function updateSpot($spotID, $name, $wind, $swellD, $swellS, $tide){
        $id = $_SESSION['obj']->id;
        if(empty($name) || empty($wind) || empty($swellD) || empty($swellS) || empty($tide)){
            $msg = Array('msg' => 'Please, no empty values');   
            echo json_encode($msg);   
        }else{
            // update row
            $stmt = $this->conn->query("UPDATE surfSpot SET bestTide = $tide, createdBy = $id, dateCreated = now(), spotName = '$name', 
            swellDirection = $swellD, swellSize = $swellS, windDirection = $wind WHERE spotID = $spotID");
            // Attempt to execute the prepared statement
            if($stmt->execute()){
                $msg = Array('msg' => 'updOK');  
                echo json_encode($msg);
            }
        } 
    } 

    public function compareConditions($size, $dir, $wind, $height, $region){
    
        $stmt = $this->conn->query("SELECT * FROM surfspot WHERE region = '$region'");
        $num = $stmt->rowCount();
        if($num == 0){
            $msg = Array('msg' => 'No spots');
            echo json_encode($msg);
        }
        else{
            $i = 0;
            if ($i < $num){
                while($row = $stmt->fetch(PDO::FETCH_OBJ)) {
                    $spotID[$i] = $row->spotID;
                    $spotName[$i] = $row->spotName;
                    $windDir[$i] = $row->windDirection;
                    $swellDir[$i] = $row->swellDirection;
                    $swellSize[$i] = $row->swellSize;
                    $bestTide[$i] = $row->bestTide;
                    
                    $windDir2[$i] = ($windDir[$i] - $wind);
                    if($windDir2[$i] == 0){
                        $windScore[$i] = 10;
                    }
                    if(($windDir2[$i] >= -22.5 || $windDir2[$i] <= 22.5 ) && $windDir2 !== 0){
                        $windScore[$i] = 8;
                    }
                    if($windDir2[$i] >= -45 && $windDir2[$i] <= -22.5 || $windDir2[$i] <= 45 && $windDir2[$i] >= 22.5  ){
                        $windScore[$i] = 6;
                    }
                    if($windDir2[$i] >= -67.5 && $windDir2[$i] <= -45 || $windDir2[$i] <= 67.5 && $windDir2[$i] >= 45 ){
                        $windScore[$i] = 4;
                    }
                    if($windDir2[$i] >= -90 && $windDir2[$i] <= -67.5 || $windDir2[$i] <= 90 && $windDir2[$i] >= 67.5){
                        $windScore[$i] = 2;
                    }
                    if($windDir2[$i] < -90 || $windDir2[$i] > 90 ){
                        $windScore[$i] = 0;
                    }

                    $swellDir2[$i] = ($swellDir[$i] - $dir);
                    if($swellDir2[$i] == 0){
                        $swellScore[$i] = 10;
                    }
                    if(($swellDir2[$i] >= -22.5 || $swellDir2[$i] <= 22.5 ) && $swellDir2 !== 0){
                        $swellScore[$i] = 8;
                    }
                    if($swellDir2[$i] >= -45 && $swellDir2[$i] <= -22.5 || $swellDir2[$i] <= 45 && $swellDir2[$i] >= 22.5  ){
                        $swellScore[$i] = 6;
                    }
                    if($swellDir2[$i] >= -67.5 && $swellDir2[$i] <= -45 || $swellDir2[$i] <= 67.5 && $swellDir2[$i] >= 45 ){
                        $swellScore[$i] = 4;
                    }
                    if($swellDir2[$i] >= -90 && $swellDir2[$i] <= -67.5 || $swellDir2[$i] <= 90 && $swellDir2[$i] >= 67.5){
                        $swellScore[$i] = 2;
                    }
                    if($swellDir2[$i] < -90 || $swellDir2[$i] > 90 ){
                        $swellScore[$i] = 0;
                    }

                    if($size < $swellSize[$i]){
                        $sizeScore[$i] = 4;
                    }
                    if($size == $swellSize[$i]){
                        $sizeScore[$i] = 8;
                    }
                    if($size > $swellSize[$i] && ($size - $swellSize[$i]) < 7){
                        $sizeScore[$i] = 10;
                    }
                    if($size > 6 && $size < 11){
                        $sizeScore[$i] = 6;
                    }
                    if($size > 10){
                        $sizeScore[$i] = 4;
                    }

                    if($height <= ($bestTide[$i] + 0.3) && $height >= ($bestTide[$i] - 0.3)){
                        $tideScore[$i] = 10;
                    }
                    if($height > ($bestTide[$i] + 0.3) || $height < ($bestTide[$i] - 0.3)){
                        $tideScore[$i] = 9;
                    }
                    $average[$i] = ($windScore[$i] + $swellScore[$i] + $sizeScore[$i] + $tideScore[$i]) / 4;
                    //it wil add arrays until it get to the number of rows
                    $i++;  
                }
            }
    
            $msg = Array('spot' => $spotName, 'perfectWind'=> $windScore, 'swell'=> $swellScore, 'size' => $sizeScore, 'tide' => $tideScore, 'average' => $average);
            echo json_encode($msg);
        }
    }

    public function checkCond(){
         //check if email exists
         $sql = $this->conn->prepare("SELECT *
         FROM conditions
         WHERE DATE_FORMAT(curHour, '%Y-%m-%d %H') = DATE_FORMAT(NOW(), '%Y-%m-%d %H');");
         $sql->execute();
         if($row = $sql->fetch(PDO::FETCH_OBJ)){
            $seaLevel = $row->seaLevel;
            $swellDirection = $row->swellDirection;
            $swellHeight = $row->swellHeight;
            $windDirection = $row->windDirection;
            
            $msg = Array('seaLevel'=> $seaLevel, 'swellDirection' => $swellDirection, 'swellHeight' => $swellHeight, 'windDirection' => $windDirection); 
            echo json_encode($msg); 
         }
         else{
            $msg = Array('msg'=>'update database'); 
             echo json_encode($msg);   
         }
    }

    public function addCurCondition($seaLevel, $swellDirection, $swellHeight, $windDirection){
        
        $stmt = $this->conn->query("INSERT INTO conditions (conditionID, seaLevel, swellDirection, swellHeight, windDirection, curHour) 
        VALUES (0, $seaLevel, $swellDirection, $swellHeight, $windDirection, now())");
        $msg = Array('msg'=>'database updated'); 
        echo json_encode($msg);  
    }

    public function logsTable(){
        $time = time();
        $referer = $_SERVER['HTTP_REFERER'];
        $sessionID = session_id();
        $url = $_SERVER['REQUEST_URI'];
        $addr = $_SERVER['REMOTE_ADDR'];
        $stmt = $this->conn->query("INSERT INTO logstable (logId, referrer, time, sessionID, url, ipAddress) VALUES(0, '$referer', now(), '$sessionID', '$url', '$addr');");

    }

    public function changeBkgrnd(){
         //use session to get id
         $id = $_SESSION['obj']->id;
        
         $sql = $this->conn->query("SELECT name, surname FROM users WHERE userID = '$id'");
         while($row = $sql->fetch(PDO::FETCH_OBJ)){
             $name = $row->name;
             $surname = $row->surname;
         }
         $msg = Array('name' => $name, 'surname' =>$surname);  
         echo json_encode($msg);
    }
}
?>