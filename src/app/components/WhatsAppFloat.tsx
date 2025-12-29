"use client";

import { useState } from "react";

const FAQ_QUESTIONS = [
  {
    question: "¿Cuáles son los horarios de atención?",
    answer: "Los horarios de atención se coordinan según disponibilidad. Puedes contactarme por WhatsApp para agendar tu cita.",
  },
  {
    question: "¿Cuánto cuesta una consulta?",
    answer: "Consulta presencial: 30$ (USD) | Consulta online: 20$ (USD) | Certificados médicos: desde 10$ (USD). Precios en bolívares a tasa BCV Euro.",
  },
  {
    question: "¿Atiendes emergencias?",
    answer: "Este sitio es informativo. Para emergencias médicas, dirígete al servicio de urgencias más cercano o llama al 171 (emergencias Venezuela).",
  },
  {
    question: "¿Cómo agendar una cita?",
    answer: "Puedes agendar tu cita presencial u online contactándome por WhatsApp o email. Te responderé lo antes posible.",
  },
  {
    question: "¿Qué documentos necesito para la consulta?",
    answer: "Para tu primera consulta, trae tu cédula de identidad y, si tienes, exámenes médicos recientes o historial médico.",
  },
];

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const whatsappNumber = "584126476254";
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría agendar una cita o hacer una consulta."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* FAQ Panel */}
      {isOpen && (
        <div className="mb-4 w-80 rounded-2xl bg-white shadow-2xl border border-brand-soft overflow-hidden whatsapp-panel">
          <div className="bg-gradient-to-r from-brand to-brand-accent p-4 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">Preguntas Frecuentes</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-brand-light transition-colors"
                aria-label="Cerrar"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {FAQ_QUESTIONS.map((faq, index) => (
              <div
                key={index}
                className="border-b border-brand-soft last:border-b-0"
              >
                <button
                  onClick={() =>
                    setSelectedQuestion(
                      selectedQuestion === index ? null : index
                    )
                  }
                  className="w-full p-4 text-left hover:bg-brand-light/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-4 h-4 text-brand transition-transform ${
                        selectedQuestion === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {selectedQuestion === index && (
                  <div className="px-4 pb-4 text-sm text-slate-600 bg-brand-light/20 animate-in slide-in-from-top-2 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 bg-brand-light/30 border-t border-brand-soft">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition-all duration-300 hover:scale-105"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-brand to-brand-accent text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group ${
          !isOpen ? "whatsapp-float whatsapp-pulse" : ""
        }`}
        aria-label="WhatsApp"
      >
        {!isOpen ? (
          <svg
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 transition-transform duration-300 rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

