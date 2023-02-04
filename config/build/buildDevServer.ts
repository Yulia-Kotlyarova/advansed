import {BuildOptions} from './types/config';
import {Configuration} from 'webpack';
import 'webpack-dev-server';

export function buildDevServer (options: BuildOptions): Configuration {
  return {
    // @ts-ignore
    port: options.port,
    open: true,
    historyApiFallback: true,
  }
}