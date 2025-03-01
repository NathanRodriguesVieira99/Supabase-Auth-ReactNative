import { Alert, Button, Text, View } from 'react-native';
import { styles } from './styles';
import { supabase } from '~/src/lib/supabase/supabase';
import { useAuth } from '~/src/contexts/AuthContext';

export default function Profile() {
  const { setAuth } = useAuth();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    setAuth(null);

    if (error) {
      Alert.alert('Error', error.message);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      <Button title="Deslogar" onPress={handleSignOut} />
    </View>
  );
}
