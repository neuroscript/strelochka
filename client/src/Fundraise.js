let fundraise = <div className="App">
  <Grid style={{marginTop: 20}}>
    <Row>
      <Col md={8} mdOffset={2}>
        <h1 style={{fontStyle: 'italic', fontWeight: 800}}>Стрелочке нужна ваша помощь</h1>
        <br />
        <div style={{fontSize: '16px'}}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qtLWtC6QGO8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <p>Привет! Это Антон, создатель Стрелочки 👋</p>
          <p>Стрелочка создана для вас и с мыслями о вас. Её бы никогда не было без вас, и без вас её не будет. Сейчас настал момент когда Стрелочке нужны вы.</p>
          <p>Для того чтобы Стрелочка продолжила работу нужно собрать 30 000 рублей на оплату счетов на год вперед. Эта сумма гарантирует бесперебойную работу в течении года.</p>
          <Panel>
            <p>Стрелочка постоянно развивается. За последнюю неделю мы смогли увеличить скорость работы в три раза. Теперь при поиске билетов на месяц запрос длится не полторы минуты, а всего 30 секунд. Улучшено отображение таблицы в мобильном формате. Мы планируем развиваться и дальше, еще очень много вещей можно сделать.</p>
          </Panel>
          <p>Если каждый из вас отправит по 500 рублей, мы соберем необходимую сумму за 2 дня. Если по 100 рублей - то за неделю. Пожалуйста поддержите нас. Перейдите к форме пожертвования нажав жёлтую кнопку ниже, либо сделайте перевод по номеру карты Тинькофф 4377 7314 2441 6854</p>
          <br />
          <h4>Как сделать пожертвование</h4>
          <p><a className="btn btn-warning" href="https://money.yandex.ru/to/410011091913898" target="_blank">Перейти к форме пожертвования</a></p>
          <p>или</p>
          <p>сделайте перевод на карту</p>
          <Panel>4377 7314 2441 6854 <br /> (Тинькофф банк)</Panel>
          <br />
          <h4>Сейчас собрано</h4>
          <p>{this.state.serverData.donate} руб. из 30 000 (информация может обновляться с задержкой)</p>
          <ProgressBar now={100 / (30000/this.state.serverData.donate)} label={this.state.serverData.donate + ' р.'} />
          <br />
          <h4>Благодарю вас за внимание.</h4>
          <p>Если вы желаете сказать мне что-то, например отправить пожелание, воспользуйтесь формой:</p>
          <FeedbackFormSimple />
          <br />
          <p>Искренне ваш, Антон Мурыгин. Если вам не трудно, поделитесь этой страницей с друзьями.</p>
        </div>
      </Col>
    </Row>
  </Grid>
</div>
