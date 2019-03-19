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

                    <form method="POST" action="{{ route('user.update', [ 'id' => $result['id'] ]) }}">

                        @method('PUT')

                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                        <div class="row">

                            <div class="form-group col-xs-12">
                                <label>{{ __('messages.role') }}:</label>
                                <select class="form-control" name="role" required>
                                    @hasanyrole('root');
                                        <option value="root" {{ $result->hasRole('root') ? 'selected' : '' }}>
                                            Root
                                        </option>
                                    @endhasallroles
                                    <option value="administrator" {{ $result->hasRole('administrator') ? 'selected' : '' }}>
                                        {{ __('messages.administrator') }}
                                    </option>
                                    <option value="client" {{ $result->hasRole('client') ? 'selected' : '' }}>
                                        {{ __('messages.client') }}
                                    </option>
                                </select>

                            </div>

                            <div class="form-group col-xs-12 <?php echo !$result->hasRole('client') ? 'hidden' : ''; ?>">

                                <label><strong>{{ __('messages.client') }}:</strong></label>

                                <select class="form-control" name="client_id">
                                    <option value="">{{ __('messages.select_client') }}</option>
                                    @foreach($clients as $client)
                                        <option value="{{$client['id']}}" {{ $result['client_id'] == $client['id'] ? 'selected' : '' }}>{{$client['title']}}</option>
                                    @endforeach
                                </select>

                            </div>

                            @hasanyrole('root')

                                <div class="form-group col-xs-12">

                                    <label><strong>{{ __('messages.company') }}:</strong></label>

                                    <select class="form-control" name="company_id" required>
                                        <option value="">{{ __('messages.select_company') }}</option>
                                        @foreach($companies as $company)
                                            <option value="{{$company['id']}}" {{ $result['company_id'] == $company['id'] ? 'selected' : '' }}>{{$company['title']}}</option>
                                        @endforeach
                                    </select>

                                </div>

                            @else

                                <input type="hidden" name="company_id" value="{{ $result['company_id'] }}">

                            @endhasallroles

                            <div class="form-group col-xs-12">
                                <label>{{ __('messages.name') }}:</label>
                                <input type="text" name="name" class="form-control" value="{{ $result['name'] }}"
                                       required></div>

                            <div class="form-group col-xs-12">
                                <label>{{ __('messages.email') }}:</label>
                                <input type="email" name="email" class="form-control" value="{{ $result['email'] }}"
                                       required>
                            </div>

                            <div class="form-group col-xs-12">
                                <label>{{ __('messages.password') }}:</label>
                                <input type="password" name="password" class="form-control" value="">
                            </div>

                            <div class="form-group col-xs-12">
                                <label>{{ __('messages.password_confirmation') }}:</label>
                                <input type="password" name="password_confirmation" class="form-control" value="">
                            </div>

                            <div class="form-group col-xs-12">
                                <a href="{{ route('user.index') }}" class="btn btn-default pull-left">
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
    <script src="{{ asset('js/user.js?v=' . getenv('APP_VERSION')) }}"></script>
@stop
