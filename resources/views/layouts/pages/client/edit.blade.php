@extends('adminlte::layouts.app')

@section('htmlheader_title')
    {{ trans('adminlte_lang::message.home') }}
@endsection

@section('main-content')

    <section class="content">

        <div class="row">

            @include('components.errors')
            @include('components.message')

            <div class="box box-info">
                <div class="box-header">
                    <h3 class="box-title">{{ trans('adminlte_lang::message.edit') }}</h3>
                </div>
                <div class="box-body">

                    <form method="POST" action="{{ route('client.update', [ 'id' => $result['id'] ]) }}">

                        @method('PUT')

                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                        <div class="row">

                            <div class="form-group col-md-6">
                                <label>{{ trans('adminlte_lang::message.cnpj') }}:</label>
                                <input type="text" name="cnpj" value="{{$result['cnpj']}}" class="form-control" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ trans('adminlte_lang::message.title') }}:</label>
                                <input type="text" name="title" value="{{$result['title']}}" class="form-control" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ trans('adminlte_lang::message.state_registration') }}:</label>
                                <input type="text" name="state_registration" class="form-control"
                                       value="{{ $result['state_registration'] }}">
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ trans('adminlte_lang::message.phone') }}:</label>
                                <input type="text" name="phone" value="{{$result['phone']}}" class="form-control">
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ trans('adminlte_lang::message.cep') }}:</label>
                                <input type="text" name="cep" class="form-control" value="{{$result['cep']}}" required>
                            </div>

                            <div class="form-group col-xs-4 col-md-2">
                                <label>{{ trans('adminlte_lang::message.state') }}:</label>
                                <select class="form-control" name="state_id" required>
                                    <option value="">Selecione</option>
                                    @foreach($states as $state)
                                        <option value="{{$state['id']}}" {{$state['id'] == $result['state_id'] ? 'selected' : ''}}>{{$state['abbr']}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group col-xs-8 col-md-4">
                                <label>{{ trans('adminlte_lang::message.city') }}:</label>
                                <select class="form-control" name="city_id" required>
                                    <option value="">Selecione</option>
                                    @foreach($cities as $city)
                                        <option value="{{$city['id']}}" {{$city['id'] == $result['city_id'] ? 'selected' : ''}}>{{$city['name']}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ trans('adminlte_lang::message.address') }}:</label>
                                <input type="text" name="address" value="{{$result['address']}}" class="form-control" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ trans('adminlte_lang::message.neighborhood') }}:</label>
                                <input type="text" name="neighborhood" value="{{$result['neighborhood']}}"
                                       class="form-control" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ trans('adminlte_lang::message.number') }}:</label>
                                <input type="number" name="number" value="{{$result['number']}}" class="form-control" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ trans('adminlte_lang::message.complement') }}:</label>
                                <input type="text" name="complement" value="{{$result['complement']}}"
                                       class="form-control">
                            </div>

                            <div class="form-group col-md-12">
                                <a href="{{ route('client.index') }}" class="btn btn-default pull-left">
                                    {{ trans('adminlte_lang::message.back') }}
                                </a>
                                <input type="submit" class="btn btn-info pull-right"
                                       value="{{ trans('adminlte_lang::message.save') }}"/>
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    </section>

@endsection
