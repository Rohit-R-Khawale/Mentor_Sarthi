
import { Carousel } from 'antd';
import img1 from "../assets/IMG_scroolbar/24.jpeg"
import img2 from "../assets/IMG_scroolbar/50.jpeg"
import img3 from "../assets/IMG_scroolbar/84.jpeg"
import img4 from "../assets/IMG_scroolbar/55.jpeg"
const contentStyle = {
  height: '35rem',
  color: 'black',
  display:"grid",
  lineHeight: '160px',
  textAlign: 'center',
  background:"black",

};
const imgScrooler = () => (
  <Carousel autoplay>

    {/* Image 1 */}
    <div>
    <h3 style={contentStyle} >
      <center>
        <img src={img1} alt="printrest" className='h-full'/>
      </center>
    </h3>
    </div>

    {/* Image 2 */}
    <div>
      <h3 style={contentStyle}>
      <center>
        <img src={img2} alt="printrest" className=' w-82'/>
      </center>
      </h3>
    </div>

    {/* image 3 */}
    <div>
      <h3 style={contentStyle}>
        {/* apply image as background and then see */}
        <center><img src={img3} alt="image 3"  className='h-full w-full'/></center>
      </h3>
    </div>

    {/* Image 4 */}
    <div>
      <h3 style={contentStyle}>
        <img src={img4} alt="img4" />
      </h3>
    </div>
  </Carousel>
);
export default imgScrooler;