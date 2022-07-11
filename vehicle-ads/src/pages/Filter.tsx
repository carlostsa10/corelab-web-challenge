import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";
import { Container } from "../components/Container";

export function Filter() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleGoBack() {
    navigate(-1);
  }
  return (
    <Container>
      {location.pathname !== "/" && (
        <span
          className="absolute mt-10 ml-10 cursor-pointer"
          onClick={handleGoBack}
        >
          <ArrowLeft className="text-zinc-900" size={32} weight="light" />
        </span>
      )}
      <form className="flex-1 mx-[154px] mt-[58px] mb-[46px] bg-gray-900">
        <article className="flex-1 flex flex-col gap-[52px] py-20 px-[54px]">
          <div>
            <h2 className="text-[20px] font-sans font-normal text-neutral-800">
              Marca:{" "}
            </h2>
            <input
              className="w-full h-9 rounded-[100px]"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <h2 className="text-[20px] font-sans font-normal text-neutral-800">
              Cor:{" "}
            </h2>
            <input
              className="w-full h-9 rounded-[100px]"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <h2 className="text-[20px] font-sans font-normal text-neutral-800">
              Ano:{" "}
            </h2>
            <input
              className="w-full h-9 rounded-[100px]"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-row gap-14">
            <div>
              <h2 className="text-[20px] font-sans font-normal text-neutral-800">
                Preço mín:{" "}
              </h2>
              <input
                className="w-full h-9 rounded-[100px] border-[1px] border-black"
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <h2 className="text-[20px] font-sans font-normal text-neutral-800">
                Preço max:{" "}
              </h2>
              <input
                className="w-full h-9 rounded-[100px] border-[1px] border-black"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        </article>
        <footer className="flex justify-end px-[55px] py-10">
          <button className="w-[120px] h-[45px] rounded-[100px] bg-blue-600 text-[18px] font-sans font-normal text-neutral-800">
            SALVAR
          </button>
        </footer>
      </form>
    </Container>
  );
}
