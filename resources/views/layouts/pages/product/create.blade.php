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

                    <form method="POST" action="{{ route('product.store') }}">

                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                        <div class="row">

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.title') }}:</label>
                                <input type="text" name="title" class="form-control" value="{{ old('title') }}" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label>{{ __('messages.price') }}:</label>
                                <input type="text" name="price" class="form-control" value="{{ old('price') }}" required>
                            </div>

                            <div class="form-group col-md-12">
                                <a href="{{ route('product.index') }}" class="btn btn-default pull-left">
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
    <script src="{{ asset('js/product.js?v=' . getenv('APP_VERSION')) }}"></script>
@stop
