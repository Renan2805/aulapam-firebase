import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Detalhes = ({route}) => {

  const [aluno, setAluno] = useState(route.params.aluno)

  useEffect(() => {
    console.log(aluno)
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
      <View style={[styles.info, {borderWidth: 0}]}>
        <Text style={styles.subtitle}>Turma: </Text>
        <Text style={styles.text}>{aluno.Turma}</Text>
      </View>
      <View style={styles.notas}>
        {
          aluno.Notas.map((nota, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.subtitle}>{`Nota${index+1}: `}</Text>
              <Text style={styles.nota}>{nota}</Text>
            </View>
          ))
        }
        <View style={[styles.row, {borderWidth: 0}]}>
          <Text style={styles.subtitle}>Média:</Text>
          <Text style={styles.nota}>{aluno.Media}</Text>
        </View>
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
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'black'
  },
  notas: {
    width: '100%',
    padding: 10
  },
  nota: {
    fontFamily: 'Poopins: 400Regular',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
})

export default Detalhes