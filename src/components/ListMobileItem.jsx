import  '../App.css';
import PropTypes from 'prop-types';

function ListMobileItem({item}) {
  console.log(item.url)

  return (
     <div className="list-mobile-item">
       <div className="list-mobile-item-img">
         <img src={item.url}/>
       </div>
       <div className="list-mobile-info">
            <div className="list-mobile-item-name">{item.name}</div>
            <div className="list-mobile-item-price">Цена:{item.price} рублей</div>
            <div className="list-mobile-item-amount">Осталось на складе:{item.amount} штук</div>

       </div>
    </div>
  )
}

ListMobileItem.PropTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number
}


export default ListMobileItem;