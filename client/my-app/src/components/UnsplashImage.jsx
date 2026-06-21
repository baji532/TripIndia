import { useState, useEffect } from 'react';

const cache = {};

function UnsplashImage({ query, alt, className }) {
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cache[query]) {
      setImgUrl(cache[query]);
      setLoading(false);
      return;
    }

    const fetchImage = async () => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
          {
            headers: {
              Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
            }
          }
        );
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          const url = data.results[0].urls.regular;
          cache[query] = url;
          setImgUrl(url);
        }
      } catch (err) {
        console.error('Image fetch failed:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [query]);

  if (loading) {
    return (
      <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">Loading...</span>
      </div>
    );
  }

  return (
    <img
      src={imgUrl || 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80'}
      alt={alt}
      className={className}
    />
  );
}

export default UnsplashImage;