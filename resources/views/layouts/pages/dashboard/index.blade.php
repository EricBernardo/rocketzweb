@extends('adminlte::page')
@section('content')

    <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="box-title">{{ __('messages.filter') }}</h3>
        </div>
        <div class="box-body">
            <form action="{{ route('dashboard.index') }}" method="get">
                <div class="form-group col-xs-12 col-md-6">
                    <label for="date_start">Data inicial</label>
                    <input type="date" class="form-control" name="date_start" id="date_start"
                           value="{{ \Request::get('date_start') }}">
                </div>
                <div class="form-group col-xs-12 col-md-6">
                    <label for="date_end">Data final</label>
                    <input type="date" class="form-control" name="date_end" id="date_end"
                           value="{{ \Request::get('date_end') }}">
                </div>
                <div class="form-group col-xs-12 text-right">
                    <input type="submit" class="btn btn-success" value="Filtrar">
                </div>
            </form>
        </div>
    </div>

    <div class="box box-info">

        <div class="box-body">

            <div class="row">

                <div class="col-lg-4 col-xs-12">
                    <div class="small-box bg-green">
                        <div class="inner">
                            <h3>R$ 53.00</h3>
                            <strong>{{ __('messages.inputs') }} (+)</strong>
                        </div>
                        <div class="icon">
                            <i class="fa fa-level-up"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-xs-12">
                    <div class="small-box bg-red">
                        <div class="inner">
                            <h3>R$ 400.00</h3>
                            <strong>{{ __('messages.outputs') }} (-)</strong>
                        </div>
                        <div class="icon">
                            <i class="fa fa-level-down"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-xs-12">
                    <div class="small-box bg-aqua">
                        <div class="inner">
                            <h3>R$ 550,00</h3>
                            <strong>{{ __('messages.balance') }} (=)</strong>
                        </div>
                        <div class="icon">
                            <i class="fa fa-money"></i>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-xs-12">
                    <div class="small-box bg-yellow">
                        <div class="inner">
                            <h3>{{ $data['new_clients'] }}</h3>
                            <strong>{{ __('messages.new_clients') }}</strong>
                        </div>
                        <div class="icon">
                            <i class="fa fa-users"></i>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-xs-12">
                    <div class="small-box bg-gray">
                        <div class="inner">
                            <h3>{{ $data['orders'] }}</h3>
                            <strong>{{ __('messages.orders') }}</strong>
                        </div>
                        <div class="icon">
                            <i class="fa fa-shopping-cart"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="box box-info">
        <div class="box-header with-border">
            <h3 class="box-title">{{ __('messages.cash_flow') }}</h3>
        </div>
        <div class="box-body">
            <div class="chart">
                <canvas id="cashFlowChart" height="300px"></canvas>
            </div>
        </div>
    </div>

@stop

@section('page_script')
    <script src="{{ asset('js/dashboard.js?v=' . getenv('APP_VERSION')) }}"></script>
@stop

@section('page_css')
    <style>
        .small-box {
            overflow: hidden;
        }
    </style>
@stop