import { Thang } from "./Enums";

export class String {
  static num = (number: any) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  static date = (date: any) => {
    let newDate =
      new Date(date).getDate() +
      "/" +
      Thang[new Date(date).getMonth()] +
      "/" +
      new Date(date).getFullYear() +
      " lúc " +
      new Date(date).getHours() +
      ":" +
      new Date(date).getMinutes() +
      " " +
      (new Date(date).getHours() > 12 ? "tối" : "sáng");
    return newDate;
  };

  static giaoAn = (ga: string) => {
    let newGa = ga.split(" ");
    if (newGa[0] == "Giáo" && newGa[1] == "án") {
      newGa.splice(0, 2);
      let temp = newGa[0].split("");
      temp[0] = temp[0].toUpperCase();
      newGa[0] = temp.join("");
      return newGa.join(" ");
    } else {
      return ga;
    }
  };
}
