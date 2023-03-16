import { View } from '@tarojs/components';
import { Form, Input, Button } from '@nutui/nutui-react-taro';
import './index.scss';

export default function Main() {
  const onFinish = (values) => {
    console.log(`values----->：`, values);
  };
  return (
    <>
      <View className='main'>首页</View>
			<Form onFinish={(values) => onFinish(values)}>
        <Form.Item label='姓名' name='username' rules={[{ required: true, message: '请输入姓名' }]}>
          <Input className='nut-input-text' placeholder='请输入姓名' type='text' />
        </Form.Item>
        <Button block type='primary' formType='submit'>
          确认
        </Button>
      </Form>
      <View>
        {Array(50)
          .fill("1")
          .map((item) => {
            return <View key={item}>{item}</View>;
          })}
      </View>
      <View>底部</View>
    </>
  );
}
