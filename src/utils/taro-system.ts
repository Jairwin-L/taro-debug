import { getSystemInfoSync, getAccountInfoSync } from '@tarojs/taro';
/**
 * @module getSystemInfo
 * @description 获取系统信息
 */
export function getSystemInfo() {
  try {
    const res = getSystemInfoSync();
    return res;
  } catch (error: unknown) {
    console.log(`getSystemInfoSync:error----->：`, error);
    return {
      platform: 'ios',
      bluetoothAuthorized: false,
    };
  }
}
/**
 * @module getEnvVersion
 * @description 获取当前帐号所属环境，默认正式环境
 */
function getEnvVersion() {
  try {
    const { miniProgram } = getAccountInfoSync();
    const { envVersion } = miniProgram || {};
    return envVersion || 'release';
  } catch (error: unknown) {
    console.log(`Taro.getAccountInfoSync:error----->：`, error);
    return 'release';
  }
}

export { getEnvVersion };
