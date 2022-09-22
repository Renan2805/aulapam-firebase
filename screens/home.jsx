import { useState, useEffect } from 'react' 
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { ref, onValue } from 'firebase/database'
import { db } from '../config/firebase'

const Home = ({navigation}) => {

  const [alunos, setAlunos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAlunos = async () => {
    const refAlunos = await ref(db, 'Alunos/')
    await onValue(refAlunos, (snapshot) => {
      if(snapshot.exists()) {
        setAlunos(snapshot.val())
        setIsLoading(false)
      }
    })
  }

  useEffect(() => {
    getAlunos()
  }, [])

  if(!isLoading) return (
    <View style={styles.content}>
      <Text style={styles.title}>Alunos</Text>
      {
        alunos.map((aluno, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate('detalhes', {aluno: aluno})}
          >
            <Text style={styles.text}>{aluno.Nome}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
  else return <Text>Loading...</Text>
}

const styles = StyleSheet.create({
  content: {
    padding: 10
  },
  button: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36
  },
  text: {
    fontFamily: 'Poppins_400Regular'
  }
})

export default Home