import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ref, onValue } from 'firebase/database'
import { db } from '../config/firebase'

const Home = () => {

  const [aluno, setAluno] = useState()

  const getAluno = async () => {
    const nameRef = await ref(db, 'Alunos/2')
    await onValue(nameRef, (snapshot) => {
      setAluno(snapshot.val())
      console.log(snapshot.val())
    })
  }

  useEffect(() => {
    getAluno()
  }, [])

  if(aluno) return (
    
    <View style={styles.content}>
      <Text style={styles.title}>Aluno</Text>
      <View style={styles.info}>
        <Text style={styles.subtitle}>Nome: </Text>
        <Text style={styles.text}>{aluno.Nome}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.subtitle}>Idade: </Text>
        <Text style={styles.text}>{aluno.Idade}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.subtitle}>Turma: </Text>
        <Text style={styles.text}>{aluno.Turma}</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    padding: 10
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    textAlign: 'left',
    fontSize: 32
  },
  subtitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 20
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%'
  }
})

export default Home