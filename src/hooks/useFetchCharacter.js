import {useState} from 'react';

const useFetchCharacter = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })
  return state;
}

export default useFetchCharacter;