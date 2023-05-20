import { useState } from 'react';
import { Form, Input, Picker, Cell, Button } from '@nutui/nutui-react-taro';
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import useModel from "./mode";
import { genCascadeData } from "./cascade-data";
import "./index.scss";

const option = genCascadeData();

export default function Main() {
  const { data, loading, success } = useModel() || {};
  const [isVisible, setIsVisible] = useState(false);
  const [pickerTitle, setPickerTitle] = useState("请选择地区");
  const [pickerValue, setPickerValue] = useState<Array<number | string>>([]);
  const onConfirm = (
    values: Array<number | string>,
    chooseData: any
  ) => {
    console.log(`values----->：`, values);
    const text = chooseData.map((item) => item.text).join("");
    setPickerTitle(text);
    setPickerValue(values);
  };
  const onClose = () => {
    setIsVisible(false);
  };
  const onOpen = () => {
    setIsVisible(true);
  };
  const onFinish = (values) => {
    console.log(`values----->：`, values);
  };
  return (
    <>
      {loading ? <>loading，等1500S</> : null}
      {!loading && !success ? <>error</> : null}
      {!loading && success ? (
        <>
          <Form onFinish={(values) => onFinish(values)}>
            <Form.Item
              label='姓名'
              name='username'
              rules={[{ required: true, message: "请输入姓名" }]}
            >
              <Input
                className='nut-input-text'
                placeholder='请输入姓名'
                type='text'
              />
            </Form.Item>
            <Cell title='请选择城市' desc={pickerTitle} onClick={onOpen} />
            <View catchMove>
              <Picker
                isVisible={isVisible}
                title={pickerTitle}
                defaultValueData={pickerValue}
                // @ts-ignore
                listData={option}
                onClose={onClose}
                // @ts-ignore
                onConfirm={(values, list: INutuiTaro.PickerOption[]) =>
                  onConfirm(values, list)
                }
              />
            </View>
            <Button loading={loading} block type='primary' formType='submit'>
              确认
            </Button>
          </Form>

          <View className='main'>首页</View>
          <View>{data?.list?.[0].title}</View>
          <Button
            block
            type='primary'
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/other/index",
              });
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
      ) : null}
    </>
  );
}
