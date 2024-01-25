import { AuthPage } from "@refinedev/antd";
import { ThemedTitleV2 } from '@refinedev/antd'

export const Login = () => {
  return (
    <AuthPage
      type="login"
      
      // formProps={{
      //   initialValues: { email: "demo@refine.dev", password: "demodemo" },
      // }}
      // title={
      // <ThemedTitleV2 
      //          collapsed={false}
      //          text="Student Fees Notification" 
      //          icon={<img src="https://refine.dev/img/logo.png" />} />}
    />
  );
};
