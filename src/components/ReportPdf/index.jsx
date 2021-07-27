import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const style = StyleSheet.create({
  page: {
    flexDirection: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffe0'
  },
  box: { margin: 30 },
  flex: {
    width: 500,
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    textAlign: 'center'
  }
});

const MyPdf = ({ data, total }) => (

  <Document>
    <Page size="A4" style={style.page}>
      <View style={style.box}>
        <Text style={style.text}>Relatório Confidencial</Text>
        <Text style={style.text}>Config. de Conta</Text>
      </View>

      <View style={style.box}>
        <Text>CONFERÊNCIA DE CONTA</Text>
        <Text>Mercado da Fruta</Text>
      </View>

      <View style={style.box}>
        <Text>** Não é Documento Fiscal **</Text>
      </View>

      <View>
        <Text style={style.title}>Produto</Text>
        {data?.map(item => {
          return (
            <>
              <View style={style.flex}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
              </View>
            </>
          )
        })}

        <View style={style.box}>
          <Text>Total: <sup>R$</sup>{total}</Text>
        </View>

      </View>
    </Page>
  </Document>
);

export default MyPdf