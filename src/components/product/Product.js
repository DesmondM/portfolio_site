import "./product.css";

const Product = ({img,link,desc}) => {
  return (
    <div className="p">
      <div>{desc}</div>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      
    </div>
    
  );
};

export default Product;
