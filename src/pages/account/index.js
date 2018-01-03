/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';

/* Custom Components */
import PasswordValidator from 'pages/account/components/PasswordValidator';

/* Redux */
import { connect } from 'react-redux';
import ValidationsActions from 'store/ducks/validations';

import { colors } from 'styles';
import styles from './styles';

const Account = ({ validatesStrength }) => (
  <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} >
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Olist</Text>
        <Text style={styles.sub}>Crie sua conta</Text>
      </View>
      <View style={styles.fields}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor={colors.placeholder}
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor={colors.placeholder}
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          id="password"
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor={colors.placeholder}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          underlineColorAndroid="transparent"
          onChangeText={password => validatesStrength(password)}
        />

        <PasswordValidator />

        <Text style={styles.label}>Confirme sua senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor={colors.placeholder}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
          <Text style={styles.buttonText}>
            Criar conta
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  </ScrollView>
);

Account.propTypes = {
  validatesStrength: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  validatesStrength: password =>
    dispatch(ValidationsActions.validationsValidatesStrength(password)),
});

export default connect(null, mapDispatchToProps)(Account);
