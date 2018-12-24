@extends('adminlte::page')
@section('content')

    <section class="content">

        <div class="row">

            @include('components.errors')
            @include('components.message')

            <div class="box box-info">
                <div class="box-header">
                    <h3 class="box-title">{{ __('messages.register') }}</h3>
                </div>
                <div class="box-body">

                    <form method="POST" action="{{ route('client.store') }}">

                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                        <div class="row">

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.cnpj') }}:</label>
                                <input type="text" name="cnpj" class="form-control" value="{{ old('cnpj') }}" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.title') }}:</label>
                                <input type="text" name="title" class="form-control" value="{{ old('title') }}" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.state_registration') }}:</label>
                                <input type="text" name="state_registration" class="form-control"
                                       value="{{ old('state_registration') }}">
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.phone') }}:</label>
                                <input type="text" name="phone" class="form-control" value="{{ old('phone') }}">
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.cep') }}:</label>
                                <input type="text" name="cep" class="form-control" value="{{ old('cep') }}" required>
                            </div>

                            <div class="form-group col-xs-4 col-md-2">
                                <label>{{ __('messages.state') }}:</label>
                                <select class="form-control" name="state_id" data-value="{{old('state_id')}}" required>
                                    <option value="">Selecione</option>
                                    @foreach($states as $state)
                                        <option value="{{$state['id']}}">{{$state['abbr']}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group col-xs-8 col-md-4">
                                <label>{{ __('messages.city') }}:</label>
                                <select class="form-control" name="city_id" data-value="{{old('city_id')}}" data-text="" required>
                                    <option value="">Selecione</option>
                                    <option value="">Selecione um estado</option>
                                </select>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.address') }}:</label>
                                <input type="text" name="address" class="form-control" value="{{ old('address') }}" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.neighborhood') }}:</label>
                                <input type="text" name="neighborhood" class="form-control"
                                       value="{{ old('neighborhood') }}" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.number') }}:</label>
                                <input type="number" name="number" class="form-control" value="{{ old('number') }}" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.complement') }}:</label>
                                <input type="text" name="complement" class="form-control"
                                       value="{{ old('complement') }}">
                            </div>

                            <div class="form-group col-md-12">
                                <a href="{{ route('client.index') }}" class="btn btn-default pull-left">
                                    {{ __('messages.back') }}
                                </a>
                                <input type="submit" class="btn btn-info pull-right"
                                       value="{{ __('messages.save') }}"/>
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    </section>

@endsection

@section('page_script')
    <script src="{{ asset('js/client.js?v=' . getenv('APP_VERSION')) }}"></script>
@stop