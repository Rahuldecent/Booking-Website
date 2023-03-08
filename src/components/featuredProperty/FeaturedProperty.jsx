import './featuredProperty.css'

function FeaturedProperty() {
  return (
    <div className='fp'>
      <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="fpImg" />
      <span className="fpName">7Season Apartment Budapest</span>
      <span className="fpCity">06. Terevaros,Hungary,Budapest</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>
      <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1" alt="" className="fpImg" />
      <span className="fpName">6 Continents Apartment by Prague Residence</span>
      <span className="fpCity">Prague 1,Czech Republic,Prague</span>
      <span className="fpPrice">Starting from $200</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div> 
      </div>
      <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" alt="" className="fpImg" />
      <span className="fpName"></span>
      <span className="fpCity">numa I Vita Apartments</span>
      <span className="fpPrice">Starting from $300</span>
      <div className="fpRating">
        <button>7.3</button>
        <span>Wonderful</span>
      </div> 
      </div>
      <div className="fpItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=fa323cf3e030ae6b41c8b475fe2853ae4e9e38148501d68dd5b915905dcea664&o=&s=1" alt="" className="fpImg" />
      <span className="fpName">7Season Apartment Budapest</span>
      <span className="fpCity">Cheval Three Quays at The Tower of London</span>
      <span className="fpPrice">Starting from $500</span>
      <div className="fpRating">
        <button>9.5</button>
        <span>Excellent</span>
      </div> 
      </div>
    </div>
  )
}

export default FeaturedProperty
