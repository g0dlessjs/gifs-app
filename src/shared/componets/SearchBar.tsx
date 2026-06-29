import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  textButton: string;
  placeholder: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ textButton, placeholder, onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [query, onQuery]);

  const handleSearch = () => {
    if (query.trim().length < 1) return;

    onQuery(query);
    setQuery("");
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>{textButton}</button>
    </div>
  );
};
