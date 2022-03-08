import React from 'react';

import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import SearchAppBar from '../components/Appbar';
import RecipeReviewCard from '../components/Card';
import { useSelector } from 'react-redux';
import TransitionAlerts from '../components/Counter';
import { Link } from 'react-router-dom';
import HorizontalLinearStepper from '../components/Stepper';

const Intro = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ height: '100%' }}>
        <Grid
          sx={{ height: '90%' }}
          container
          direction="column"
          justifyContent="center"
          alignContent="center"
        >
          <HorizontalLinearStepper
            steps={[
              'O React renderiza',
              'useMemo? useCallback?',
              'Igualdades',
              'O hook',
              'Use com sabedoria',
            ]}
            text={[
              'Qualquer tipo de código escrito no corpo do nosso componente, seja uma função ou uma variável, será recriado toda vez que o react entrar no fluxo de renderização, que acontece a cada alteração nesse componente (por exemplo um stado local), mesmo que tal função ou variável se mantenha exatamente igual. Para evitar essa re-renderização, podemos utilizar da memoização.',
              'UseMemo e useCallback geram muita confusão de como eles funcionam e a diferença entre um e outro. Ambos esperam os mesmos parâmetros: uma função, e um array de dependências. Ambos também fazem um memoize ou memorização. A diferenca é que o useCallback vai te dar uma igualdade referencial de uma função entre cada render, enquanto useMemo vai te dar uma igualdade referencial da execução dessa função.',
              'Quando falamos de igualdade de referencia ou igualdade referencial no JavaScript estamos nos referindo basicamente aos operadores de comparação de igualdade, o == (duplo igual ou igualdade abstrata) e === (triplo igual ou igualdade rigorosa).',
              'Essa igualdade referencial evita que essas variáveis ou funções sejam recriadas a cada render. Como o hook "escuta" um array de dependências, se as dependências não sofrerem alterações ele não irá recriar essa variáveis/funções, e sim retornar o valor memoizado. O useMemo executa função que você passou pra ele uma vez e memoiza o retorno, enquanto o useCallback memoiza a função.',
              'Porém, essa memoização tem um custo de processamento e armazenamento, não é correto envolver tudo nesses hooks. A principal pergunta que se deve fazer é: essa função é pesada? Se a resposta for não, o uso do hook pode prejudicar a performance. Nesse caso vale sempre testar a performance da sua aplicação para identificar possíveis pontos de renderização desnecessária.',
            ]}
          />
        </Grid>
      </Container>
    </>
  );
};

export default Intro;
