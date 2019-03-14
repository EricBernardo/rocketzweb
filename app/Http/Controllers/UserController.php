<?php

namespace App\Http\Controllers;

use App\Entities\Client;
use App\Http\Requests\UserRequest;
use App\Services\UserServices;

/**
 * Class UserController
 * @package App\Http\Controllers
 */
class UserController extends Controller
{

    private $services;

    /**
     * Create a new controller instance.
     *
     * @param UserServices $services
     */
    public function __construct(UserServices $services)
    {
        $this->middleware('auth');
        $this->services = $services;
    }

    public function index()
    {
        $results = $this->services->paginate();
        return view('layouts.pages.user.index', compact('results'));
    }

    public function all()
    {
        $results = $this->services->all();
        if (request()->wantsJson()) {
            return $results;
        }
    }


    public function create()
    {
        $clients = Client::all(['id', 'title']);
        return view('layouts.pages.user.create', compact('clients'));
    }

    public function store(UserRequest $request)
    {
        return $this->services->create($request->all());
    }

    public function edit($id)
    {
        $result = $this->services->show($id);
        $clients = Client::all(['id', 'title']);
        return view('layouts.pages.user.edit', compact('result', 'clients'));
    }

    public function update(UserRequest $request, $id)
    {
        return $this->services->update($request->all(), $id);
    }

    public function destroy($id)
    {
        return $this->services->delete($id);
    }


}
