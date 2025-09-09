import "./home.css";

export const Home = (() => {
  const homePage = (content) => {
    content.innerHTML = `<div class="text">
        <p>
          A mais de 30 anos o <strong>Beirut Food Truck</strong> serve com
          excelência a <strong>melhor culinária Árabe</strong> mantendo viva
          nossa paixão pela cultura.<br />Atualmente estamos localizados na
          <a href="https://www.bing.com/maps?&ty=18&ss=ypid.7993x7761946603493827290&mb=-20.644345~-40.483446~-20.645053~-40.482154&description=Av.%20Paris%2080%2C%20Guarapari%2C%20ES%2C%2029216-570%C2%B7Restaurante&cardbg=%23F57A5F&dt=1757458800000&tt=Beirut%20Food%20Park&tsts1=%2526ty%253D18%2526ss%253Dypid.7993x7761946603493827290%2526mb%253D-20.644345~-40.483446~-20.645053~-40.482154%2526description%253DAv.%252520Paris%25252080%25252C%252520Guarapari%25252C%252520ES%25252C%25252029216-570%2525C2%2525B7Restaurante%2526cardbg%253D%252523F57A5F%2526dt%253D1757458800000&tstt1=Beirut%20Food%20Park&cp=-20.644699~-40.48311&lvl=20.1&pi=0&ftst=1&ftics=True&v=2&sV=2&form=S00027">
          Av. Paris, 80.</a>
          e no Ifood. Se mantenha atualizado pelo
          <a href="https://www.instagram.com/beirutfoodtruck/">@beirutfoodtruck</a>
        </p>
      </div>
      <img src="./images/330.jpg" alt=""/>`;
  };

  return { homePage };
})();
