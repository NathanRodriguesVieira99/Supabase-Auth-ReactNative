import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { supabase } from '../../../lib/supabase/supabase';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = async () => {
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert('Erro', error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    router.replace('/(panel)/profile/page');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>
          Dev<Text style={styles.logoSpan}>App</Text>
        </Text>
        <Text style={styles.slogan}>O futuro da programação</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Digite seu email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            secureTextEntry
            placeholder="Digite sua senha"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Pressable style={styles.btn}>
          <Text style={styles.btnText} onPress={handleSignIn}>
            {loading ? 'Carregando...' : 'Acessar'}
          </Text>
        </Pressable>

        <Link style={styles.link} href="/(auth)/SignUp/page">
          <Text>Ainda não possui uma conta? Cadastre-se</Text>
        </Link>
      </View>
    </View>
  );
}
