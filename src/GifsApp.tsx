import { GifsList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/componets/CustomHeader";
import { SearchBar } from "./shared/componets/SearchBar";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        subtitle="Descubre y comparte el gif perfecto para cada momento"
      />

      {/* Search */}
      <SearchBar textButton="Buscar" placeholder="Buscar gifs..." />

      {/* Previous Search */}
      <PreviousSearches searches={["naruto", "vegeta", "goku"]} />

      {/* Gifs  */}
      <GifsList gifs={mockGifs} />
    </>
  );
};
