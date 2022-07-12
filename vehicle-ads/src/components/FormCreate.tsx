import { useState } from "react";
import api from "../service/api";
import "../styles/modal.css";
import Input from "./InputCreate";

function ModalFavorite({ setOpenForm, ...props }: any) {
  type InputType = {
    name: string;
    brand: string;
    color: string;
    year: number;
    plate: string;
  };

  const [form, setForm] = useState({
    name: "",
    brand: "",
    color: "",
    year: "",
    plate: "",
  });

  const tipVehicle = [
    {
      id: 1,
      name: "name",
      type: "text",
      required: true,
      label: "Nome:",
    },
    {
      id: 2,
      name: "brand",
      type: "text",
      required: true,
      label: "Marca:",
    },
    {
      id: 3,
      name: "color",
      type: "text",
      required: true,
      label: "Cor:",
    },
    {
      id: 4,
      name: "year",
      type: "number",
      required: true,
      label: "Ano:",
    },
    {
      id: 5,
      name: "plate",
      type: "text",
      required: true,
      label: "Placa:",
    },
  ];

  function handleValues(e: { target: { name: any; value: any } }) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    await api.post("/newvh", form);
  }

  return (
    <div className="form-layout">
      <form onSubmit={handleSubmit}>
        {tipVehicle.map((vehicle) => (
          <Input
            value={form[vehicle.name]}
            key={vehicle.id}
            {...vehicle}
            onChange={(e: any) => handleValues(e)}
          />
        ))}

        <button
          className="btn-modalCreate"
          type="submit"
          onClick={() => setOpenForm(false)}
        >
          Salvar
        </button>
        <button className="cancel" onClick={() => setOpenForm(false)}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default ModalFavorite;
