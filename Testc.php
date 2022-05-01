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


      $fl=$r->file("pimg");
      if(isset($fl)){
         $fn=time().$fl->getClientOriginalName();
         $fl->move("user_img",$fn);
      }

      $obj=new Student();
      $obj->name=$r->name;
      $obj->email=$r->email;
      $obj->gender=$r->gender;
      $obj->stream=$r->stream;
      $obj->subject=$r->subject;
      if(isset($fn)){
         $obj->pimg=$fn;
      }else{
         $obj->pimg="default.jpg";
      }
      $obj->save();
      
       $arr=array(

  'msg'=>'Student inserted'
  );

  echo json_encode($arr);

   }
}
