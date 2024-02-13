
function BarangFilter(req) {
  let qSearch = {};
  const { search, limit, page, ...filters } = req.query;

  if (search) {
    qSearch = {
      $or: [
        /**
         * You can change field1 and field2 according to your needs.
         **/

        { nama: { $regex: ".*" + search + ".*", $options: "i" } },
 //Ekspresi reguler yang akan dicocokkan dengan nilai dalam field nama. Di sini, search adalah variabel yang mungkin berisi teks yang dicari.
 // Ekspresi ini menggunakan .* di sekitar nilai pencarian untuk mencocokkan teks di mana saja di dalam nilai tersebut.
 //Ekspresi reguler yang akan dicocokkan dengan nilai dalam field nama. Di sini, search adalah variabel yang mungkin berisi teks yang dicari. Ekspresi ini menggunakan .* di sekitar nilai pencarian untuk mencocokkan teks di mana saja di dalam nilai tersebut.
      ],
    };
  }

  return { ...filters, ...qSearch };
}

module.exports = {
  BarangFilter,
};
  