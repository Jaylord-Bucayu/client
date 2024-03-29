import { AuthPage } from "@refinedev/antd";
import { ThemedTitleV2 } from '@refinedev/antd'

export const Login = () => {
  return (
    <AuthPage
      type="login"
      registerLink={false}
      forgotPasswordLink={false}
      title={
      <ThemedTitleV2 text="Alertify" icon={<img src="https://client-weld-eight.vercel.app/logo.png" />} collapsed={false} />} 
     
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
