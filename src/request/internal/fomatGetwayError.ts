import { ERROR } from '../constents';
import { get } from '../utils';

export default function fomatGetwayError(headers: {
  'Result-Status'?: string | null;
  'result-status'?: string | null;
  Tips?: string | null;
  Memo?: string | null;
}): {
  success: boolean;
  errorCode: string;
  errorMessage?: string;
  result?: Record<string, string>;
} | null {
  const resultStatus =
    get(headers, 'Result-Status') || get(headers, 'result-status', '');

  // 请求静态数据情况
  if (!resultStatus) return null;

  // 未登录
  if (resultStatus == '2000') {
    return {
      success: false,
      errorCode: ERROR.LOGIN,
    };
  }

  // 网关超时
  if (resultStatus == '4001') {
    return {
      success: false,
      errorCode: ERROR.TIMEOUT,
    };
  }

  if (resultStatus != '1000') {
    const tips = get(headers, 'Tips') || get(headers, 'tips', '');
    const memo = get(headers, 'Memo') || get(headers, 'memo', '');
    return {
      success: false,
      errorCode: ERROR.GATEWAY,
      errorMessage: decodeURIComponent(tips || ''),
      result: {
        resultStatus: resultStatus || '',
        tips: decodeURIComponent(tips || ''),
        memo: decodeURIComponent(memo || ''),
      },
    };
  }

  return null;
}
