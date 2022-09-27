import { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { set, ref } from 'firebase/database'
import { db } from '../config/firebase'

const AdicionarAluno = () => {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [turma, setTurma] = useState('')

  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')

  const addAluno = async () => {

    if((nome && idade && turma) != ''){
      setUploading(true)
      const refAluno = ref(db, `Alunos/8`)
      await set(refAluno, {
        Nome: nome,
        Idade: idade,
        Turma: turma
      })
      .then(() => {
        setUploading(false)
        setMessage('Adicionado!')
      })
      .catch(e => setMessage('Erro: ', e))
    }
    else {
      setMessage('Dados inválidos')
    }
  }

  const maybeRenderuploading = () => {
    if(uploading) return (
      <View style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .1)'
      }}>
        <ActivityIndicator size={'large'} color={'black'}/>
      </View>
    )
  }

  const maybeRenderMessage = () => {
    let color = 'red'
    if(message == 'Adicionado!') color = 'green'
    if(message !== '') return (
      <Text style={[styles.label, {color: color}]}>{message}</Text>
    )
  }

  useEffect(() => {

  })

  return (
    <>
    <View style={styles.content}>
      <Text style={styles.title}>Adicionar</Text>
      {
        maybeRenderMessage()
      }
      <View style={styles.labeledInput}>
        <Text style={styles.label}>Nome</Text>
        <TextInput 
          style={styles.input}
          value={nome}
          onChangeText={text => setNome(text)}
          placeholder={''}
        />
      </View>
      <View style={styles.labeledInput}>
        <Text style={styles.label}>Idade</Text>
        <TextInput 
          style={styles.input}
          value={idade}
          onChangeText={text => setIdade(text)}
          placeholder={''}
        />
      </View>
      <View style={styles.labeledInput}>
        <Text style={styles.label}>Turma</Text>
        <TextInput 
          style={styles.input}
          value={turma}
          onChangeText={text => setTurma(text)}
          placeholder={''}
        />
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => addAluno()}
      >
        <Text style={[styles.title, {color: 'white', fontSize: 26, textAlign: 'center'}]}>Adicionar</Text>
      </TouchableOpacity>
    </View>
    {
      maybeRenderuploading()
    }
    </>
  )

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    margin: 10,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
    width: '100%'
  },
  labeledInput: {
    marginVertical: 10,
    width: '100%'
  },
  label: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16
  },
  input: {
    fontFamily: 'Poppins_400Regular',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    outlineStyle: 'none'
  },
  button: {
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',

    position: 'absolute',
    bottom: 10
  }
})

export default AdicionarAluno