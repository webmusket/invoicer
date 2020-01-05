<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Invoicer;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. They are protected
| by your tool's "Authorize" middleware by default. Now, go build!
|
*/

Route::get('/default-setting', function () {

    $general = collect(Invoicer::where('type',0)->get())->keyBy('key');

    $general = $general->map(function($value, $key){
    	if ($value->value == '1') {
    		return true;
    	}
    	if ($value->value == '0') {
    		return false;
    	}
    	return $value->value;
    });

    $documents = collect(Invoicer::where('type',1)->get())->keyBy('key');

    $documents = $documents->map(function($value, $key){
    	if ($value->value == '1') {
    		return true;
    	}
    	if ($value->value == '0') {
    		return false;
    	}
    	if ($key == 'attach_to') {
    		return explode(', ', $value->value);
    		//$value->value = json_decode($value->value, true);;
    	}
    	return $value->value;
    });

    $status = collect(Invoicer::where('type',2)->get())->keyBy('key');

    $status = $status->map(function($value, $key){
    	if ($value->value == '1') {
    		return true;
    	}
    	if ($value->value == '0') {
    		return false;
    	}
    	return $value->value;
    });



    return response()->json([
	    'general' => $general,
	    'documents' => $documents,
	    'status' => $status
	]);
});

Route::put('/update-setting', function (Request $request) {

    if (!empty($request->general)) {
    	foreach ($request->general as $key => $value) {
    		Invoicer::where('type',0)->where('key',$key)->update(['value' => $value]);
    	}
    }

    if (!empty($request->documents)) {
    	foreach ($request->documents as $key => $value) {
    		if (gettype($value) == 'array') {
    			$value = implode(', ', $value);
    		}
    		Invoicer::where('type',1)->where('key',$key)->update(['value' => $value]);
    	}
    }

    if (!empty($request->status)) {
    	foreach ($request->status as $key => $value) {
    		Invoicer::where('type',2)->where('key',$key)->update(['value' => $value]);
    	}
    }

    // if (!empty($request->image)) {
    // 	//return $request->image;
    // }

    return "Updated Successfully";
});

// Route::get('/default-setting', 'Asad\Invoicer\Http\Controllers\InvoicerSettingController@index');
// Route::put('/update-setting', 'Asad\Invoicer\Http\Controllers\InvoicerSettingController@update');
