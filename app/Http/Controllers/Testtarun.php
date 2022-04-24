<?php

namespace App\Http\Controllers;
use App\Models\Customar;
use Illuminate\Http\Request;

class Testtarun extends Controller
{
    public function taruntext(){
        // echo "I am laravell new";
        $arr=array(
            'msg'=>'I am laravell new'
        );
        echo json_encode($arr);
    }

    public function customarin(Request $r){

        $obj=new Customar();

        $obj->name=$r->name;
        $obj->email=$r->email;
        $obj->gender=$r->gender;
        $obj->stream=$r->stream;
        $obj->save();

        $arr=array(
            'msg'=>'customar in'
        );
        echo json_encode($arr);


    }
}
