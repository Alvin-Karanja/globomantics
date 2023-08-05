import { BrowserRouter as Router, Route } from "react-router-dom";
import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";

function App() {

    const allHouses = useHouses();
    const featuredHouse = useFeaturedHouse(allHouses);
    const header = <Header subtitle="Providing houses all over the world" />;

    return (
      <Router>
          <div className="container">
              {header}
              <HouseFilter allHouses={allHouses} />
              <Router>
                  <Route path="/searchresults/:country">
                      <SearchResults allHouses={allHouses} />
                  </Route>

                  <Route path="/house/:id">
                      <HouseFromQuery allHouses={allHouses} />
                  </Route>

                  <Route path="/">
                      <FeaturedHouse house={featuredHouse} />
                  </Route>
              </Router>
          </div>
      </Router>
    );
}

export default App;
