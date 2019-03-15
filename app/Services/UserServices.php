<?php

namespace App\Services;

use App\User;

class UserServices extends DefaultServices
{
    
    public function __construct()
    {
        $this->entity = User::class;
    }
    
    public function create($data)
    {
        
        $data['password'] = bcrypt($data['password']);
        
        if ($data['role'] != 'client') {
            $data['client_id'] = null;
        }
        
        $result = $this->entity::create($data);
        
        $result->assignRole($data['role']);
        
        if (request()->wantsJson()) {
            return $result;
        }
        
        $response = [
            'message' => 'Created.',
        ];
        
        return redirect()->back()->with('success', $response['message']);
        
    }
    
    public function update($data, $id)
    {
        
        $result = $this->entity::where('id', $id)->first();
        
        if (isset($data['password']) && $data['password']) {
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }
        
        if ($data['role'] != 'client') {
            $data['client_id'] = null;
        }
        
        $result->update($data);
        
        $result->syncRoles($data['role']);
        
        if (request()->wantsJson()) {
            return $result;
        }
        
        $response = [
            'message' => 'Updated.',
        ];
        
        return redirect()->back()->with('success', $response['message']);
        
    }
    
}

