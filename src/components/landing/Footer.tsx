import { MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-6 text-center">
        <h3 className="text-xl font-bold gradient-text">Nexus Digital</h3>

        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/IANexusonline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Facebook
          </a>
          <a
            href="https://wa.me/584264399792?text=Hola%2C%20quiero%20comprar%20los%20300%20cr%C3%A9ditos%20de%20Lovable%20%2B%20el%20taller%20para%20dominar%20la%20herramienta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            WhatsApp
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2025 Nexus Digital. Todos los derechos reservados.
        </p>
        <p className="text-xs text-muted-foreground/60">
          Lovable es una marca registrada de Lovable Inc. Nexus Digital es un distribuidor autorizado independiente.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
