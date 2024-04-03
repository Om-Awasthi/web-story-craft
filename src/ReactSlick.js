import React from "react";

function WebStories() {
  const ampStoryData = [
    {
      "id": 1,
      "title": "10 benefits of drinking tea",
      "content": "News Forum",
      "src": "https://images.news18.com/webstories/2023/11/egor-lyfar-jHMJrp33sUg-unsplash-1-scaled.jpg",
      
  },
{
 "id": 2, 
 "title": "2. Best Homeopathic drink", 
 "content": "Winters can often cause a period of digestive problems due to heavier meals and reduced physical activity. Tea with spices and herbs such as ginger, mint, and star anise can&nbsp;help in digestion and reduce gastrointestinal discomfort.",
 "src":"https://images.news18.com/webstories/2023/11/egor-lyfar-jHMJrp33sUg-unsplash-1-scaled.jpg",
 
 },
  {
      "id": 3,
      "title": "3. IMPROVES BLOOD CIRCULATION",
      "content": "Warm herbal teas, including clove-infused blends or those with saffron, have anti-inflammatory properties that can reduce swelling and give relief from pain.",
      "src": "https://images.news18.com/webstories/2023/11/egor-lyfar-jHMJrp33sUg-unsplash-1-scaled.jpg",
  
  },
{
      "id": 4,
      "title": "4. REDUCES INFLAMATION",
      "content": "Spice-infused tea serves as a healthy energy booster, rich in essential nutrients and minerals, without the potential negative side effects of highly caffeinated energy drinks commonly found in the market.",
      "src": "https://images.news18.com/webstories/2023/11/egor-lyfar-jHMJrp33sUg-unsplash-1-scaled.jpg",
    
  },
{
      "id": 5,
      "title": "5. BOOSTS NATURAL ENERGY",
      "content": "When consumed hot, tea gives warmth to your body, making you feel, cozy and more comfortable. It also helps in soothing winter aches and pains.",
      "src": "https://images.news18.com/webstories/2023/11/egor-lyfar-jHMJrp33sUg-unsplash-1-scaled.jpg",
  
  },
{
      "id": 6,
      "title": "6. WARMS THE BODY",
      "content": "Specific herbal teas, including eucalyptus or thyme tea, can heal respiratory symptoms like congestion and coughs, which are common during the cold months.",
      "src": "https://images.news18.com/webstories/2023/11/egor-lyfar-jHMJrp33sUg-unsplash-1-scaled.jpg",
     
  },
{
      "id": 7,
      "title": "7. ALLEVIATES BREATHING PROBLEMS",
      "content": "SCold temperatures and shorter daylight hours can increase stress levels and cause mood swings. Tea made with herbs like chamomile and lavender — known for their calming and stress-relieving properties — can help relax.",
      "src": "https://images.news18.com/webstories/2023/11/egor-lyfar-jHMJrp33sUg-unsplash-1-scaled.jpg",
      
  },
{
      "id": 8,
      "title": "8. REDUCES STRESS",
      "content": "Tea, especially green and herbal varieties, contains antioxidants. These compounds shield your cells from oxidative stress and have the potential to lower the risk of chronic diseases.",
      "src": "https://images.news18.com/webstories/2023/11/egor-lyfar-jHMJrp33sUg-unsplash-1-scaled.jpg",
 
  }


  ];

  return (
    <div className="App" style={{ textAlign: "center" }}>
      {ampStoryData && (
        <amp-story standalone>
          {ampStoryData.map((data) => (
            <amp-story-page id={data.id} key={data.id}>
              <amp-story-grid-layer template="fill">
                <amp-img
                  src={data.src}
                  width="1080"
                  height="1920"
                  layout="responsive"
                />
              </amp-story-grid-layer>
              <amp-story-grid-layer template="">
                <h1 style={{ color: "gray" }}>{data.title}</h1>
                <p
                  style={{
                    justifyContent: "left",
                    color: "white",
                    fontSize: "16px",
                    fontFamily: "inherit",
                    paddingBottom: "70px",
                  }}
                >
                  {data.content}
                </p>
              </amp-story-grid-layer>

            </amp-story-page>
          ))}
        </amp-story>
      )}
    </div>
  );
}

export default WebStories;


