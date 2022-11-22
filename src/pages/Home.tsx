// import { list_products } from "../data";
import SideBar from "../components/SideBar/SideBar";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import SearchBar from "../components/SearchBar/Searchbar";
import Avis from "../components/Avis";

// import { list_products } from "../data";

export interface Plante {
  toLowerCase(): string;
  id: string;
  name: string;
  unitprice_ati: number;
  quantity: number;
  category: string;
  rating: number;
  url_picture: string;
}

let listePlantes: Plante[] = [];
let checkedCateg: string[] = [];
let searchPlants: string;

const Home = () => {
  const [listPlantDisplayed, setListPlantDisplayed] = useState<Plante[]>([
    ...listePlantes,
  ]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/plantes").then((res) => {
      listePlantes = res.data.data;
      setListPlantDisplayed([...listePlantes]);
    });
  }, []);

  const handleCheckCategories = (mesCategoriesChecked: string[]) => {
    console.log("categories checked", mesCategoriesChecked);

    let resultFilteredPlants;
    checkedCateg = [...mesCategoriesChecked];

    if (checkedCateg.length > 0) {
      resultFilteredPlants = listePlantes.filter((x) =>
        checkedCateg.includes(x.category)
      );
    } else {
      resultFilteredPlants = [...listePlantes];
    }

    setListPlantDisplayed(resultFilteredPlants);
  };

  const handleSearch = (search: string): void => {
    setSearchValue(search);
    console.log("valeur input", searchValue);
  };

  return (
    <>
      {" "}
      {listPlantDisplayed.length > 0 && (
        <div className="d-flex align-items-stretch">
          <SideBar
            listElementPlant={listePlantes}
            onChangeCategoriesCheck={handleCheckCategories}
          />

          <div className="container-fluid custom-main ">
            <SearchBar onChangeSearch={handleSearch} />
            <Avis />
            <div className="container-card">
              <>
                {listPlantDisplayed.map((plante, i) => (
                  <ul key={i}>
                    <li key={i}>
                      <Card photo={plante} />
                    </li>
                  </ul>
                ))}
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
