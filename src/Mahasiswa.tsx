class Mahasiswa {
  private nim: string;
  private nama: string;
  private mataKuliah: string;
  private nilaiTugas: number;
  private nilaiQuiz: number;
  private nilaiUTS: number;
  private nilaiUAS: number;
  private total: number;

  constructor(nim: string, nama: string, mataKuliah: string, nilaiTugas: number, nilaiQuiz: number, nilaiUTS: number, nilaiUAS: number) {
    this.nim = nim;
    this.nama = nama;
    this.mataKuliah = mataKuliah;
    this.nilaiTugas = nilaiTugas;
    this.nilaiQuiz = nilaiQuiz;
    this.nilaiUTS = nilaiUTS;
    this.nilaiUAS = nilaiUAS;
    this.total = nilaiTugas + nilaiQuiz + nilaiUTS + nilaiUAS;
  }

  getTotal = (): number => {
    return this.total;
  }
  
  getNIM = (): string => {
    return this.nim;
  }
  
  getNama = (): string => {
    return this.nama;
  }

  getMatakuliah = (): string => {
      return this.mataKuliah;
  }
  
  getNilai = (): number[] => {
    return [this.nilaiTugas, this.nilaiQuiz, this.nilaiUTS, this.nilaiUAS];
  }

  getLabel = (nilai: number): string => {
    if(nilai >= 90) {
      return 'A';
    } else if(nilai >= 85) {
      return 'A-';
    } else if (nilai >= 80) {
      return 'B+';
    } else if(nilai >= 75) {
      return 'B';
    } else if(nilai >= 70) {
      return 'B-';
    } else if(nilai >= 65) {
      return 'C+';
    } else if(nilai >= 60) {
      return 'C';
    } else {
      return 'D';
    }
  }

  getKeterangan = (label: string): string => {
    if(label === 'A') {
      return 'Sangat memuaskan';
    } else if (label === 'A-') {
      return 'Memuaskan';
    } else if (label === 'B+') {
      return 'Sangat cukup';
    } else if (label === 'B') {
      return 'Cukup';
    } else if (label === 'B-') {
      return 'Kurang cukup';
    } else if (label === 'C+') {
      return 'Pas-pasan';
    } else if (label === 'C') {
      return 'Kurang pas';
    } else {
      return 'Tidak lulus';
    }

  }

}

export default Mahasiswa;