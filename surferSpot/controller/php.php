<?php 
require "database.php";
require "session.php";
session_start();
header('Content-Type: application/json');

$result = new crudClass;
if(!isset($_SESSION['obj'])){
    $_SESSION['obj'] = new sessionClass;
}
//function to send data to logs table
$result->logsTable();

//limit 1 request per second
$_SESSION['obj']->rateLimit();
//limit 10 requests per minute
$_SESSION['obj']->reqLimit();

if(isset($_GET['req'])){
    switch($_GET['req']){
      
        case 'register':
            //send values to database.php
            $result->register($_POST['inp_email'], $_POST['inp_name'], $_POST['inp_surname'], $_POST['inp_password'], $_POST['inp_conPass']);
            
            break;
        case 'login':
            //send values to database.php and to session.php to create a userid session to be used
            $id = $result->login($_POST['log_email'], $_POST['log_pass']);
            $_SESSION['obj']->id = $id;

            break;
         case 'logout':
            
            $result->logout();
        
            break;
        case 'update':
            //send values to database.php
            $result->update($_POST['upd_email'], $_POST['upd_name'], $_POST['upd_surname'], $_POST['upd_pass'], $_POST['upd_conPass'], $_POST['upd_mobile']);
            
            break;
        case 'populateForm':

            $result->populateForm();
        
            break;
        case 'sendComment':
            //send values to database.php
            $result->sendComment($_POST['sendComment']);
        
            break;
        case 'populateComments':
            
            $result->populateComments();
        
            break;
        case 'searchComments':
            //send values to database.php
            $result->searchComments($_POST['search_user']);
        
            break;
        case 'replyComment':
            //send values to database.php
            $result->replyComment($_POST['commentID'], $_POST['reply']);
        
            break;
        case 'deleteComment':
            //send values to database.php
            $result->deleteComment($_POST['commentID']);
        
            break;
        case 'viewAllComments':
            
            $result->viewAllComments();
        
            break;
        case 'adminRegister':
            //send values to database.php
            $result->adminRegister($_POST['registerEmail'], $_POST['registerName'], $_POST['registerSurname'],
            $_POST['registerPass'], $_POST['registerConPass'], $_POST['registerRole']);
        
            break;
        case 'registerSpots':
            //send values to database.php
            $result->registerSpots($_POST['spotName'], $_POST['region'], $_POST['windDir'],
            $_POST['swellDir'], $_POST['minSwell'], $_POST['tide']);
        
            break;
        case 'populateSpots':
            
            $result->populateSpots($_POST['regionID']);
        
            break;
        case 'deleteSpot':
            
            $result->deleteSpot($_POST['spotID']);
        
            break;
        case 'updateSpot':
            //send values to database.php
            $result->updateSpot($_POST['spotID'], $_POST['name'], $_POST['wind'], $_POST['swellD'], $_POST['swellS'], $_POST['tide']);
            
            break;
        case 'compareConditions':
            //send values to database.php
            $result->compareConditions($_POST['currentSize'], $_POST['currentDir'], $_POST['currentWindDir'], $_POST['currentHeight'], $_POST['chosenRegion']);
            
            break;
        case 'checkCond':
            $result->checkCond();
            break;
        case 'addCurCondition':
            $result->addCurCondition($_POST['tide'], $_POST['swellDir'], $_POST['swellH'], $_POST['wind']);
            break;
        case 'changeBkgrnd':
            $result->changeBkgrnd();
            break;
        default: $msg = Array('msg'=>'parameter combination not know');
        echo json_encode($msg);
    }
}
?>