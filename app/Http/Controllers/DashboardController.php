<?php

/*
 * Taken from
 * https://github.com/laravel/framework/blob/5.3/src/Illuminate/Auth/Console/stubs/make/controllers/HomeController.stub
 */

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Services\DashboardService;
use Illuminate\Http\Request;

/**
 * Class DashboardController
 * @package App\Http\Controllers
 */
class DashboardController extends Controller
{
    
    private $service;
    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(DashboardService $service)
    {
        $this->middleware('auth');
        $this->service = $service;
    }
    
    /**
     * Show the application dashboard.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $data = $this->service->infos($request);
        return view('layouts.pages.dashboard.index', compact('data'));
    }
}
