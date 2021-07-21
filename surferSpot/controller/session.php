<?php
class sessionClass{
   
    public $id;
    public $lastCall;
    public $firstCall;
    public $req;
    public $reqLimit;

    public function rateLimit(){
        //if date is set (last request made) it will only run function only one request per second
        if (isset($_SESSION['obj']->lastCall)) {
            $last = strtotime($_SESSION['obj']->lastCall);
            $curr = strtotime(date("Y-m-d h:i:s"));
            //last request time minus now to check if it is more than 1 sec
            $sec =  abs($last - $curr);
            //if it is minus than 1 sec it will die
            if ($sec < 1) {
              die ('Rate Limit Exceeded');        
            }
          }
          // case no request was made it will first set a time
          $_SESSION['obj']->lastCall = date("Y-m-d h:i:s");
    }
    
    public function reqLimit(){
        // if the very first request was not made, set them
        if(!isset($_SESSION['obj']->firstCall)){
            $_SESSION['obj']->firstCall = date("Y-m-d h:i:s");
            $_SESSION['obj']->req = 0;
        }
        if (isset($_SESSION['obj']->firstCall)) {
            $first = strtotime($_SESSION['obj']->firstCall);
            $current = strtotime(date("Y-m-d h:i:s"));
            $day =  abs($first - $current);
            //add 1 request everutime this function runs
            $req = $_SESSION['obj']->req ++;
            //if 24h have passed reset values
            if($day >= 86400){ //86400 sec in a day
                unset($_SESSION['obj']->req);
                unset($_SESSION['obj']->firstCall);
            }
            //if it reaches 1000 requests it will die (still figuring out a way to print something to interact with user)
            if ($req >= 1000) {
                die('Req Limit Exceeded');  // rate limit 
                
            }
        }
    }
}
?>