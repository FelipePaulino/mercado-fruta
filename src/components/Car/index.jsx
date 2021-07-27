import { useState, useEffect } from "react";
import { Container } from "../../styles/Global";
import * as S from "./styles";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js';
import PdfDocument from '../ReportPdf';

export default function Car({ data }) {
  const [fruitsSelected, setFruitsSelected] = useState();

  useEffect(() => {
    if (data) {
      const newArray = data.map(item => item[1])
      setFruitsSelected(newArray.filter(item => item !== 'lock'))
    }
  }, [data]);

  const prices = fruitsSelected?.map((som) => {
    return parseFloat(som.price.replace(',', '.'));
  });

  const totalCheckout = prices?.reduce((acumulado, x) => {
    return acumulado + x;
  });

  const total = totalCheckout?.toString().replace('.', ',');
  return (
    <S.Details>

      <Container>
        <S.Grid>

          <S.Wrapper>
            {
              fruitsSelected && fruitsSelected.map(fruit => {
                return (
                  <S.Content key={fruit}>
                    <S.Product>
                      <img src={fruit.image} alt={fruit.name} />
                    </S.Product>

                    <S.Detail>
                      <S.Heading>
                        <h2>{fruit.name}</h2>
                        <p>{fruit.description}</p>
                      </S.Heading>

                      <S.Price>
                        <sup>R$</sup><span>{fruit.price}</span>
                      </S.Price>

                      <S.Buttons>
                        <span>Quantidade:</span><span>1</span>
                      </S.Buttons>
                    </S.Detail>
                  </S.Content>
                )
              })
            }
          </S.Wrapper>

          <S.Aside>
            <S.Heading>
              <h1>Valor da Compra</h1>
            </S.Heading>

            {
              fruitsSelected && fruitsSelected.map(products => {
                return (
                  <>
                    <S.Items>
                      <S.ListProducts>
                        <li>
                          <span>[1x] </span>{products.name}
                        </li>
                      </S.ListProducts>

                      <S.ListProducts>
                        <li>
                          <span><sup>R$</sup>{products.price}</span>
                        </li>
                      </S.ListProducts>
                    </S.Items>
                  </>
                )
              })
            }

            <S.Finish>
              <S.Total>
                <h3>Total: </h3>
                
                <div>
                  <sup>R$</sup>
                  <span>{total}</span>
                </div>
              </S.Total>

              <div>
                <PDFDownloadLink
                  document={<PdfDocument data={fruitsSelected}  total={total}/>}
                  fileName="boleto.pdf">
                  {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Finalizar Compra'
                  }
                </PDFDownloadLink>
              </div>
            </S.Finish>
          </S.Aside>
        </S.Grid>
      </Container>
    </S.Details>
  );
}
