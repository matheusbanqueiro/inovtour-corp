import React, { useState } from "react";

const FormFields = () => {
  const [contactPreference, setContactPreference] = useState("");
  const [formData, setFormData] = useState({
    assunto: "",
    nome: "",
    email: "",
    telefone: "",
    necessidade: "",
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://sua-api.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    // Trate a resposta da API conforme necessário
    console.log(result);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="">
          <select
            name="assunto"
            className="rounded-md border-2 text-grey1 px-2 w-72 bg-white text-left py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.assunto}
            onChange={handleChange}
          >
            <option value="" disabled>
              Assunto
            </option>
            <option value="assunto1">Assunto1</option>
            <option value="assunto2">Assunto2</option>
            <option value="assunto3">Assunto3</option>
            <option value="assunto4">Assunto4</option>
          </select>
        </div>
        <div className="">
          <input
            type="text"
            name="nome"
            className="rounded-md border-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <input
            type="email"
            name="email"
            className="rounded-md border-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <input
            type="tel"
            name="telefone"
            className="rounded-md border-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <p className="flex gap-5 py-3 text-gray-700">
            Preferência de contato <span className="text-grey2">(Opcional)</span>
          </p>
          <div className="flex space-x-3">
            <button
              type="button"
              className={`rounded-md border-2 border-main px-3 py-2 text-sm font-semibold text-main hover:bg-main/10 focus:outline-none ${
                contactPreference === "E-mail"
                  ? "bg-blue-300 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setContactPreference("E-mail")}
            >
              E-mail
            </button>
            <button
              type="button"
              className={`rounded-md border-2 border-main px-3 py-2 text-sm font-semibold text-main hover:bg-main/10 focus:outline-none ${
                contactPreference === "Telefone"
                  ? "bg-blue-300  text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setContactPreference("Telefone")}
            >
              Telefone
            </button>
            <button
              type="button"
              className={`rounded-md border-2 border-main px-3 py-2 text-sm font-semibold text-main hover:bg-main/10 focus:outline-none ${
                contactPreference === "WhatsApp"
                  ? "bg-blue-300 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => setContactPreference("WhatsApp")}
            >
              WhatsApp
            </button>
          </div>
        </div>

        <div className="">
          <textarea
            name="necessidade"
            className="w-72 rounded-md border-2 border-grey3 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Explique sua necessidade"
            value={formData.necessidade}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="justi flex items-center">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            className="mr-2"
            checked={formData.consent}
            onChange={handleChange}
          />
          <label htmlFor="consent" className="text-gray-700">
            Concordo em receber informações
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded bg-main px-4 py-4 text-sm font-bold text-white hover:bg-main/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormFields;
