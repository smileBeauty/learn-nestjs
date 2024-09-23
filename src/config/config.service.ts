import { Injectable } from '@nestjs/common';
import { NacosConfigClient } from 'nacos';
import * as yaml from 'yaml';

@Injectable()
export class ConfigService {
  constructor() {
    this.configClient = new NacosConfigClient({
      serverAddr: process.env.NACOS_SERVER_ADDR,
      namespace: process.env.NACOS_NAMESPACE,
      username: process.env.NACOS_USERNAME,
      password: process.env.NACOS_PASSWORD,
    });
    this.commonConfig = {};
  }
  private configClient: NacosConfigClient;
  private commonConfig: Record<string, any>;

  private async getCommonConfig() {
    const commonConfig = await this.configClient.getConfig(
      process.env.NACOS_COMMON,
      process.env.NACOS_GROUP,
    );
    this.commonConfig = yaml.parse(commonConfig);
  }

  async getConfig(): Promise<Record<string, any>> {
    if (!(this.commonConfig && Object.keys(this.commonConfig).length)) {
      await this.getCommonConfig();
    }
    return this.commonConfig;
  }
}
