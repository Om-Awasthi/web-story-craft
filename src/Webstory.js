import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Webstory.css';


const CustomPrevArrow = (props) => {
        const { className, onClick } = props;
        return <div className={`${className} custom-prev-arrow`} onClick={onClick} />;
      };
      
      const CustomNextArrow = (props) => {
        const { className, onClick } = props;
        return <div className={`${className} custom-next-arrow`} onClick={onClick} />;
      };
    
    const data = [
        {
            url: '/reactslick',
            imgSrc: 'https://images.news18.com/webstories/2023/10/Health-benefits-of-Indian-spices.jpg?impolicy=website&amp;width=155&amp;height=232',
            title: 'Best Indian spices in home remedies to cure cough & flu'
        },
        {
            url: '/reactslick',
            imgSrc: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
            title: 'Working for a professional photographer'
        },
        {
            url: '/reactslick',
            imgSrc: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            title: 'Stay focused for their work'
        },
        {
            url: '/reactslick',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6MLT2lpj3M85eFPT2oNNivGYx_saZEww8Q&usqp=CAU',
            title: 'Natuers always helps the people'
        },
        {
            url: '/reactslick',
            imgSrc: 'https://images.news18.com/webstories/2023/10/Health-benefits-of-Indian-spices.jpg?impolicy=website&amp;width=155&amp;height=232',
            title: 'Best Indian spices in home remedies to cure cough & flu'
        },
        {
            url: '/reactslick',
            imgSrc: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
            title: 'Working for a professional photographer'
        },
        {
            url: '/reactslick',
            imgSrc: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
            title: 'Stay focused for their work'
        },
        {
            url: '/reactslick',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6MLT2lpj3M85eFPT2oNNivGYx_saZEww8Q&usqp=CAU',
            title: 'Natuers always helps the people'
        }
    ]
    

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (<>
    <div className="carousel-container">
        <h1 className="heading-name">WebStories</h1>
   
     
    
    </div>
    
   
   
    <div className="carousel-container">
      
      
       
      <Slider {...settings}>
        {data.map((item, index) => (
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="carousel-item" key={index}>
            <img className="carousel-image" src={item.imgSrc} alt={item.title} />
      
              <p1 style={{
                //    wordBreak:"break-all",
                  position: 'absolute',
                  padding: "60px 15px 20px 15px",
                  fontSize:'24px',
                  color: 'white',
                  right:15,
                  bottom: 0,
                  left: 0,
                // margi
                  textAlign:'left',
                
                  fontWeight:'bold',
                  overflow:'hidden',
                //  
                }}>{item.title}</p1>
           
          
          </a>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default Carousel;

