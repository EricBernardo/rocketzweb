@extends('adminlte::page')
@section('content')

    <section class="content">

        <div class="row">

            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">{{ __('messages.listing') }}</h3>
                    <div class="box-tools pull-right">

                        <div class="btn-group">

                            <a href="{{ route('user.create') }}" class="btn btn-success btn-md">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                {{ __('messages.create') }}
                            </a>

                        </div>

                    </div>
                </div>

                @include('components.errors')
                @include('components.message')

                <div class="box-body no-padding">

                    <table class="table table-striped table-hover">
                        <tbody>
                        <tr>
                            <th style="width: 10px">#</th>
                            <th>{{ __('messages.name') }}</th>
                            <th class="hidden-xs">{{ __('messages.email') }}</th>
                            <th>-</th>
                            <th>-</th>
                        </tr>
                        @foreach($results as $result)
                            <tr>
                                <td style="width: 10px">{{$result['id']}}</td>
                                <td>{{$result['name']}}</td>
                                <td class="hidden-xs">{{$result['email']}}</td>
                                <td>
                                    <a href="{{ route('user.edit', [ 'id' => $result['id'] ]) }}"
                                       class="btn btn-primary btn-sm">
                                        <i class="fa fa-pencil" aria-hidden="true"></i>
                                        {{ __('messages.edit') }}
                                    </a>
                                </td>
                                <td>

                                    @if(!$result->hasRole('root'))

                                        <form method="POST"
                                              action="{{ route('user.destroy', [ 'id' => $result['id'] ]) }}"
                                              class="display-inline" role="form">

                                            <input type="hidden" name="_method" value="DELETE">

                                            {{ csrf_field() }}

                                            <button type="submit" class="btn btn-danger btn-sm btn-delete"
                                                    title="{{ __('messages.delete') }}"
                                                    data-destroy>
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                                {{ __('messages.delete') }}
                                            </button>

                                        </form>

                                    @endif

                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
                <!-- /.box-body -->

                <div class="box-footer clearfix">
                    <div class="pull-right">
                        {{$results->links()}}
                    </div>
                </div>

            </div>
            <!-- /.box -->
        </div>
    </section>

@endsection
