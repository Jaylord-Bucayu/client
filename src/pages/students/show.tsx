import { IResourceComponentsProps } from "@refinedev/core";
import { AntdShowInferencer } from "@refinedev/inferencer/antd";
import {InferencerShow} from "./inferencer/show.inferencer";

export const StudentsShow: React.FC<IResourceComponentsProps> = () => {
  return <InferencerShow />;
};
