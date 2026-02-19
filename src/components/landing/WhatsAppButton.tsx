import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/584264399792?text=Hola%2C%20quiero%20comprar%20los%20300%20cr%C3%A9ditos%20de%20Lovable%20%2B%20el%20taller%20para%20dominar%20la%20herramienta"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
    style={{ backgroundColor: "#25D366", boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)" }}
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="h-7 w-7 text-white" fill="white" />
  </a>
);

export default WhatsAppButton;
