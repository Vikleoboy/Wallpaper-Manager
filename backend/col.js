import fs from "fs";
import path from "path";

// let shit = {
//   ...data,
// };

// function addCol(name) {
//   shit[name] = [];
// }

// addCol("sea");

class Collation {
  constructor(path) {
    this.path = path;
    let d = fs.readFileSync(this.path);
    console.log(d, JSON.parse(d));
    this.data = JSON.parse(d);
    console.log(this.data);
  }

  addCol(name) {
    this.data[name] = [];
  }

  additem(name, link) {
    try {
      this.data[name].push(link);
    } catch (error) {
      console.log(error);
    }
  }

  end() {
    fs.writeFile(
      this.path,
      JSON.stringify(this.data),
      (error) => error && console.log(error)
    );
  }
}

export default Collation;
