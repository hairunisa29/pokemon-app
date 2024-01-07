import { IoCloseOutline } from "react-icons/io5";

function Modal({
  title,
  description,
  onSubmitModal,
  handleClose,
  setNickname,
}) {
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="h-fit w-fit p-4 rounded-lg bg-white shadow-md">
        <div className="flex justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
          <IoCloseOutline
            className="text-lg cursor-pointer"
            onClick={handleClose}
          />
        </div>

        <form className="flex flex-col gap-4 text-sm" onSubmit={onSubmitModal}>
          <div>
            <label htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              placeholder="Nickname"
              className="w-full rounded-md border-[1px] border-gray-200 p-3 shadow-sm sm:text-sm"
              name="nickname"
              required
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>

          <button
            className="w-full p-2 rounded-lg bg-primary hover:bg-blue-800 text-white text-sm font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
