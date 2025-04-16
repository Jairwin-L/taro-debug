import { useState } from "react";
import { View } from "@tarojs/components";
import {
  Form,
  Input,
  Picker,
  Cell,
  Button,
  TextArea,
} from "@nutui/nutui-react-taro";
import "./index.scss";

export default function Test() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pickerTitle, setPickerTitle] = useState("请选择地区");
  const [pickerValue, setPickerValue] = useState<Array<number | string>>([]);

  const onConfirm = (
    chooseData: any,
    values: Array<number | string>
  ) => {
    console.log(`values----->：`, values);
    console.log(`chooseData----->：`, chooseData);
    const text = chooseData.map((item) => item.text).join("");
    setPickerTitle(text);
    setPickerValue(values);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onOpen = () => {
    setVisible(true);
  };
  const onFinish = async (values) => {
    console.log(`values----->：`, values);
  };
  return (
    <>
      测试
      {/* <Form form={form} divider labelPosition='right' onFinish={onFinish}>
        <Form.Item
          label='姓名'
          name='username'
          rules={[{ required: true, message: "请输入姓名" }]}
        >
          <Input placeholder='请输入姓名' type='text' />
        </Form.Item>
        <Form.Item
          label='选择城市'
          name='code'
          required
          rules={[
            {
              validator: () => {
                console.log(
                  `pickerValue?.length <= 0----->：`,
                  pickerValue?.length <= 0
                );
								return ''
              },
            },
          ]}
        >
          <Cell
            style={{
              padding: 0,
            }}
            extra={
              <>
                <View style={{ width: "100%" }}>{pickerTitle}</View>
								{'>'}
              </>
            }
            onClick={onOpen}
          />
        </Form.Item>
        <Form.Item
          label='详细地址'
          name='address'
          rules={[
            { required: true, message: "请输入详细地址" },
            // { max: 15, message: '详细地址不能超过15个字' },
          ]}
        >
          <TextArea placeholder='请输入详细地址' rows={1} autoSize />
        </Form.Item>
      </Form>
      <Button
        loading={loading}
        block
        onClick={() => form.submit()}
      >
        确认
      </Button>
      <Picker
        visible={visible}
        title={pickerTitle}
        // @ts-ignore
        options={[]}
        onClose={onClose}
        // @ts-ignore
        onConfirm={(list: INutuiTaro.PickerOption[], values) =>
          onConfirm(list, values)
        }
      /> */}
    </>
  );
}
