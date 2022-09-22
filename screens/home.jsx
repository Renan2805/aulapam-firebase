import { useState, useEffect } from 'react' 
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { ref, onValue } from 'firebase/database'
import { db } from '../config/firebase'

const Home = () => {

  const [alunos, setAlunos] = useState([])

  const getAlunos = async () => {
    const refAlunos = await ref(db, 'Alunos/')
    await onValue(refAlunos, (snapshot) => {
      if (snapshot.exists()) setAlunos(snapshot.val())
      console.log(snapshot.val())
    })
  }

  useEffect(() => {
    getAlunos()
  }, [])

  return (
    <View>
      {
        alunos.map(aluno => (
          <TouchableOpacity onPress={navigation.navigate('detalhes', {aluno: aluno})}>
            <Text>{aluno.Nome}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  content: {

  }
})

export default Home