const state = {
  breakpoints: [
    {
      value: 540,
      columnSize: 12
    },
    {
      value: 720,
      columnSize: 12
    },
    {
      value: 960,
      columnSize: 6
    },
    {
      value: 1140,
      columnSize: 4
    }
  ],
  isSyncing: false,
  isSynced: false,
  syncedDate: 0,
  syncError: null,
  syncStores: ['Posts'],
  language: 'sv',
  languages: [
    {
      label: 'English',
      value: 'en'
    },
    {
      label: 'Swedish',
      value: 'sv'
    }
  ]
};

export default state;
