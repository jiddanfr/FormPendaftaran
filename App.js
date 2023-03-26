import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  const [namaSekolah, setNamaSekolah] = useState('');
  const [alamat, setAlamat] = useState('');
  const [kodePos, setKodePos] = useState('');
  const [email, setEmail] = useState('');
  const [facebook, setFacebook] = useState('');
  const [jumlahSiswa, setJumlahSiswa] = useState('');


  const handleSubmit = () => {
    alert(`
      Nama Sekolah: ${namaSekolah}
      Alamat : ${alamat}
      Kode Pos: ${kodePos}
      Email: ${email}
      Facebook :${facebook}
      Jumlah Siswa :${jumlahSiswa}

    `);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Input Data Sekolah</Text>

      

      <TextInput
        style={styles.input}
        placeholder="Nama Sekolah"
        onChangeText={(text) => setNamaSekolah(text)}
        value={namaSekolah}
      />

      <TextInput
        style={styles.input}
        placeholder="Alamat "
        onChangeText={(text) => setAlamat(text)}
        value={alamat}
      />

      <TextInput
        style={styles.input}
        placeholder="Kode Pos"
        onChangeText={(text) => setKodePos(text)}
        value={kodePos}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Facebook"
        onChangeText={(text) => setFacebook(text)}
        value={facebook}
      />

      <TextInput
        style={styles.input}
        placeholder="Jumlah Siswa"
        onChangeText={(text) => setJumlahSiswa(text)}
        value={jumlahSiswa}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  heading: {
    paddingTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default App;
