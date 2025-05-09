import ModalUserCreate from "../organisms/ModalUserCreate";

export default function UserModal({
  visible,
  isEditing,
  onClose,
}: {
  visible: boolean;
  isEditing: boolean;
  onClose: () => void;
}) {
  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex align-items-center justify-content-center"
      style={{
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 1000,
      }}
    >
      <div className="bg-white w-10 h-38rem border-round shadow-4">
        <ModalUserCreate state={isEditing} onClose={onClose} />
      </div>
    </div>
  );
}
