import { useState } from "react";
import { GifsList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/componets/CustomHeader";
import { SearchBar } from "./shared/componets/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["goku"]);

  const handleTermClick = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string) => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return;

    setPreviousTerms((prevTerms) => {
      if (prevTerms.includes(normalizedQuery)) return prevTerms;

      return [normalizedQuery, ...prevTerms].slice(0, 8);
    });
    const gifs = await getGifsByQuery(normalizedQuery);

    console.log(gifs);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        subtitle="Descubre y comparte el gif perfecto para cada momento"
      />

      {/* Search */}
      <SearchBar
        textButton="Buscar"
        placeholder="Buscar gifs..."
        onQuery={handleSearch}
      />

      {/* Previous Search */}
      <PreviousSearches
        onTermClick={handleTermClick}
        searches={previousTerms}
      />

      {/* Gifs  */}
      <GifsList gifs={mockGifs} />
    </>
  );
};
