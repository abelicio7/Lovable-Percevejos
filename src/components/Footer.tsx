import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">
              A Receita Natural Contra Percevejos
            </h3>
            <p className="text-background/80">
              Produto digital entregue imediatamente após confirmação do pagamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 border-t border-background/20 pt-8">
            <div className="space-y-3">
              <h4 className="font-bold text-lg">Suporte ao Cliente</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <p className="text-background/90">WhatsApp: +55 99953 0835</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <p className="text-background/90">eliminarpercevejos@gmail.com</p>
                </div>
              </div>
              <p className="text-sm text-background/70">
                Atendimento de Segunda a Sábado, das 8h às 18h
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">Formas de Pagamento</h4>
              <p className="text-background/90">Pix</p>
              <p className="text-background/90">Cartão</p>
              <p className="text-sm text-background/70 pt-2">
                Pagamento 100% seguro e processado instantaneamente
              </p>
            </div>
          </div>

          <div className="border-t border-background/20 pt-6 text-center text-sm text-background/70">
            <p>
              © {new Date().getFullYear()} Todos os direitos reservados. Este é um produto
              digital.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
