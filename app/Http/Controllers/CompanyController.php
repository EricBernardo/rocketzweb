<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyRequest;
use App\Services\CompanyServices;

/**
 * Class CompanyController
 * @package App\Http\Controllers
 */
class CompanyController extends Controller
{

    private $services;

    /**
     * Create a new controller instance.
     *
     * @param CompanyServices $services
     */
    public function __construct(CompanyServices $services)
    {
        $this->middleware('auth');
        $this->services = $services;
    }

    public function index()
    {
        $results = $this->services->paginate();
        return view('layouts.pages.company.index', compact('results'));
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
        return view('layouts.pages.company.create');
    }

    public function store(CompanyRequest $request)
    {
        return $this->services->create($request);
    }

    public function edit($id)
    {
        $result = $this->services->show($id);
        return view('layouts.pages.company.edit', compact('result'));
    }

    public function update(CompanyRequest $request, $id)
    {
        return $this->services->update($request, $id);
    }

    public function destroy($id)
    {
        return $this->services->delete($id);
    }


}
