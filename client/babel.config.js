module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/components': './src/components',
            '@/screens': './src/screens',
            '@/utils': './src/utils',
            '@/assets': './src/assets',
            '@/types': './src/types',
            '@/context': './src/context',
            '@/services': './src/services',
            '@/navigation': './src/navigation'
          }
        }
      ]
    ]
  };
};
