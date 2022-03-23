import './styles.css'
import './index.css'
import Mahasiswa from './Mahasiswa';
import { useEffect, useState } from 'react';


function App() {
  
  // Variable mahasiswa (Dummy Data)
  const [mahasiswa, setMahasiswa] = useState([
    new Mahasiswa("2003425", "Ikhsan", "Konstruksi Perangkat Lunak", 90, 90, 88, 92),
    new Mahasiswa("2003426", "Muhammad Octane", "Teknik Basis Data", 85, 85, 86, 87),
    new Mahasiswa("2003427", "Budi Wati", "Database", 50, 40, 75, 80),
    new Mahasiswa("2003428", "Muhammad Mobile Legend", "Aljabar", 78, 100, 80, 65),
    new Mahasiswa("2003429", "Yayat Drone", "Pemrograman Web", 40, 45, 60, 77),
    new Mahasiswa("2003430", "Muhammad Ultimate", "Pemrograman Berorientasi Object", 78, 82, 88, 100)
  ]);

  // Form 
  const [nim, setNIM] = useState('');
  const [nama, setNama] = useState('');
  const [matakuliah, setMatakuliah] = useState('');
  const [nilaiTugas, setNilaiTugas] = useState('');
  const [nilaiUTS, setNilaiUTS] = useState('');
  const [nilaiQuiz, setNilaiQuiz] = useState('');
  const [nilaiUAS, setNilaiUAS] = useState('');

  // Switch
  const [isTrue, setIsTrue] = useState(false);

  // Handle submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMahasiswa([...mahasiswa, new Mahasiswa(nim, nama, matakuliah, parseInt(nilaiTugas), parseInt(nilaiUTS), parseInt(nilaiQuiz), parseInt(nilaiUAS))]);
    e.target.reset();
  }

  // Menghapus data mahasiswa
  const [remove, setRemove] = useState([] as any);
  const handleRemove = () => {
    remove.forEach((element: any) => {
      setMahasiswa(mahasiswa.filter(item => item.getNIM() + item.getNama() + item.getMatakuliah() !== element));
      setRemove(remove.filter((item: any) => item !== element));
    });

  }

  useEffect(() => {
    handleRemove();
  }, [mahasiswa]);


  return (
    <div>
      <h1>Data Mahasiswa</h1>

      <table className='switch'>
        <tbody>
          <tr>
            <td>
            <label className="switch">
              <input type="checkbox" onChange={(e) => {
                setIsTrue(!isTrue);
              }}/>
              <span className="slider round"></span>
            </label>
            </td>
            <td>Show Numeric</td>
          </tr>
        </tbody>
      </table>
      <br />
      {/* Untuk menampilkan tabel mahasiswa */}
      <table className="table-mhs">
        <tbody>
          <tr className='table-header'>
            <th>Select</th>
            <th>NIM</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai Tugas</th>
            <th>Nilai Quiz</th>
            <th>Nilai UTS</th>
            <th>Nilai UAS</th>
            <th>Total Nilai</th>
            <th>Rata-rata</th>
            <th>Keterangan</th>
          </tr>

          {mahasiswa.map((item) => 
            <tr key={item.getNIM() + item.getNama() + item.getMatakuliah()}>
              <td><input className='selector' type="checkbox" onChange={(e) => {
                if(e.target.checked) {
                  setRemove([...remove, item.getNIM() + item.getNama() + item.getMatakuliah()]);
                } else {
                  setRemove(remove.filter((arr: string) => arr !== item.getNIM() + item.getNama() + item.getMatakuliah()));
                }
              }}/></td>
              <td className='center-number'>{item.getNIM()}</td>
              <td>{item.getNama()}</td>
              <td>{item.getMatakuliah()}</td>
              <td className='center-number'>{isTrue ? item.getNilai()[0] : item.getLabel(item.getNilai()[0])}</td>
              <td className='center-number'>{isTrue ? item.getNilai()[1] : item.getLabel(item.getNilai()[1])}</td>
              <td className='center-number'>{isTrue ? item.getNilai()[2] : item.getLabel(item.getNilai()[2])}</td>
              <td className='center-number'>{isTrue ? item.getNilai()[3] : item.getLabel(item.getNilai()[3])}</td>
              <td className='center-number'>{item.getTotal()}</td>
              <td className="center-number">{isTrue ? item.getTotal() / 4 : item.getLabel(item.getTotal() / 4)}</td>
              <td className='center-number' style={{
                color: item.getKeterangan(item.getLabel(item.getTotal() / 4)) === 'Tidak lulus' ? 'red' : 'black'
              }}>{item.getKeterangan(item.getLabel(item.getTotal() / 4))}</td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
      <button onClick={handleRemove}>Remove</button>
      <br />
      <br />

      <h3>Input Data Mahasiswa</h3>
      <form action="" className='form' onSubmit={handleSubmit}>
        <label htmlFor="nim">NIM</label> <br />
        <input type="number" min="0" required placeholder='2000***' onChange={(e) => setNIM(e.target.value)}/>
        <br />
        <label htmlFor="nim">Nama</label> <br />
        <input type="text" required placeholder='Budi Wati' onChange={(e) => setNama(e.target.value)}/>
        <br />
        <label htmlFor="nim">Matakuliah</label> <br />
        <input type="text" required placeholder='Kalkulus' onChange={(e) => setMatakuliah(e.target.value)}/>
        <br />
        <label htmlFor="nilai_tugas">Nilai Tugas</label> <br />
        <input type="number" min="0" max="100" placeholder='0-100' required onChange={(e) => setNilaiTugas(e.target.value)}/>
        <br />
        <label htmlFor="nilai_quiz">Nilai Quiz</label> <br />
        <input type="number" min="0" max="100" placeholder='0-100' required onChange={(e) => setNilaiQuiz(e.target.value)}/>
        <br />
        <label htmlFor="nilai_uts">Nilai UTS</label> <br />
        <input type="number" min="0" max="100" placeholder='0-100' required onChange={(e) => setNilaiUTS(e.target.value)}/>
        <br />
        <label htmlFor="nilai_uas">Nilai UAS</label> <br />
        <input type="number" min="0" max="100" placeholder='0-100' required onChange={(e) => setNilaiUAS(e.target.value)}/>
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
