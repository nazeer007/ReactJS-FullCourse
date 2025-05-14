import './App.css'
import ClassBasedComponent from './components/class-based-components';
import FunctionalComponent from './components/functional-component';
import ProductList from './components/products/products-list';
import Users from './components/users';
import Posts from './props/posts';
import postsData from './props/posts-data';
import StateDemo from './state and setState/example1';
import UseStateUseEffectDemo from './useState-useEffect/demo1';

const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function App() {
  return (
    <div>
      <h1>React Js Concepts</h1>
      {/* <ProductList 
        listOfProducts = {dummyProductData}
        name = "Nazeer"
        city = "ABC"
      />
      {postsData.map((eachObj) => {
        const {id, title, body} = eachObj;
        return <Posts 
          key={id} 
          id={id}
          title={title}
          body={body}
        />
      })}
      <ClassBasedComponent />
      <StateDemo />
      <UseStateUseEffectDemo /> */}
      <Users />
    </div>
  );
}

export default App
