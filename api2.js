import { AnimeWallpaper } from "anime-wallpaper";
const wall = new AnimeWallpaper();

async function Wallpaper1(query, pageNum = 1, way = 1) {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    try {
      if (way === 1) {
        var wallpaper = await wall.getAnimeWall4({
          type: "sfw",
          title: query,
          page: pageNum,
        });
      } else {
        var wallpaper = await wall.getAnimeWall1({
          search: query,
          page: pageNum,
        });
      }
      return wallpaper;
    } catch (err) {
      console.log("ahhh" + err);
    }
  }

  // var wallpaper = await wall.getAnimeWall1({
  //   search: query,
  //   page: pageNum,
  // });
  // console.log(wallpaper);
}

export default Wallpaper1;
