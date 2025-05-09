export default function UserNameCell({
    user,
    onClick,
  }: {
    user: string;
    onClick: () => void;
  }) {
    return (
      <div
        onClick={onClick}
        style={{ cursor: "pointer" }}
        className="font-medium text-blue-500"
      >
        {user}
      </div>
    );
  }
  