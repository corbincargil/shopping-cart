import './App.css';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
       <Layout/>
    </div>
  );
}

export default App;

/* 
  QUESTIONS: 

  1) In the ProductNavigation.js component, browsing by product/brand on the Shop page was done by taking the complete array of products and filtering  it based on the brand or product type (information contained in the the products.js file in the 'util' folder). An alternative could have been to make a page for each brand or product type and each listed product type or brand would have linked to its own page. Is one way better than the other? Obviously there are many different ways this could have been done. Also was my use of the useEffect hook (and additional functions in the ProductNavigation component) alright or is there I way I could have done it more efficiently? 

  The problem I ran into with the way I set up the product browsing was that I made the shopping.js component first, and then when I went to the make the footer component and add the different shopping links to that footer, I had to pass the information to filter the products (filterBy, filterWord, etc.) as props to the footer component and basically had to move a lot of stuff around. It was kind of a pain lol. This could have been avoided if I had been thinking ahead and planned it out better, but maybe there was just a better way to go about it in general? 

  2) This was the first time I used react router for a project. It functions the way I wanted it to, but is the way that I implemented it the best practice? My goal was to keep the header and footer on each page, but depending on the URL have different page content in the middle. I imagine this is a pretty common way to setup a website, so I bet theres a better way to do it other than the way I did, using the Layout.js compoenent I made. 

  3) 
*/
