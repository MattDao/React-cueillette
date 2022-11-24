import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import SearchBar from "../components/Searchbar";
import Avis from "../components/Avis";

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
let searchPlants: String;

const Home = () => {
  const [listPlantDisplayed, setListPlantDisplayed] = useState<Plante[]>([
    ...listePlantes,
  ]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8080/api/plantes", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
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
            <div className="container-card d-flex flex-wrap">
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
