import React from 'react';

import { Container } from './styles';

import styles from './index.css';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.disabled,
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <Container>
      <Button color="primary">
        <Grid container spacing={0}>
          <Grid item xs={12}>

          </Grid>
          <Grid item xs={6}>
            <div class="hero">
              <spam class="hero__title1">Ensine <br></br>onde estiver</spam>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div class="hero">
              <spam class="hero__title2">Oferecendo as ferramentas e dicas que professores e famílias precisam para ajudar os alunos a continuar aprendendo.</spam>
            </div>
            <Grid container spacing={0}>


              <Grid class="gridImg" item xs={3}>
                <img alt="Google" class=" " src="https://lh3.googleusercontent.com/7mzg0WRiU_k8OeNK4mIYPJYodBsoJTY7ry6af2eE7pHZaR5VtOKakPhMd83aIHQsjE3RUFB-7hgcErrCSykAMjBVCX4=h100-e365"></img>
              </Grid>

              <Grid class="gridImg" item xs={3}>
                <img alt="UNESCO" class=" " src="https://lh3.googleusercontent.com/6yKh27_Z7QsHh8Nz62iK0xIKZIGIk3wTYcJh4Y2YRAmQvTV7NdpYaOzUjNyshSQ9FFDJcmF6aun4QYXRJzp_w-WWFg=h100-e365"></img>
              </Grid>

            </Grid>

          </Grid>


          <Grid item xs={12}>
            <h2 class="communities__header" data-scroll="Connect with your local community">
              Conecte-se com sua comunidade local
            </h2>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <article class="communities__item">
                <h3 class="communities__item-title">Webinars</h3>
                <p class="communities__item-description">
                  Participe de treinamentos de produtos virtuais e webinars de ensino a distância.
                  </p>
                <a aria-label="Link para o site EduOnAir Brasil" class="button button--yellow communities__button" href="https://events.withgoogle.com/eduonairbr/agenda/#content" rel="noopener noreferrer" target="_blank">
                  FIQUE POR DENTRO
                  </a>
              </article>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <article class="communities__item">
                <h3 class="communities__item-title">Comunidades locais</h3>
                <p class="communities__item-description">
                  Participe de um Grupo de Educadores Google para se conectar e compartilhar ideias com outros colegas na sua comunidade.
                  </p>
                <a aria-label="Link para a página do Grupos de Educadores Google" class="button button--yellow communities__button" href="https://sites.google.com/corp/saladeaula.org/gegbrasil/home" rel="noopener noreferrer" target="_blank">
                  SAIBA MAIS
                  </a>
              </article>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <article class="communities__item">
                <h3 class="communities__item-title">Horários de trabalho remoto</h3>
                <p class="communities__item-description">
                  Participe da conversa #TeachFromHome com nossos horários de trabalho remoto e chats semanais no Twitter.
                  </p>
                <a aria-label="Link para o perfil do Google for Education no Twitter" class="button button--yellow communities__button" href="https://twitter.com/GoogleForEdu" rel="noopener noreferrer" target="_blank">
                  PARTICIPAR
                  </a>
              </article>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <div class="espaco"></div>
          </Grid>
        </Grid>
      </Button>
    </Container>
  );
}

export default Contact;