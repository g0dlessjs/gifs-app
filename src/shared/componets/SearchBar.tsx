interface Props {
  textButton: string;
  placeholder: string;
}

export const SearchBar = ({ textButton, placeholder }: Props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder={placeholder} />
      <button>{textButton}</button>
    </div>
  );
};
