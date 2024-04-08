import axios from "axios";
import { useEffect, useState } from "react";
import { Audio, TailSpin } from "react-loader-spinner";

const Characters = () => {
  const [charactersData, setCharactersData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/characters");
        setCharactersData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharactersData();
  }, []);

  return isLoading ? (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  ) : (
    <main>
      <h1>Characters</h1>
      {charactersData.results.map((character) => {
        return (
          <article key={character._id}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </article>
        );
      })}
    </main>
  );
};

export default Characters;
