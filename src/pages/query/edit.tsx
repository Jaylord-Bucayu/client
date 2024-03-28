import { IResourceComponentsProps } from "@refinedev/core";
// import { AntdEditInferencer } from "@refinedev/inferencer/antd";
import {EditInferencer} from "./inferencer/edit.inferencer"
export const QeueryEdit: React.FC<IResourceComponentsProps> = () => {
  return <EditInferencer />;
};
