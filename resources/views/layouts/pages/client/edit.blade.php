@extends('adminlte::page')
@section('content')

    <section class="content">

        <div class="row">

            @include('components.errors')
            @include('components.message')

            <div class="box box-info">
                <div class="box-header">
                    <h3 class="box-title">{{ __('messages.edit') }}</h3>
                </div>
                <div class="box-body">

                    <form method="POST" action="{{ route('client.update', [ 'id' => $result['id'] ]) }}">

                        @method('PUT')

                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                        <div class="row">

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.cnpj') }}:</label>
                                <input type="text" name="cnpj" value="{{$result['cnpj']}}" class="form-control" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.title') }}:</label>
                                <input type="text" name="title" value="{{$result['title']}}" class="form-control" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.state_registration') }}:</label>
                                <input type="text" name="state_registration" class="form-control"
                                       value="{{ $result['state_registration'] }}">
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.phone') }}:</label>
                                <input type="text" name="phone" value="{{$result['phone']}}" class="form-control">
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.cep') }}:</label>
                                <input type="text" name="cep" class="form-control" value="{{$result['cep']}}" required>
                            </div>

                            <div class="form-group col-xs-4 col-md-2">
                                <label>{{ __('messages.state') }}:</label>
                                <select class="form-control" name="state_id" required>
                                    <option value="">Selecione</option>
                                    @foreach($states as $state)
                                        <option value="{{$state['id']}}" {{$state['id'] == $result['state_id'] ? 'selected' : ''}}>{{$state['abbr']}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group col-xs-8 col-md-4">
                                <label>{{ __('messages.city') }}:</label>
                                <select class="form-control" name="city_id" required>
                                    <option value="">Selecione</option>
                                    @foreach($cities as $city)
                                        <option value="{{$city['id']}}" {{$city['id'] == $result['city_id'] ? 'selected' : ''}}>{{$city['name']}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.address') }}:</label>
                                <input type="text" name="address" value="{{$result['address']}}" class="form-control" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.neighborhood') }}:</label>
                                <input type="text" name="neighborhood" value="{{$result['neighborhood']}}"
                                       class="form-control" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.number') }}:</label>
                                <input type="number" name="number" value="{{$result['number']}}" class="form-control" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.complement') }}:</label>
                                <input type="text" name="complement" value="{{$result['complement']}}"
                                       class="form-control">
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
