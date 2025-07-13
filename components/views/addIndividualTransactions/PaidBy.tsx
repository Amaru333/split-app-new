import UISelect from "@/components/widgets/UISelect";
import { User } from "@/components/common/types";

interface PaidByProps {
  data: {
    user: User;
  };
  setData: (data: { user: User }) => void;
  users: User[];
}

export default function PaidBy({ data, setData, users }: PaidByProps) {
  return (
    <UISelect value={data.user.name} onValueChange={(value) => setData({ ...data, user: users.find((user) => user.id === value) || users[0] })} label="Paid By">
      {users.map((user) => (
        <UISelect.Option key={user.id} value={user.id}>
          {user.name}
        </UISelect.Option>
      ))}
    </UISelect>
  );
}
