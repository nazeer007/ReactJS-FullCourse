import styles from './product-item.module.css';

function ButtonComponent() {
    return (
        <button className= {styles.buttonStyle}>Click Here</button>
    );
}

function ProductItem({singleProductItem, index}) {
    return (
        <div 
        style={{border: "2px solid black" , padding: '20px', marginBottom: "10px"}}
        key={index}>
            <p className={styles.productTitle}>{singleProductItem}</p>
            <ButtonComponent />
        </div>
    );
}

export default ProductItem;