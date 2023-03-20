import { useDidShow, useDidHide, getCurrentInstance, eventCenter } from '@tarojs/taro';
import { useRef, useState } from 'react';

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
	const instanceRef = useRef<any>(getCurrentInstance()).current;
	// const instance: any = getCurrentInstance();
  const [loading, setLoading] = useState<boolean>(true);
  const [resp, setResp] = useState<any>();
	const fetchData = async  () => {
		setLoading(true);
		const response = await testAjax();
		setLoading(false);
		setResp(response);
	}
	useDidShow(() => {
		const onHideEventId = instanceRef.router.onHide;
		// const onHideEventId = instance.router.onHide;
    eventCenter.on(onHideEventId, fetchData);
		fetchData()
  });
	useDidHide(() => {
		const onHideEventId = instanceRef.router.onHide;
		// const onHideEventId = instance.router.onHide;
		eventCenter.off(onHideEventId, fetchData);
  });
	return {
		...resp,
		loading,
	}
}