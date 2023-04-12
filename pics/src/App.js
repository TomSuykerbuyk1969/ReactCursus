import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/Imagelist';

function App() {
const [images, setImages] = useState([]);
const onSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
}

    return (
        <div>
            <SearchBar onSubmit={onSubmit}/>
            <ImageList images={images}/>
        </div>
    );
}

export default App;