import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../Redux/Characters/Characters.actions";
// import Loading from "../../components/loading";
import { CharactersSelectors, ICharState } from "../Redux/Characters/Characters.slice";
import { AppDispatch } from "../Redux/Store";
import { CharacterCard } from "./CharacterCard";
// import { ArticleWrapper, ContentWrapper } from "./styled";

export const AllCharacters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const charactersList = useSelector(CharactersSelectors.getAllCharacters);
  const isAllCharactersLoading = useSelector(
    CharactersSelectors.getCharactersLoading
  );

  // const inputRef = useRef();
  // const [characters, setCharacters] = useState([]);
  // const [characterId, setCharacterId] = useState<null | number>();
  // const [input, setInput] = useState("");

  // useEffect(() => {
  //   getCharacters().then((result) => setCharacters(result.results));
  // }, []);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  // const handleClick = (id: number) => {
  //   setCharacterId(id);
  // };

  const allCharacters = useMemo(() => {
    return charactersList.map((card: ICharState) => (
      <CharacterCard key={card.id} card={card} />
    ));
  }, [charactersList]);

  return (<>
    {/* <ContentWrapper> */}
    {isAllCharactersLoading && <>Loading...</>}
    {/* <ArticleWrapper> */}
    <div>{allCharacters}</div>
    {/* </ArticleWrapper> */}
    {/* </ContentWrapper> */}
  </>
  );
};
