import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import useModel from './mode';
import './index.scss';

export default function Main() {
	const { data, loading, success } = useModel() || {};
	console.log(`useModel()----->：`, useModel());
  return (
    <>
			{
				loading ? <>loading，等1500S</> : null
			}
			{
				!loading && !success ? <>error</> : null
			}
      {
				!loading && success ? (
					<>
						<View className='main'>首页</View>
						<View>{data?.list?.[0].title}</View>
						<Button block type='primary' onClick={() => {
							Taro.navigateTo({
									url: '/pages/other/index'
								})
							}}
						>
							进入other页面
						</Button>
						<View>
							{Array(50)
								.fill("1")
								.map((item) => {
									return <View key={item}>{item}</View>;
								})}
						</View>
						<View>底部</View>
					</>
				) : null
			}
    </>
  );
}
