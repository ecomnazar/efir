import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { IChildren } from "../../../interfaces/Global/IChildren";

interface IMainModal extends IChildren {
  isOpen: boolean;
  handleClick: () => void;
}

const MainModal = ({ children, isOpen, handleClick }: IMainModal) => {
  const ref = useOutsideClick(() => {
    handleClick()
  });
  return (
    <>
      {isOpen && (
        <div className="w-screen h-screen bg-black bg-opacity-30 z-50 fixed top-0 left-0 flex items-center justify-center">
          <div
            ref={ref}
            className="modal w-full max-w-[500px] max-h-[400px] bg-primaryColor rounded-lg p-4 overflow-y-scroll"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default MainModal;
