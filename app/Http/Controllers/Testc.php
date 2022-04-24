<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Student;

class Testc extends Controller
{
   public function home(){

  $arr=array(

  'msg'=>'I am a react laravel developer'
  );

  echo json_encode($arr);

   }


   public function insstd(Request $r){

      $obj=new Student();
      $obj->name=$r->name;
      $obj->email=$r->email;
      $obj->gender=$r->gender;
      $obj->stream=$r->stream;
      $obj->save();
      
       $arr=array(

  'msg'=>'Student inserted'
  );

  echo json_encode($arr);

   }
}
