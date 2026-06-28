import type { FC } from "react";

interface Props {
  searches: string[];
  onTermClick: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onTermClick }) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas Previas</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li onClick={() => onTermClick(search)} key={search}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
