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

                    <form method="POST" action="{{ route('company.update', [ 'id' => $result['id'] ]) }}">

                        @method('PUT')

                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                        <div class="row">

                            <div class="form-group col-md-12">
                                <label>{{ __('messages.title') }}:</label>
                                <input type="text" name="title" value="{{$result['title']}}" class="form-control" required>
                            </div>

                            <div class="form-group col-md-12">
                                <a href="{{ route('company.index') }}" class="btn btn-default pull-left">
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
