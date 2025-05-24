import './App.css'
import ClassBasedComponent from './components/class-based-components';
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import FormComponent from './components/form';
import FunctionalComponent from './components/functional-component';
import LoginComponent from './components/login/login';
import ProductList from './components/products/products-list';
import RegisterComponent from './components/register/register';
import UseReducerExample from './components/use-reducer/uuse-reducer';
import Users from './components/users';
import Products from './data-fetching-using-useEffect/data-fetching';
import Posts from './props/posts';
// import postsData from './props/posts-data';
import StateDemo from './state and setState/example1';
import UseStateUseEffectDemo from './useState-useEffect/demo1';

// const dummyProductData = ['Product 1', 'Product 2', 'Product 3'];

function App() {
  return (
    <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center' }}>
      <h1 className='title'>React Js Concepts</h1>
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
      {/* <Users /> */}
      {/* <Products /> */}

      {/* <ContextButtonComponent />
      <ContextTextComponent /> */}

      {/* <UseReducerExample /> */}
      {/* <div>
        <FormComponent />
      </div> */}

      <div style={{display: 'flex', gap: '20px'}}>
        <LoginComponent />
        <RegisterComponent />
      </div>
      

    </div>
  );
}

export default App
