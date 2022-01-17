# Aplicação App Comics Marvel

# Sobre a aplicação
Aplicação que é possível realizar buscas para visualizar quadrinhos da marvel e simular o envio de um quadrinho especifico para uma pessoa e traçar a rota para entrega.

![appMarvel](https://user-images.githubusercontent.com/37816505/149829836-cf2255df-8445-4d2a-be5a-15d06411f279.png)

# Rota para entrega

A aplicaçção solicita sua localização inicial e usa a Api do Google para converter as suas coordenadas na sua cidade. A partir de um cadastro de um endereço para envio é usado para fazer a conversão da posição para coordenadas, e consequentemente é desenhado uma rota para entrega usando a API do GOOGLE MAPS.

![App Marvel - Google Chrome 17_01_2022 17_00_39](https://user-images.githubusercontent.com/37816505/149830795-7dede629-dadf-4b58-9307-78951924815c.png)

# Filtro de busca

A aplicaçção também orefece a funcionalidade de buscar quadrinho pelo título:

![App Marvel - Google Chrome 17_01_2022 17_06_15](https://user-images.githubusercontent.com/37816505/149831493-7d7f047a-8077-44d6-8ce8-9bdc2029d372.png)


# Tecnologias

As tecnologias que foram usadas para desenvolver essa aplicação:



# React 
 Tecnologia utilizada para desenvolver a aplicação.
* [React](https://reactjs.org/)

# Firebase 
 Tecnologia utilizada para colocar a aplicação em produção.
* [Firebase](https://firebase.google.com/)

# Google APIs Geocoding, Maps, Directions Services 
 **Geocoding API** foi utilizada para converter coordenadas em endereços e para fazer o inverso também;
 **Geocoding Maps** foi utilizada para renderizar o mapa na tela e também as rotas;
 **Directions Services ** foi utilizada para fazer a manipulação com as rotas;

* [Google APIs](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiGqM_9zbn1AhWSC5EKHTGVDBsYABAAGgJjZQ&ei=Ys_lYbOKGMWZ4-EP6u-v0AY&ohost=www.google.com&cid=CAESQeD2FjYWn4zouChqzee1vT89SccgWkbQ6np88W7Qh-eSnFd-XKe1i_cbB-Gp50Tg5JFpFgvyxbD9lN5HVUsHzLVt&sig=AOD64_2iyaA2N4jzuZt96Koca-t3G9bFCA&q&sqi=2&adurl&ved=2ahUKEwizw7z9zbn1AhXFzDgGHer3C2oQ0Qx6BAgDEAE)

  # Sass
  Pré processador CSS
* [Sass](https://sass-lang.com/)

# Api da Marvel
Tecnologia utilizada para consumir os dados dos quadrinhos.
* [API da MARVEL](https://developer.marvel.com/)


# Como executar
Clone o projeto e acesse a pasta onde foi clonado.
Para iniciá-lo usando o **yarn**, siga os passos abaixo:

```
# Instalar as dependências com yarn 
$ yarn
# Iniciar o projeto
$ yarn start
```

Para iniciá-lo usando o **npm**, siga os passos abaixo:

```
# Instalar as dependências com npm 
$ npm install
# Iniciar o projeto
$ npm start
```
A aplicação rodará no seu browser pelo endereço http://localhost:3000.


