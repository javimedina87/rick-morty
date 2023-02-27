import { useEffect, useState } from 'react';
import Character from '../../Character/Character';
import Pagination from '../../Pagination/Pagination';
import classes from './CharacterContainer.module.css';

const DEFAULT_API_URL = 'https://rickandmortyapi.com/api/character';

const CharacterContainer = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(localStorage.getItem('lastVisitedPage'));
  const [apiUrl, setApiUrl] = useState(() => {
    if (Number(currentPageNumber) !== 1) {
      return `${DEFAULT_API_URL}?page=${currentPageNumber}`
    }

    return DEFAULT_API_URL;
  });
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const _getCurrentPageNumber = () => {
    const pageNumber = apiUrl.substring(apiUrl.indexOf('=') + 1);

    return Number(pageNumber) || 1;
  }

  const _saveAndSetCurrentPageNumber = () => {
    const pageNumber = _getCurrentPageNumber();

    setCurrentPageNumber(pageNumber);

    localStorage.setItem('lastVisitedPage', pageNumber);
  }

  const previousPageHandler = () => {
    setApiUrl(apiData.info?.prev);
  }

  const nextPageHandler = () => {
    setApiUrl(apiData.info?.next);
  }

  const fetchApiData = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setApiData(prevState => ({
        ...prevState,
        ...data
      }));
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }

  };

  useEffect(() => {
    fetchApiData();

    _saveAndSetCurrentPageNumber();
  }, [apiUrl]);

  return (
    <div className={classes['character-container']}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && apiData.results?.length === 0 && <p>No characters</p>}
      {!isLoading && error && <p>Error retrieving characters...</p>}

      {!isLoading && apiData.results?.length > 0 &&
        <>
          <Pagination
            currentPage={currentPageNumber}
            hasPreviousPage={Boolean(apiData.info?.prev)}
            hasNextPage={Boolean(apiData.info?.next)}
            onClickPreviousPage={previousPageHandler}
            onClickNextPage={nextPageHandler}
          />

          <ul>
            {apiData.results?.map(character => <li key={character?.id}><Character data={character}/></li>)}
          </ul>
        </>
      }

    </div>
  )
}

export default CharacterContainer;