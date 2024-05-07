import { getNews } from '../../data/news'
import './news.css'

const News = () => {

  const newImages = getNews();
  return (
    <div className='news'>
      <div className="container">
        <div className="news_main">
          <div className="news_main_title">
            <h2>Oxirgi malumotlar</h2>
          </div>
          <div className="news_main_collect_items">
            {
              newImages.map(n=> (
                <div className="news_item">
                  <img src={n.Image} alt={n.title} className='news_item_img' />
                  <p className='news_item_content'>{n.title}</p>
                  <button><a href="#">Learn More</a></button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
