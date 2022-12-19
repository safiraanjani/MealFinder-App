class DataSource {
  static searchClub(data, keyword) {
    return new Promise((resolve, reject) => {
      const filteredClubs = data.filter((club) =>
        club.strCategory.toUpperCase().includes(keyword.toUpperCase())
      );
      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
        reject(`Menu yang kamu cari tidak tersedia. Cari yang lain yuk :)`);
      }
    });
  }
}
export default DataSource;
