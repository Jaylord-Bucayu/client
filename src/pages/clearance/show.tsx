import { IResourceComponentsProps } from "@refinedev/core";
import { AntdShowInferencer } from "@refinedev/inferencer/antd";

export const ClearanceShow: React.FC<IResourceComponentsProps> = () => {
  return <AntdShowInferencer />;
};


// const { tableProps } = useTable({
//   resource:`students/fees/65aa0d2400e65fec90b673f9`
// });

// <Table.Column dataIndex="particulars" title="Particular" />
// <Table.Column
//         dataIndex="amount"
//         title="Amount"
//         render={(amount) => (
//             <span>
//             ₱ {amount} {/* Assuming ₱ is the peso sign */}
//             </span>
//         )}
//         />
// <Table.Column dataIndex="status" title="Status" />
// <Table.Column dataIndex={["student","firstname"]} title="Section Name" />