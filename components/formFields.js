import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DealPayload } from "../app/api/cuboCrm/model";

const API_URL = '/api/cuboCrm';

const initialFormData = {
  subject: "",
  organization: "",
  peopleName: "",
  email: "",
  peoplePhone: "",
  contactPreference: "",
  details: "",
  consent: false,
};

const initialErrors = {
  subject: false,
  organization: false,
  peopleName: false,
  consent: false,
};

const FormFields = () => {
  const [contactPreference, setContactPreference] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);

  const handleChangeContactPreference = (value) => {
    setContactPreference(value);
    setFormData({
      ...formData,
      contactPreference: value
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {
      subject: !formData.subject,
      organization: !formData.organization,
      peopleName: !formData.peopleName,
      consent: !formData.consent,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          toast.success("Contato enviado com sucesso!");
          setFormData(initialFormData); // Limpa o formulário após o envio bem-sucedido
        } else {
          toast.error("Erro ao enviar o contato. Tente novamente.");
        }
      } catch (error) {
        toast.error("Erro ao enviar o contato. Tente novamente.");
      }
    } else {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="">
            <select
              name="subject"
              className="rounded-md border-2 text-grey1 px-2 w-72 bg-white text-left py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="" disabled>
                Assunto
              </option>
              <option value="subject1">Assunto1</option>
              <option value="subject2">Assunto2</option>
              <option value="subject3">Assunto3</option>
              <option value="subject4">Outro assunto</option>
            </select>
            {errors.subject && <p className="text-red-500">Assunto é obrigatório</p>}
          </div>
          <div className="">
            <input
              type="text"
              name="organization"
              className="rounded-md border-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Empresa"
              value={formData.organization}
              onChange={handleChange}
            />
            {errors.organization && <p className="text-red-500">Empresa é obrigatório</p>}
          </div>
          <div className="">
            <input
              type="text"
              name="peopleName"
              className="rounded-md border-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nome"
              value={formData.peopleName}
              onChange={handleChange}
            />
            {errors.peopleName && <p className="text-red-500">Nome é obrigatório</p>}
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
              name="peoplePhone"
              className="rounded-md border-2 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Telefone"
              value={formData.peoplePhone}
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
                  contactPreference === "email"
                    ? "bg-blue-300 text-white"
                    : "text-gray-700"
                }`}
                onClick={() => handleChangeContactPreference("email")}
              >
                E-mail
              </button>
              <button
                type="button"
                className={`rounded-md border-2 border-main px-3 py-2 text-sm font-semibold text-main hover:bg-main/10 focus:outline-none ${
                  contactPreference === "phone"
                    ? "bg-blue-300  text-white"
                    : "text-gray-700"
                }`}
                onClick={() => handleChangeContactPreference("phone")}
              >
                Telefone
              </button>
              <button
                type="button"
                className={`rounded-md border-2 border-main px-3 py-2 text-sm font-semibold text-main hover:bg-main/10 focus:outline-none ${
                  contactPreference === "whatsapp"
                    ? "bg-blue-300 text-white"
                    : "text-gray-700"
                }`}
                onClick={() => handleChangeContactPreference("whatsapp")}
              >
                WhatsApp
              </button>
            </div>
          </div>

          <div className="">
            <textarea
              name="details"
              className="w-72 rounded-md border-2 border-grey3 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Explique sua necessidade (opcional)"
              value={formData.details}
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
            {errors.consent && <p className="text-red-500">Você deve concordar em receber informações</p>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`rounded px-4 py-4 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formData.consent
                  ? "bg-main hover:bg-main/80"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!formData.consent}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default FormFields;