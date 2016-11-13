var I18n = require('react-i18nify').I18n;


I18n.setTranslations({
  en: {
    application: {
      title: 'Choose your team',
      fire: 'Fire',
      water: 'Water',
      electric: 'Electric',
      Empty: 'Empty Slot'
    },
    date: {
      long: 'MMMM Do, YYYY'
    },
    export_0: 'Nothing to export',
    export_1: 'Export %{count} item',
    export_plural: 'Export %{count} items'
  },
  jp: {
    application: {
      title: 'あなたのチームを選択',
      fire: '火災',
      water: '水',
      electric: '電気の',
      Empty: '空きスロット'
    },
    date: {
      long: 'D MMMM YYYY'
    },
    export_0: 'Niks te exporteren',
    export_1: 'Exporteer %{count} ding',
    export_plural: 'Exporteer %{count} dingen'
  }
});

I18n.setLocale('jp');
