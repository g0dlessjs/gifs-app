import { useState } from "react";
import { GifsList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/componets/CustomHeader";
import { SearchBar } from "./shared/componets/SearchBar";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["goku"]);

  const handleTermClick = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string) => {
    console.log({ query });
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
