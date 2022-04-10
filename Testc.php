<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Testc extends Controller
{
    public function demo(Request $r){
        
        $key=$r->key;
       
        $arr=array(
         'msg'=>'I am Laravel'
        );
        echo json_encode($arr);
    
   
    }
}
