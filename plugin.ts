import { AlitaApi } from 'alita';

export default (api: AlitaApi) => {
  api.onDevCompileDone(() => {
    // console.log('> onDevCompileDone', opts.isFirstCompile);
  });
  api.onBuildComplete(() => {
    // console.log('> onBuildComplete', opts.isFirstCompile);
  });
};
