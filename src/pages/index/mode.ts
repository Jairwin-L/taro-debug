import { useDidShow } from '@tarojs/taro';
import { useState } from 'react';

function testAjax () {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				success: true,
				msg: '',
				data: '测试数据'
			})
		}, 1500);
	})
}

export default function useModel () {
  const [loading, setLoading] = useState<boolean>(true);
  const [resp, setResp] = useState<any>();
	const fetchData = async  () => {
		setLoading(true);
		const response = await testAjax();
		setLoading(false);
		setResp(response);
	}
	useDidShow(() => {
		fetchData()
  });
	return {
		...resp,
		loading,
	}
}