import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import "./download.css"
const Download = () => {
  return (
    <div className='download w-100 content-center'>
        <div className="download-content content">
        
        <PDFDownloadLink document={<MyDocument />} fileName="Ecom-bazar.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
        </div>
  
  </div>
  )
}

export default Download