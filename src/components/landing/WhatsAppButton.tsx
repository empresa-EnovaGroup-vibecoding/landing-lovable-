import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/584264399792?text=Hola%20quiero%20información%20sobre%20Lovable%20Pro"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="h-7 w-7 text-foreground" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
