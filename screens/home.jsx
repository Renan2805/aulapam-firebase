import { useState, useEffect } from 'react' 
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

import { ref, onValue } from 'firebase/database'
import { db } from '../config/firebase'

import { FontAwesome } from '@expo/vector-icons';

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
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <Text style={styles.title}>Alunos</Text>
        <FontAwesome name="plus" size={24} color="black" onPress={() => navigation.navigate('adicionar')}/>
      </View>
      <ScrollView>
        {
          alunos.map((aluno, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.button}
              onPress={() => navigation.navigate('detalhes', {aluno: aluno})}
            >
              <Text style={styles.text}>{aluno.Nome}</Text>
              <FontAwesome name="arrow-right" size={24} color="black" />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
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
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36
  },
  text: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16
  }
})

export default Home