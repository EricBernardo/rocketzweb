<?php

namespace App\Filters;

use Illuminate\Support\Facades\Auth;
use JeroenNoten\LaravelAdminLte\Menu\Builder;
use JeroenNoten\LaravelAdminLte\Menu\Filters\FilterInterface;
use Laratrust;

class MenuFilter implements FilterInterface
{

    public function transform($item, Builder $builder)
    {

        if (isset($item['can']) && !Auth::user()->hasRole($item['can'])) {
            return false;
        }

        return $item;

    }

}