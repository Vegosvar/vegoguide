const state = {
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
