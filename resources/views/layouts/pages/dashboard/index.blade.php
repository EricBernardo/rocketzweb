@extends('adminlte::page')
@section('content')

    <div class="row">
        <div class="col-lg-4 col-xs-12">
            <div class="small-box bg-red">
                <div class="inner">
                    <h3>R$ 400.00</h3>
                    <strong>Saidas (-)</strong>
                </div>
                <div class="icon">
                    <i class="fa fa-level-down"></i>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-xs-12">
            <div class="small-box bg-green">
                <div class="inner">
                    <h3>R$ 53.00</h3>
                    <strong>Entradas (+)</strong>
                </div>
                <div class="icon">
                    <i class="fa fa-level-up"></i>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-xs-12">
            <div class="small-box bg-aqua">
                <div class="inner">
                    <h3>R$ 550,00</h3>
                    <strong>Saldo (=)</strong>
                </div>
                <div class="icon">
                    <i class="fa fa-money"></i>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-xs-12">
            <div class="small-box bg-yellow">
                <div class="inner">
                    <h3>123</h3>
                    <strong>Total clientes</strong>
                </div>
                <div class="icon">
                    <i class="fa fa-users"></i>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-xs-12">
            <div class="small-box bg-gray">
                <div class="inner">
                    <h3>234</h3>
                    <strong>Total Pedidos</strong>
                </div>
                <div class="icon">
                    <i class="fa fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">Bar Chart</h3>
        </div>
        <div class="box-body">
            <div class="chart">
                <canvas id="barChart" height="300px"></canvas>

            </div>
        </div>
        <!-- /.box-body -->
    </div>

@stop

@section('page_script')
    <script src="{{ asset('js/dashboard.js?v=' . getenv('APP_VERSION')) }}"></script>
@stop
