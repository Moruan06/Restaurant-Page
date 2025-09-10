import "./contact.css";
import LancheImg from "./images/lanche.jpg";

export const Contact = (() => {
  const contactPage = (content) => {
    content.innerHTML = `<div class="contactInfo">
        <p>
          <strong>Fale com a Gente e Peça seu Beirut!</strong><br> Tá com vontade da melhor comida
          árabe da região? É fácil encontrar a gente ou pedir no conforto da sua
          casa. Anota aí:<br> ⏰ Horário de Funcionamento:<br> Quarta a Segunda: das
          18:00h às 23:00h<br> Terça-feira: Fechado para recarregar as energias!<br>📍Venha
          nos visitar e comer um lanche caprichado!<br>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.611142247696!2d-40.485393325122104!3d-20.64470108091023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb857b9e0f454ff%3A0xd87e924bb82211b4!2sBeirut%20Food%20truck!5e0!3m2!1spt-BR!2sbr!4v1757527795655!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br>
          🛵 Prefere receber em casa? Sem
          problemas!<br> <a href="https://wa.me/5527996125036">Whatsapp</a>: Mande um "oi" e faça seu pedido direto com a
          gente! <br> <a href="https://www.ifood.com.br/delivery/guarapari-es/beirut-food-truck-praia-do-morro/caff0048-4657-41af-8631-f840e5a21180">iFood:</a> Peça pelo app e acompanhe a
          entrega.<br> 📱 Siga a Gente Fique por
          dentro das novidades, promoções e veja fotos de dar água na boca!
          Instagram: @beirutfoodtruck
        </p>
      </div>`;
  };

  return { contactPage };
})();
