import React from 'react';

import tshirtImage from '../../assets/tshirt.png'

import  SellerInfo  from '../SellerInfo'

import  ProductAction  from '../ProductAction'

import { Container, Row, Panel, Column, Gallery, Section, Description  } from './styles';

function Product() {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>

      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
          
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />


        
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => {
  return (
    <Section>
      <h4>Garantia</h4>

      <div>
        <span>
          <p className="title">Compra garantia com o Lorem Ipsum</p>
          <p className="description">Receba o produto que você está esperando ou devolvemos o seu dinheiro</p>
        </span>

        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">Sem garantia</p>
        </span>
      </div>

      <a href="#"> Saiba mais sobre garantia</a>
    </Section>
  )
}

const Info = () => {

  return (
    <Description>
      <h2>Descrição</h2>
      
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis iure suscipit fugiat iusto sint similique temporibus voluptates expedita laudantium laboriosam in voluptas corporis culpa aliquam reprehenderit veritatis, quidem numquam est blanditiis nesciunt itaque asperiores accusantium! Doloribus rem incidunt corporis perspiciatis recusandae fuga asperiores tenetur error consequatur nemo! Nisi, iste consequuntur!
    
      <br />
      <br />
      Itens inclusos: <br />

      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor iusto porro libero beatae, alias veritatis esse deserunt in itaque perspiciatis consequatur tenetur aperiam dolore fuga possimus assumenda totam vitae blanditiis reprehenderit eligendi incidunt quas. Iste est harum possimus, repellendus repudiandae cum reiciendis? Optio assumenda dolorum consequuntur voluptatem a voluptatibus quis dolorem, nulla harum natus, quae et, eligendi possimus similique eos sit numquam. Velit autem ipsum animi! Quia dolorum quam repellendus unde. Perferendis quisquam dolorem error deserunt. Saepe laudantium quasi fugit itaque eaque placeat asperiores tenetur! Cum ex illo neque?

    </p>
    </Description>
  )
}

export default Product;
