import { IconFont } from "@nutui/icons-react-taro";
import "./index.scss";

export default function Test() {
  return (
    <>
      测试
      <IconFont
        color='#fa2c19'
        size='20'
        fontClassName='my-icon'
        classPrefix='icon'
        name='test-js'
      />
    </>
  );
}
