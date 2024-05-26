import { Image,Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import logo from "../../image/bkash-logo.png"
const styles = StyleSheet.create({
    page: {
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     flexDirection: 'column',
     backgroundColor: '#E4E4E4',
     padding:'10px',
     gap:1,
     position: 'relative',
    },
    section: {
      margin: 20,
    
    },
    imageView:{
     width:'200px',
     height:'150px'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      heading: {
        fontSize: 16,
        marginBottom: 10,
      },
      text: {
        fontSize: 12,
        marginBottom: 5,
      },
      topHeader:{
        fontSize:'20px',
        color:'blue'
      },
      date:{
        fontSize:'12px',
        textAlign:'center'
      },
      watermark: {
        position: 'absolute',
        top: '50%',
        left: '20%',
        transform: 'rotate(-45deg)',
        opacity: 0.2,
        fontSize: 50,
        color: 'gray',
      },
  });
const MyDocument = () => {
  return (
    <Document>
    <Page size="A4" style={styles.page}>
    <Text style={styles.watermark}>CONFIRM</Text>
       <View style={styles.section}>
         <Text style={styles.topHeader}>Ecom-Bazar</Text>
         <Text style={styles.date}>25 Jun 2024</Text>
       </View>
      <Text style={styles.heading}>Product Details</Text>
      <View style={styles.section}>
         <View style={styles.imageView}>
         <Image style={styles.image} src={logo} />
         </View>
        <Text style={styles.text}>Name: Winter jacket for men and lady</Text>
        <Text style={styles.text}>Color: Yellow, Jeans</Text>
        <Text style={styles.text}>Price: 120</Text>
        <Text style={styles.text}>Discount: 10</Text>
        <Text style={styles.text}>Tax: 5</Text>
        <Text style={styles.text}>Total Price: 115</Text>
      </View>
      <Text style={styles.heading}>Customer Address</Text>
      <View style={styles.section}>
        <Text style={styles.text}>Name: Mohammad Noor</Text>
        <Text style={styles.text}>Email: noorcse@gmail.com</Text>
        <Text style={styles.text}>Phone: 01775296704</Text>
        <Text style={styles.text}>Country: Bangladesh</Text>
        <Text style={styles.text}>City: Dhaka</Text>
        <Text style={styles.text}>Street Address: 25/1</Text>
        <Text style={styles.text}>Area: Dhanmondi</Text>
        <Text style={styles.text}>Post Code: 120</Text>
        <Text style={styles.text}>Payment: online</Text>
        <Text style={styles.text}>Trans Id: #1233</Text>
      </View>
    </Page>

  </Document>
  )
}

export default MyDocument