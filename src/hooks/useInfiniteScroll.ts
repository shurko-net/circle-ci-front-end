import {
  useState, useRef, useCallback, useEffect,
} from 'react';

function useInfiniteScroll() {
  const [page, setPage] = useState(0);
  const loadMoreRef = useRef(null);
  const isInitialLoad = useRef(true);

  const handleObserver = useCallback((entries:any) => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
    } else {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((prevPage:number) => prevPage + 1);
      }
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
  }, [handleObserver]);

  return { loadMoreRef, page };
}

export default useInfiniteScroll;
