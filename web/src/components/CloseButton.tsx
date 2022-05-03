import { X } from "phosphor-react";

function CloseButton({ onClick }: any) {
  return (
    <div
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Fechar formulário"
    >
      <X weight="bold" className="w-4 h-4 " onClick={onClick} />
    </div>
  );
}

export default CloseButton;
