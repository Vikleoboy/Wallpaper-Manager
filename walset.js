import { getWallpaper, setWallpaper } from "wallpaper";

import fs from "fs";

import client from "https";

import fsextra from "fs-extra";

const waldir = "walpaper";

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        res
          .pipe(fs.createWriteStream(filepath))
          .on("error", reject)
          .once("close", () => resolve(filepath));
      } else {
        // Consume response data to free up memory
        res.resume();
        reject(
          new Error(`Request Failed With a Status Code: ${res.statusCode}`)
        );
      }
    });
  });
}

// url "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg"

const makewal = async (id) => {
  // clear the walpaer dir
  fsextra.emptyDirSync(waldir);

  // https://images.pexels.com/photos/37403/bora-bora-french-polynesia-sunset-ocean.jpg

  try {
    await downloadImage(
      `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`,
      waldir + "/" + id + ".jpg"
    );
  } catch {
    return;
  }

  await setWallpaper(waldir + "/" + id + ".jpg");
};

//exprements DOnt uncomment it !

// fsextra.emptyDirSync(waldir) ;

// await downloadImage(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`, waldir + '/'+ id + '.jpg')

// await setWallpaper(waldir+'/'+id+)

// console.log((await getWallpaper()))\

// const walloop = function(t){
//     const sleep = (sec)=>  new Promise(res => setTimeout(res , sec))
//     for
// }

const makewalUrl = async (link) => {
  // clear the walpaer dir
  fsextra.emptyDirSync(waldir);

  // https://images.pexels.com/photos/37403/bora-bora-french-polynesia-sunset-ocean.jpg

  try {
    console.log(link, waldir + "/" + link.split("/")[link.length - 1] + ".jpg");
    await downloadImage(link, waldir + "/" + "k" + ".jpg");
  } catch {
    return;
  }

  await setWallpaper(waldir + "/" + "k" + ".jpg");
};

export { makewal, makewalUrl };
