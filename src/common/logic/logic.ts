export function checkIfBookmarked(
  selector: {
    heart: {
      id: number;
      url: string;
    }[];
    bookmark: {
      id: number;
      url: string;
    }[];
  },
  imageUrl: string
) {
  if(selector.bookmark.length === 0) return false;

  let filteredArr = selector.bookmark.filter((itm) => itm.url === imageUrl);
  return filteredArr.length !== 0;
}

export function checkIfLiked(
    selector: {
      heart: {
        id: number;
        url: string;
      }[];
      bookmark: {
        id: number;
        url: string;
      }[];
    },
    imageUrl: string
  ) {
    if(selector.heart.length === 0) return false;
    
    let filteredArr = selector.heart.filter((itm) => itm.url === imageUrl);
    return filteredArr.length !== 0;
  }
  