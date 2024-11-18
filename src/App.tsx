import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import money_box from './assets/money_box.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = useCallback(() => {
    window.gtag('event', '3870_interesting_click_v3');
    setLoading(true);
    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  }, []);
  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '5rem' }} tag="h1" view="medium" font="system" weight="semibold">
          Ваши 100&nbsp;000&nbsp;₽ могут приносить доход🔥
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Баланс вашей карты не опускался ниже 100&nbsp;000&nbsp;₽. Пора на этом заработать, откройте накопительный счёт и
          каждый месяц получайте от 4% просто так
        </Typography.Text>
        <img src={money_box} width="100%" height={313} alt="money_box" style={{ objectFit: 'contain' }} />
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Мне интересно
        </ButtonMobile>
      </div>
    </>
  );
};
